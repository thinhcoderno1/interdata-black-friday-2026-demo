import { BlackFridayPage } from "@/components/black-friday/black-friday-page";
import { demoBlackFridayCoupons } from "@/data/black-friday-demo";
import { getBlackFridayBestPlans } from "@/lib/black-friday-best-plans";

export default async function Page() {
  const bestPlans = await getBlackFridayBestPlans();
  return <BlackFridayPage vps={bestPlans} coupons={demoBlackFridayCoupons} />;
}
