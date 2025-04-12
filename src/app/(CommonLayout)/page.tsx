import BusinessHighLights from "@/components/BusinessHighlights";
import Hero from "@/components/Hero";
import InNumbers from "@/components/InNumbers";
import OurImpact from "@/components/OurImpact";
import Sustainability from "@/components/Sustainability";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divine Group",
};

const HomePage = () => {
  return (
    <main>
      <Hero />

      <OurImpact />
      <BusinessHighLights />
      <InNumbers />
      <Sustainability />
    </main>
  );
};

export default HomePage;
