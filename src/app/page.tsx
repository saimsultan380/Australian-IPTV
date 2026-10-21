import { Hero } from "@/components/sections/hero";
import { FeatureStrip } from "@/components/sections/feature-strip";
import { Plans } from "@/components/sections/plans";
import { Devices } from "@/components/sections/devices";
import { Watch } from "@/components/sections/watch";
import { WhyClients } from "@/components/sections/reasons";
import { GettingStarted } from "@/components/sections/getting-started";
import { BuyingGuide } from "@/components/sections/buying-guide";
import { Reseller } from "@/components/sections/reseller";
import { Speed } from "@/components/sections/speed";
import { Faq } from "@/components/sections/faq";
import { Closing } from "@/components/sections/closing";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureStrip />
      <Plans />
      <Devices />
      <Watch />
      <WhyClients />
      <GettingStarted />
      <BuyingGuide />
      <Reseller />
      <Speed />
      <Faq />
      <Closing />
    </main>
  );
}
