import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const cssDir = join(root, ".next", "static", "css");
const selectors = [
  { name: ".aspect-square", pattern: /\.aspect-square(?=[\s.{:#>+~])/ },
  { name: ".relative", pattern: /\.relative(?=[\s.{:#>+~])/ },
  { name: ".grid-cols-3", pattern: /\.grid-cols-3(?=[\s.{:#>+~])/ },
  { name: ".loti-trend-grid", pattern: /\.loti-trend-grid(?=[\s.{:#>+~])/ },
  { name: ".loti-trend-card img", pattern: /\.loti-trend-card\s+img\s*\{/ },
];

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : entry.isFile() && path.endsWith(".css") ? [path] : [];
  });
}

console.log("\n[CSS AUDIT] Inspecting Next.js production CSS artifacts");
if (!existsSync(cssDir)) {
  console.error("[CSS AUDIT] FAIL: .next/static/css/ does not exist. Next.js did not emit CSS artifacts.");
  process.exit(1);
}

const files = walk(cssDir).sort();
if (!files.length) {
  console.error("[CSS AUDIT] FAIL: No CSS files were emitted in .next/static/css/.");
  process.exit(1);
}

const contents = files.map((file) => {
  const content = readFileSync(file, "utf8");
  console.log(`[CSS AUDIT] ${file.slice(root.length + 1)} | ${statSync(file).size} bytes`);
  return content;
});

let failed = false;
for (const { name, pattern } of selectors) {
  const matchedFiles = files.filter((_, i) => pattern.test(contents[i]));
  console.log(`[CSS AUDIT] ${matchedFiles.length ? "PASS" : "FAIL"} ${name}${matchedFiles.length ? " in " + matchedFiles.map((f) => f.slice(root.length + 1)).join(", ") : " MISSING"}`);
  if (!matchedFiles.length) failed = true;
}

if (failed) {
  console.error("[CSS AUDIT] FAIL: Required layout/image selectors are absent from generated production CSS.");
  console.error("[CSS AUDIT] Diagnose: verify postcss.config.js is loaded, tailwindcss is installed, app/globals.css contains @tailwind utilities, and tailwind.config.js content globs include app/beaded-patches/page.tsx.");
  console.error("[CSS AUDIT] Next.js build MUST fail rather than silently deploy broken image/grid layouts.");
  process.exit(1);
}
console.log("[CSS AUDIT] PASS: All required Tailwind and homepage trend selectors are present in production CSS.\n");
