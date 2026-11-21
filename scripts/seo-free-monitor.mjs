// Free, dependency-free public SEO snapshot. No private analytics or credentials.
import { writeFile, mkdir } from "node:fs/promises";
const base = "https://www.veloracelace.com";
const timeout = 15000;
async function load(url) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(timeout), headers: { "User-Agent": "VELORACE-SEO-Monitor/1.0" } });
    return { status: response.status, body: await response.text(), finalUrl: response.url };
  } catch (error) { return { status: 0, body: "", error: String(error) }; }
}
const sitemap = await load(base + "/sitemap.xml");
const urls = [...sitemap.body.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(x => x[1].trim()).filter(x => x.startsWith(base));
const unique = [...new Set(urls)].slice(0, 300);
const pages = [];
for (const url of unique) {
  const result = await load(url);
  const html = result.body;
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
  const description = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)/i)?.[1] || "";
  const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/i)?.[1] || "";
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
  const issues = [];
  if (result.status !== 200) issues.push("HTTP_NOT_200");
  if (!title) issues.push("MISSING_TITLE");
  if (!description) issues.push("MISSING_DESCRIPTION");
  if (!canonical) issues.push("MISSING_CANONICAL");
  if (canonical && canonical.replace(/\/$/, "") !== url.replace(/\/$/, "")) issues.push("CANONICAL_MISMATCH");
  if (h1Count !== 1) issues.push("H1_COUNT_" + h1Count);
  if (/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) issues.push("NOINDEX");
  pages.push({ url, status: result.status, title, description, canonical, h1Count, issues });
}
const counts = {};
for (const page of pages) for (const issue of page.issues) counts[issue] = (counts[issue] || 0) + 1;
const report = { generatedAt: new Date().toISOString(), source: "public HTML and sitemap; not GSC/GA4", sitemapStatus: sitemap.status, sitemapUrlCount: urls.length, checkedPages: pages.length, issueCounts: counts, pages };
await mkdir("seo-reports", { recursive: true });
const date = new Date().toISOString().slice(0, 10);
await writeFile("seo-reports/latest.json", JSON.stringify(report, null, 2) + "\n");
await writeFile("seo-reports/latest.md", "# VELORACE SEO Public Audit\n\nGenerated: " + report.generatedAt + "\n\nPages: " + pages.length + "\n\n" + Object.entries(counts).map(([k,v]) => "- " + k + ": " + v).join("\n") + "\n\n" + pages.filter(p => p.issues.length).map(p => "- " + p.url + ": " + p.issues.join(", ")).join("\n") + "\n");
console.log(JSON.stringify({ date, checkedPages: pages.length, issueCounts: counts }, null, 2));
if (sitemap.status !== 200 || !pages.length) process.exitCode = 1;
