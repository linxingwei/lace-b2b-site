const productionUrl = "https://www.veloracelace.com";
const baseUrl = (process.argv[2] ?? process.env.SEO_AUDIT_BASE_URL ?? productionUrl).replace(/\/$/, "");

const checks = [];
const pass = (label) => checks.push({ label, ok: true });
const fail = (label, detail) => checks.push({ label, ok: false, detail });
const assert = (condition, label, detail = "") => condition ? pass(label) : fail(label, detail);

function normalize(url) {
  const parsed = new URL(url);
  parsed.hash = "";
  parsed.search = "";
  return parsed.toString().replace(/\/$/, "");
}

async function get(path) {
  const target = path.startsWith("http") ? new URL(path) : new URL(path, baseUrl);
  if (path.startsWith("http") && baseUrl !== productionUrl) target.host = new URL(baseUrl).host;
  if (path.startsWith("http") && baseUrl !== productionUrl) target.protocol = new URL(baseUrl).protocol;
  const response = await fetch(target);
  const body = await response.text();
  assert(response.status === 200, `${new URL(path, productionUrl).pathname} returns 200`, `received ${response.status}`);
  return body;
}

function canonical(html) {
  return html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ?? "";
}

function title(html) {
  return html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? "";
}

function jsonLdIsValid(html, label) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  assert(blocks.length > 0, `${label} includes JSON-LD`);
  for (const [index, block] of blocks.entries()) {
    try { JSON.parse(block[1]); pass(`${label} JSON-LD block ${index + 1} parses`); }
    catch (error) { fail(`${label} JSON-LD block ${index + 1} parses`, error.message); }
  }
}

const applique = await get("/3d-flower-applique");
assert(canonical(applique) === `${productionUrl}/3d-flower-applique`, "3D applique canonical is absolute and correct", canonical(applique));
assert(!/noindex/i.test(applique), "3D applique has no noindex directive");
assert((applique.match(/<h1[\s>]/gi) ?? []).length === 1, "3D applique has exactly one H1");
assert(title(applique).length <= 60, "3D applique title is 60 characters or fewer", `${title(applique).length}: ${title(applique)}`);
assert(applique.includes("/products/3d-flower-lace-applique-wholesale.jpg"), "3D applique uses the descriptive image filename");
assert(applique.includes("Wholesale pastel 3D flower lace applique pairs with layered embroidered petals"), "3D applique hero image has descriptive ALT text");
for (const field of ["MOQ", "Sample Time", "Bulk Lead Time", "Color Matching", "Custom Size", "Custom Motif", "Packing", "QC", "Shipping", "Repeat-order Standard"]) {
  assert(applique.includes(field), `3D applique Buyer Data Sheet includes ${field}`);
}
assert(applique.includes("Confirmed after design review"), "Unconfirmed procurement commitments use the design-review fallback");
assert(applique.includes("Send a reference photo") && applique.includes("Get MOQ &amp; sampling options"), "3D applique renders the reference-photo CTA");
assert(applique.includes("pastel-matched-3d-flower-lace-applique-pairs.jpg"), "3D applique uses a second descriptive image filename");
assert(applique.includes("/blog/3d-lace-applique-vs-flat-embroidered-applique"), "3D applique links to the comparison guide");
jsonLdIsValid(applique, "3D applique");

const comparison = await get("/blog/3d-lace-applique-vs-flat-embroidered-applique");
assert(canonical(comparison) === `${productionUrl}/blog/3d-lace-applique-vs-flat-embroidered-applique`, "Comparison guide canonical is correct", canonical(comparison));
assert(!/noindex/i.test(comparison), "Comparison guide has no noindex directive");
assert((comparison.match(/<h1[\s>]/gi) ?? []).length === 1, "Comparison guide has exactly one H1");
assert(comparison.includes("What is the difference between 3D lace applique and flat embroidered applique?"), "Comparison guide includes a direct answer heading");
assert(comparison.includes("<table>") && comparison.includes("Decision factor") && comparison.includes("Sampling complexity"), "Comparison guide renders the structured comparison table");
assert(comparison.includes('href="/3d-flower-applique"'), "Comparison guide links back to the commercial page");
for (const path of ["/bridal-lace", "/3d-flower-applique", "/embroidery-lace", "/custom-design"]) {
  assert(comparison.includes(`href="${path}"`), `Comparison guide links to ${path}`);
}
jsonLdIsValid(comparison, "Comparison guide");

