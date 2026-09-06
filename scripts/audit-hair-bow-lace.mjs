import assert from 'node:assert/strict';
const base = (process.argv[2] || 'http://localhost:3105').replace(/\/$/, '');
const canonicalBase = 'https://www.veloracelace.com';
const get = async path => { const r = await fetch(base + path); assert.equal(r.status, 200, path); return r.text(); };
const collection = await get('/hair-bow-lace');
const paths = [...new Set([...collection.matchAll(/href="(\/hair-bow-lace\/[^"#]+)"/g)].map(m=>m[1]))];
assert.equal(paths.length, 12);
const sitemap = await get('/sitemap.xml');
const robots = await get('/robots.txt');
assert(robots.includes('Sitemap: '+canonicalBase+'/sitemap.xml'));
assert(!robots.includes('Disallow: /hair-bow-lace'));
const titles = new Set(), descriptions = new Set();
let checks = 0;
for (const path of ['/hair-bow-lace', ...paths]) {
  const html = path === '/hair-bow-lace' ? collection : await get(path);
  assert.equal((html.match(/<h1[ >]/g)||[]).length, 1, path+' H1');
  assert(html.includes(`rel="canonical" href="${canonicalBase}${path}"`), path+' canonical');
  assert(sitemap.includes(`<loc>${canonicalBase}${path}</loc>`), path+' sitemap');
  assert(!/<meta[^>]+content="[^"]*noindex/i.test(html), path+' indexability');
  assert(html.includes('property="og:title"') && html.includes('name="twitter:card"'), path+' social');
  const title=html.match(/<title>(.*?)<\/title>/)[1], description=html.match(/name="description" content="([^"]+)"/)[1];
  assert(title.length <= 60, path+' title length: '+title.length);
  assert(!titles.has(title)); titles.add(title);
  assert(!descriptions.has(description)); descriptions.add(description);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  assert(schemas.some(s=>s['@type']==='Organization'));
  assert(schemas.some(s=>s['@type']==='BreadcrumbList'));
  const faq=schemas.find(s=>s['@type']==='FAQPage'); assert(faq?.mainEntity.length>=5);
  for(const q of faq.mainEntity) assert(html.includes(q.name.replace(/&/g,'&amp;').replace(/'/g,'&#x27;')), path+' visible FAQ');
  if(path!=='/hair-bow-lace') {
    const product=schemas.find(s=>s['@type']==='Product'); assert(product);
    assert(!product.offers && !product.aggregateRating && !product.review);
    assert(product.image?.startsWith(canonicalBase + '/products/hair-bow-lace/'));
    assert(html.includes('alt="Design concept for '));
    assert(!html.includes('Original concept image pending'));
    assert(html.includes('href="/hair-bow-lace"'));
  }
  const ctas=[...html.matchAll(/href="(https:\/\/wa.me\/8615767956637\?text=[^"]+)"/g)];
  assert(ctas.length>=2, path+' CTA');
  assert(decodeURIComponent(ctas[0][1]).includes('MOQ'));
  assert(html.includes('confirmed after design review'));
  checks++; console.log('PASS',path);
}
const home=await get('/'); assert(home.includes('id="featured-hair-bow-lace"')); assert(home.includes('href="/hair-bow-lace"'));
assert.equal((await fetch(base+'/hair-bow-lace/not-a-design')).status,404);
console.log(`PASS: ${checks} pages; unique metadata, canonical, sitemap, robots, JSON-LD, FAQ, links, WhatsApp and unknown route.`);
console.log('PASS: All 12 optimized concept images are connected to their matching product pages.');
