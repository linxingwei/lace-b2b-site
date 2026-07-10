const r2Base = process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, "");

/** Uses Cloudflare R2 in production when configured, with local assets as a safe fallback. */
export function mediaUrl(fileName: string) {
  return r2Base ? `${r2Base}/products/${fileName}` : `/products/${fileName}`;
}
