export type BuyerDataKey =
  | "moq"
  | "sampleTime"
  | "bulkLeadTime"
  | "colorMatching"
  | "customSize"
  | "customMotif"
  | "packing"
  | "qc"
  | "shipping"
  | "repeatOrderStandard";

export type BuyerDataField = {
  key: BuyerDataKey;
  label: string;
  value: string;
  status: "published" | "design-review";
};
export type BuyerDataSheet = {
  product: string;
  updated: string;
  fields: BuyerDataField[];
};

const afterDesignReview = "Confirmed after design review";

export const threeDFlowerAppliqueBuyerData: BuyerDataSheet = {
  product: "3D Flower Lace Applique",
  updated: "2026-08-29",
  fields: [
    {
      key: "moq",
      label: "MOQ",
      value: "30 pairs for published styles VL-2602 and VL-2603; other styles and custom developments are confirmed after design review.",
      status: "published",
    },
    { key: "sampleTime", label: "Sample Time", value: afterDesignReview, status: "design-review" },
    { key: "bulkLeadTime", label: "Bulk Lead Time", value: afterDesignReview, status: "design-review" },
    {
      key: "colorMatching",
      label: "Color Matching",
      value: "Thread, base and embellishment are matched against the buyer-supplied fabric, physical swatch or color reference; final feasibility is confirmed after design review.",
      status: "design-review",
    },
    {
      key: "customSize",
      label: "Custom Size",
      value: "Finished dimensions can be developed from artwork or a physical reference; feasibility is confirmed after design review.",
      status: "design-review",
    },
    {
      key: "customMotif",
      label: "Custom Motif",
      value: "Original motifs and coordinated left/right sets can be evaluated from artwork, a tech pack or a reference sample.",
      status: "design-review",
    },
    {
      key: "packing",
      label: "Packing",
      value: "Packing method, pair labeling and protection for raised petals are confirmed after design review and order quantity review.",
      status: "design-review",
    },
    {
      key: "qc",
      label: "QC",
      value: "Bulk pieces are checked against the approved physical sample for size, color, motif direction, petal attachment, reverse finish and embellishment security.",
      status: "design-review",
    },
    {
      key: "shipping",
      label: "Shipping",
      value: "Method and schedule are confirmed after destination, order volume and delivery requirement review.",
      status: "design-review",
    },
    {
      key: "repeatOrderStandard",
      label: "Repeat-order Standard",
      value: "The signed physical sample plus recorded size, color, orientation, construction and packing details become the repeat-order reference.",
      status: "design-review",
    },
  ],
};
