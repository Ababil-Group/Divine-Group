import About from "@/components/About";
import Mission from "@/components/Mission";
import OurValues from "@/components/OurValues";
import Vision from "@/components/Vision";
import WhoWeAreBanner from "@/components/WhoWeAreBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divine Group | Who We Are",
};

const WhoWeArePage = () => {
  return (
    <main>
      <WhoWeAreBanner />
      <About />
      <Vision />
      <Mission />
      <OurValues />
      {/* <OurLeadership /> */}
    </main>
  );
};

export default WhoWeArePage;
