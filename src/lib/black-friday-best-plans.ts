import {
  bestPlanCycles,
  demoBestPlans,
  type BestPlanCycle,
  type DemoBestPlan,
} from "@/data/black-friday-demo";
import { productSpecs, type VpsProduct } from "@/data/vps-pricing";

const viettelGroupId = 101;
const viettelPricingUrl =
  `https://www.interdata.vn/api/vps-pricing/?gid=${viettelGroupId}`;

const viettelMonthlyRates = {
  cpu: 50_000,
  ram: 50_000,
  nvme: 4_000,
  ramSurcharge: 10_000,
};

const viettelTermDiscount = {
  annually: 10,
  biennially: 15,
  triennially: 20,
} satisfies Record<BestPlanCycle["key"], number>;

function estimateViettelPrice(plan: DemoBestPlan, cycle: BestPlanCycle) {
  const months = cycle.years * 12;
  const monthlyResources =
    plan.cpu * viettelMonthlyRates.cpu +
    plan.ram * viettelMonthlyRates.ram +
    plan.nvme * viettelMonthlyRates.nvme;
  const monthlyRamSurcharge = plan.ram * viettelMonthlyRates.ramSurcharge;

  return Math.round(
    (monthlyResources * (100 - viettelTermDiscount[cycle.key]) * months) / 100 +
      monthlyRamSurcharge * months,
  );
}

async function loadViettelProducts(): Promise<VpsProduct[]> {
  try {
    const response = await fetch(viettelPricingUrl, {
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return [];

    const data: { products?: VpsProduct[] } = await response.json();
    return Array.isArray(data.products) ? data.products : [];
  } catch {
    return [];
  }
}

export async function getBlackFridayBestPlans(): Promise<DemoBestPlan[]> {
  const products = await loadViettelProducts();
  const viettelPlans = products
    .filter(
      (product) =>
        product?.gid === viettelGroupId &&
        typeof product.description === "string",
    )
    .map((product) => {
      const specs = productSpecs(product).join("\n");
      return {
        product,
        cpu: Number(specs.match(/^(\d+)\s*v(?:CPU|Core)\b/im)?.[1]),
        ram: Number(specs.match(/^(\d+)\s*GB\s+RAM\b/im)?.[1]),
        nvme: Number(specs.match(/^(\d+)\s*GB\s+(?:SSD\s+)?NVMe\b/im)?.[1]),
      };
    });

  return demoBestPlans.map((plan) => {
    const matches = viettelPlans.filter(
      ({ cpu, ram, nvme }) =>
        cpu === plan.cpu && ram === plan.ram && nvme === plan.nvme,
    );
    const pricing =
      matches.length === 1 ? matches[0].product.pricing?.VND : undefined;
    const referencePrices: NonNullable<DemoBestPlan["referencePrices"]> = {};
    for (const cycle of bestPlanCycles) {
      const amount = Number(pricing?.[cycle.key]);
      if (Number.isFinite(amount) && amount > 0) {
        referencePrices[cycle.key] = { amount, source: "portal" };
      } else if (plan.name !== "BF26 PLATINUM P1") {
        referencePrices[cycle.key] = {
          amount: estimateViettelPrice(plan, cycle),
          source: "estimate",
        };
      }
    }
    return { ...plan, referencePrices };
  });
}
