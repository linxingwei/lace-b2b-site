# Bridal Lace procurement page — preview, not production-ready

Source: user-confirmed specification brief dated 2026-09-06, continuing ChatGPT conversation `6a9caf8d-8414-83e8-9d72-4622935950c2`.

## Release blocker

Four product photo sets could not be recovered from the referenced conversation. The attachment reader returned only the latest ten photos. Its older-turn pages returned text but no additional image files. The browser connection for the existing source tabs timed out; direct supplier-page retrieval did not return usable product content.

- ZY526: original photo set still needed from the existing conversation.
- 3DTL1647: original photo set still needed from the existing conversation.
- ML0717 / ML-0717-1: original photo set still needed from the existing conversation.
- Fine floral embroidered tulle: original flat, detail and gown application images still needed from the existing conversation.
- Large 40 × 25 cm leaf applique: three user-uploaded photos recovered and visually checked. Bodice, dimensions and flat arrangement images included, converted to WebP without replacing product content.

Do not promote this preview to production until every product has its matching original photography and accurate image-specific ALT text. Empty `images` arrays are intentional; never fill them with another product's photos or generated substitutes. The other recovered floral fabric photographs belong to an unselected candidate, so they are excluded.

## Data rules

Product facts and visible FAQ answers are centralized in `lib/bridal-products.ts`. No price, invented SKU, unconfirmed MOQ, fiber composition or lead-time promise is added. ZY526's ambiguous weight is omitted. 3DTL1647's disputed width is omitted. ML0717 remains approximately 520 g per linear meter, not g/m². Applique dimensions describe one motif and do not establish a selling unit. A MOQ expressed in yards does not by itself establish per-yard pricing.

The two unnamed products have descriptive page anchors, not fabricated supplier SKUs. Sampling cost, lead time, shipping and unsupported customization remain quote-dependent. Veil suitability requires sample review.

## Implementation

- Five server-rendered product records, anchored type navigation, expandable procurement specifications and product-specific WhatsApp quote links.
- Three verified applique images with captions and accurate English ALT; full-size image links.
- Existing category hero and closing WhatsApp calls to action retained, with a product-comparison link added.
- Production canonical retained. FAQ schema uses the same answers as the visible FAQ. Collection, breadcrumb and product list schema contain no invented offers or ratings.
- Existing internal links retained; selection and custom development links added.
- Changes to the generic category component are conditional on the bridal category.

## Before promotion

1. Restore and visually match all four remaining product photo sets; add real image-specific ALT and captions.
2. Build and lint; review the changed bridal route and another category for regression.
3. Verify all five cards, dimensions/units, FAQ-schema agreement, image loading, responsive layout and product-specific WhatsApp link destinations without sending an inquiry.
4. Deploy the completed branch to production, then verify the production deployment SHA and live `/bridal-lace`, including canonical, sitemap entry, HTTP status and images.

Current local build and lint pass. Four pre-existing `next/image` lint warnings remain outside the edited files. Production promotion and the complete five-product image check are pending.
