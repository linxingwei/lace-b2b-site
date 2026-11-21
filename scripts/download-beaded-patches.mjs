import { readFile, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const products = JSON.parse(await readFile("lib/beaded-patches.json", "utf8"));
if (products.length !== 29 || products.some((p) => p.number === 7)) {
  throw new Error("Expected 29 items and no #7");
}
const dir = "public/products/beaded-patches";
await mkdir(dir, { recursive: true });

async function download(item) {
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const response = await fetch(item.source, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; VELORACE-LACE-Catalog/1.0)", Accept: "image/jpeg,image/*" },
        signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) throw new Error("HTTP " + response.status);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length < 1000 || bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[2] !== 0xff) {
        throw new Error("Not a valid JPEG");
      }
      const filename = item.image.replace("/products/beaded-patches/", "");
      await writeFile(join(dir, filename), bytes);
      console.log("#" + item.number + " " + filename + ": " + bytes.length + " bytes");
      return;
    } catch (error) {
      lastError = error;
      console.error("#" + item.number + " attempt " + attempt + ": " + error);
      await new Promise((resolve) => setTimeout(resolve, attempt * 2000));
    }
  }
  throw new Error("Could not download #" + item.number + ": " + lastError);
}
const results = await Promise.allSettled(products.map(download));
const failures = results.filter((result) => result.status === "rejected");
if (failures.length) {
  throw new Error(failures.length + " images failed; no image commit will be made");
}
console.log("Downloaded and validated all 29 original JPEG images; no transformations applied.");
