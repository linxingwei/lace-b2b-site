const baseUrl = (process.env.SEO_AUDIT_BASE_URL || "https://www.veloracelace.com").replace(/\/$/, "");

function normalize(url) {
  const parsed = new URL(url);
  parsed.hash = "";
  parsed.search = "";
  return parsed.toString().replace(/\/$/, "");
}

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const failures = [];

for (const url of urls) {
  const requestUrl = new URL(new URL(url).pathname, baseUrl).toString();
  const response = await fetch(requestUrl, { redirect: "follow" });
  const html = await response.text();
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1];
  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i)?.[1] || "";
  if (!response.ok) failures.push(`${url}: HTTP ${response.status}`);
  if (!canonical) failures.push(`${url}: missing canonical`);
  else if (normalize(canonical) !== normalize(url)) failures.push(`${url}: canonical points to ${canonical}`);
  if (/noindex/i.test(robots)) failures.push(`${url}: noindex present`);
}

console.log(`Audited ${urls.length} sitemap URLs at ${baseUrl}`);
const expectedUrlCount = Number(process.env.SEO_AUDIT_EXPECTED_URLS || 22);
if (urls.length !== expectedUrlCount) failures.push(`Expected ${expectedUrlCount} sitemap URLs, found ${urls.length}`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log("All sitemap URLs return successfully with self-referencing canonicals and no noindex directive.");