const bridal = await get("/bridal-lace");
assert(bridal.includes('class="category-context-section"') && bridal.includes('href="/3d-flower-applique"') && bridal.includes('href="/blog/3d-lace-applique-vs-flat-embroidered-applique"'), "Bridal Lace contains two contextual funnel links");
const embroidery = await get("/embroidery-lace");
assert(embroidery.includes('class="category-context-section"') && embroidery.includes('href="/3d-flower-applique"') && embroidery.includes('href="/blog/3d-lace-applique-vs-flat-embroidered-applique"'), "Embroidery Lace contains two contextual funnel links");
const customDesign = await get("/custom-design");
assert(customDesign.includes('class="custom-design-context"') && customDesign.includes('href="/3d-flower-applique"') && customDesign.includes('href="/blog/3d-lace-applique-vs-flat-embroidered-applique"'), "Custom Design contains two contextual funnel links");
const placement = await get("/blog/lace-applique-placement-wedding-dress");
assert((placement.match(/class="article-context-link"/g) ?? []).length >= 2 && placement.includes('href="/3d-flower-applique"') && placement.includes('href="/blog/3d-lace-applique-vs-flat-embroidered-applique"'), "Applique placement guide contains two contextual funnel links");

const about = await get("/about");
assert(!/\bVELORA LACE\b/.test(about), "About page has no obsolete VELORA LACE brand name");
assert(about.includes("VELORACE LACE"), "About page uses VELORACE LACE");
assert(canonical(about) === `${productionUrl}/about`, "About canonical is absolute and correct", canonical(about));
assert(title(about).includes("VELORACE LACE"), "About title uses the full brand name", title(about));
assert(/property="og:title" content="[^"]*VELORACE LACE/i.test(about), "About OG title uses the full brand name");
jsonLdIsValid(about, "About page");

const butterflyTrim = await get("/products/butterfly-floral-embroidered-trim");
assert(!butterflyTrim.includes('"@type":"Product"'), "Quote-only butterfly trim page does not claim Product rich-result eligibility without an offer or review");
assert(butterflyTrim.includes('"@type":"BreadcrumbList"'), "Butterfly trim page retains breadcrumb structured data");
jsonLdIsValid(butterflyTrim, "Butterfly trim page");

const sitemap = await get("/sitemap.xml");
assert(sitemap.includes(`${productionUrl}/3d-flower-applique`), "Sitemap includes the 3D applique page");
assert(sitemap.includes(`${productionUrl}/blog/3d-lace-applique-vs-flat-embroidered-applique`), "Sitemap includes the comparison guide");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert(sitemapUrls.length > 0, "Sitemap contains indexable URLs");
assert(new Set(sitemapUrls).size === sitemapUrls.length, "Sitemap contains no duplicate URLs");
for (const url of sitemapUrls) {
  const html = await get(url);
  const pageCanonical = canonical(html);
  const robotsMeta = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i)?.[1] ?? "";
  assert(Boolean(pageCanonical), `${new URL(url).pathname} has a canonical`);
  assert(normalize(pageCanonical) === normalize(url), `${new URL(url).pathname} canonical is self-referencing`, pageCanonical);
  assert(!/noindex/i.test(robotsMeta), `${new URL(url).pathname} is indexable`);
}

const robots = await get("/robots.txt");
assert(/Allow:\s*\//i.test(robots), "Robots allows crawling");
assert(robots.includes(`Sitemap: ${productionUrl}/sitemap.xml`), "Robots declares the production sitemap");

for (const check of checks) console.log(`${check.ok ? "PASS" : "FAIL"} ${check.label}${check.detail ? ` - ${check.detail}` : ""}`);
const failures = checks.filter((check) => !check.ok);
console.log(`\n${checks.length - failures.length}/${checks.length} checks passed.`);
if (failures.length) process.exitCode = 1;

