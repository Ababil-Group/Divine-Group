import { Metadata } from "next";
import Image from "next/image";
import { GiMaterialsScience } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Divine Group | Science",
};

const SciencePage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/Science.jpg"
            alt="Science"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <GiMaterialsScience className="text-8xl text-primary-divine" />
                </div>{" "}
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">Science</h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group is dedicated to fostering the growth of a
                  knowledge-driven, sustainable economy in Malta through our
                  leading R&D and innovation hub, Malta Science Park. This
                  vibrant business district is home to over 400 companies and
                  4,000 professionals, playing a crucial role in advancing
                  Malta&apos;s innovation strategy by diversifying the economy
                  through cutting-edge industries across life sciences,
                  environmental sciences, and energy.
                </p>
              </div>
            </div>

            <div className="text-sm">
              <p className="mt-5">
                Malta Science Park is committed to supporting entrepreneurs,
                SMEs, and multinational enterprises across the entire science
                value chain. It serves as a dynamic platform for businesses to
                innovate and progress. Designed specifically to meet the needs
                of those in the science sector, Malta Science Park fosters an
                environment that encourages scientific research, creativity, and
                innovation.
              </p>
            </div>

            <div className="text-sm">
              <p className="mt-5">
                By providing ample office and laboratory space along with
                purpose-built infrastructure, Malta Science Park creates a
                conducive ecosystem for businesses ranging from multinational
                corporations to micro, small, and medium-sized enterprises. This
                science-focused district embodies our commitment to responding
                to the evolving needs of the business community, facilitating
                increased collaboration and innovation among industry peers,
                government authorities, investors, and professionals.
              </p>
              <p className="mt-5">
                Through its state-of-the-art facilities, Malta Science Park
                nurtures an atmosphere where groundbreaking ideas can flourish,
                ensuring that Malta remains at the forefront of scientific
                advancement and innovation in Europe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SciencePage;
