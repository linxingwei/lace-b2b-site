import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

export const dynamic = "force-dynamic";

const host = "www.veloracelace.com";
const key = "b94fd40ef791628b46fe6bc4054a9c3c";
const keyLocation = `https://${host}/${key}.txt`;
const endpoint = "https://api.indexnow.org/indexnow";

function sitemapUrls() {
  return sitemap().map((entry) => entry.url.toString());
}

function normalizeRequestedUrls(requested: unknown) {
  const allowed = new Set(sitemapUrls());
  if (!Array.isArray(requested)) return [...allowed];

  return requested
    .filter((value): value is string => typeof value === "string")
    .map((value) => {
      try {
        return new URL(value, `https://${host}`).toString();
      } catch {
        return "";
      }
    })
    .filter((value) => allowed.has(value));
}

async function submit(urlList: string[]) {
  if (!urlList.length) {
    return NextResponse.json({ ok: false, error: "No valid sitemap URLs supplied." }, { status: 400 });
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
    cache: "no-store",
  });

  return NextResponse.json(
    {
      ok: response.ok,
      submitted: urlList.length,
      status: response.status,
      urls: urlList,
    },
    { status: response.ok ? 200 : 502 },
  );
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const path = requestUrl.searchParams.get("path");

  if (!path) return submit(sitemapUrls());

  const target = new URL(path, `https://${host}`).toString();
  const allowed = new Set(sitemapUrls());
  if (!allowed.has(target)) {
    return NextResponse.json({ ok: false, error: "Path is not present in sitemap." }, { status: 400 });
  }

  return submit([target]);
}

export async function POST(request: Request) {
  let body: { urls?: unknown } = {};
  try {
    body = await request.json();
  } catch {
    // Empty body submits the current sitemap.
  }
  return submit(normalizeRequestedUrls(body.urls));
}
