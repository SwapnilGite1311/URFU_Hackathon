export interface TraceStage {
  stage: string;
  location: string;
  timestamp: string;
  icon: "leaf" | "radiation" | "flask" | "package" | "truck" | "store";
}

export const product = {
  id: "GG-2026-004471",
  name: "Golden Farms Fresh Strawberries — 250g",
  batchId: "BATCH-SF-0472-A",
  manufacturingDate: "2026-07-02",
  irradiationDate: "2026-07-03",
  expiryDate: "2026-07-24",
  irradiationDoseKGy: 2.5,
  facility: "Vilnius Regional Irradiation Facility (Proposed)",
  standard:
    "Codex Alimentarius CXS 106-1983 (Rev. 2003) — General Standard for Irradiated Foods",
  certificateNumber: "CERT-IRR-88213-LT",
  status: "Verified Safe",
};

export const traceability: TraceStage[] = [
  {
    stage: "Harvest",
    location: "Kaunas District Farm Co-op",
    timestamp: "2026-07-01T06:15:00",
    icon: "leaf",
  },
  {
    stage: "Irradiation Facility",
    location: "Vilnius Regional Irradiation Facility",
    timestamp: "2026-07-03T09:40:00",
    icon: "radiation",
  },
  {
    stage: "Quality Certification",
    location: "National Food Safety Lab",
    timestamp: "2026-07-03T15:10:00",
    icon: "flask",
  },
  {
    stage: "Packaging",
    location: "Vilnius Distribution Center",
    timestamp: "2026-07-04T08:00:00",
    icon: "package",
  },
  {
    stage: "Distribution",
    location: "In transit — Baltic Region",
    timestamp: "2026-07-05T07:00:00",
    icon: "truck",
  },
  {
    stage: "Retail",
    location: "Golden Farms Market, Vilnius",
    timestamp: "2026-07-06T10:00:00",
    icon: "store",
  },
];

export const stats = [
  { label: "Shelf-life extension", value: 300, suffix: "%" },
  { label: "Typical dose range", value: 7, prefix: "1–", suffix: " kGy" },
  { label: "Consortium countries", value: 12, suffix: "" },
  { label: "Facility throughput", value: 40, suffix: " t/day" },
];
