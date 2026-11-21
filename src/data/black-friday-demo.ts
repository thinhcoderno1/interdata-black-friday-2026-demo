import { blackFridayCoupons, type BlackFridayCouponGroup } from "./black-friday";

export const bestPlanCycles = [
  { key: "annually", years: 1, discount: 0, badgeDiscount: 60 },
  { key: "biennially", years: 2, discount: 5, badgeDiscount: 65 },
  { key: "triennially", years: 3, discount: 10, badgeDiscount: 70 },
] as const;

export type BestPlanCycle = (typeof bestPlanCycles)[number];

type BestPlanReferencePrice = {
  amount: number;
  source: "portal" | "estimate";
};

export type DemoBestPlan = {
  name: string;
  product_url: string;
  cpu: number;
  ram: number;
  nvme: number;
  annualPrice: number;
  referencePrices?: Partial<Record<BestPlanCycle["key"], BestPlanReferencePrice>>;
  gifts: readonly string[];
};

const mug = "Ly sứ InterData";
const helmet = "Nón bảo hiểm InterData";
const bestPlansPortal =
  "https://support.interdata.vn/index.php?rp=/store/black-friday-26-vps-intel-platinum-gen2";

export const demoBestPlans: DemoBestPlan[] = [
  {
    name: "BF26 PLATINUM P1",
    product_url: `${bestPlansPortal}/bf26-platinum-p1`,
    cpu: 2,
    ram: 2,
    nvme: 30,
    annualPrice: 1_234_000,
    gifts: [],
  },
  {
    name: "BF26 PLATINUM P2",
    product_url: `${bestPlansPortal}/bf26-platinum-p2`,
    cpu: 4,
    ram: 4,
    nvme: 40,
    annualPrice: 1_990_000,
    gifts: [mug],
  },
  {
    name: "BF26 PLATINUM P3",
    product_url: `${bestPlansPortal}/bf26-platinum-p3`,
    cpu: 4,
    ram: 8,
    nvme: 60,
    annualPrice: 2_560_000,
    gifts: [mug],
  },
  {
    name: "BF26 PLATINUM P4",
    product_url: `${bestPlansPortal}/bf26-platinum-p4`,
    cpu: 6,
    ram: 8,
    nvme: 70,
    annualPrice: 4_800_000,
    gifts: [helmet, mug, "100GB S3 Storage"],
  },
  {
    name: "BF26 PLATINUM P5",
    product_url: `${bestPlansPortal}/bf26-platinum-p5`,
    cpu: 8,
    ram: 10,
    nvme: 90,
    annualPrice: 6_900_000,
    gifts: [helmet, mug, "100GB S3 Storage"],
  },
  {
    name: "BF26 PLATINUM P6",
    product_url: `${bestPlansPortal}/bf26-platinum-p6`,
    cpu: 12,
    ram: 14,
    nvme: 120,
    annualPrice: 8_800_000,
    gifts: [helmet, mug, "120GB S3 Storage"],
  },
  {
    name: "BF26 PLATINUM P7",
    product_url: `${bestPlansPortal}/bf26-platinum-p7`,
    cpu: 14,
    ram: 18,
    nvme: 160,
    annualPrice: 11_900_000,
    gifts: [helmet, mug, "180GB S3 Storage"],
  },
  {
    name: "BF26 PLATINUM P8",
    product_url: `${bestPlansPortal}/bf26-platinum-p8`,
    cpu: 18,
    ram: 32,
    nvme: 180,
    annualPrice: 15_900_000,
    gifts: [helmet, mug, "200GB S3 Storage"],
  },
];

export function getDemoBestPlanPrice(annualPrice: number, cycle: BestPlanCycle) {
  return Math.round((annualPrice * cycle.years * (100 - cycle.discount)) / 100);
}

export const demoBlackFridayCoupons: BlackFridayCouponGroup[] =
  blackFridayCoupons.map(({ service, href, offers }) => ({
    service,
    href,
    offers: offers.map(({ months, discount }) => ({
      months,
      discount,
      code: `DEMO-${service === "VPS" ? "VPS" : "CLOUD"}${discount}`,
    })),
  }));
