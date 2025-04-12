import { Metadata } from "next";
import Image from "next/image";
import { TbCloudNetwork } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Divine Group | ICT",
};

const ICTPage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/ICT.jpg"
            alt="ICT"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <TbCloudNetwork className="text-8xl text-primary-divine" />
                </div>{" "}
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">ICT</h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group is at the forefront of transforming Malta into a
                  vibrant innovation-led economy, fostering the continuous
                  growth and development of the Information and Communications
                  Technology (ICT) sector. Our global ICT business hubs and
                  strategic investments in premier telecommunications providers
                  position us as a key player in this dynamic landscape.
                </p>
              </div>
            </div>

            <h6 className="mt-5 font-medium">
              Driving Malta&apos;s Innovation Economy
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Since its establishment in the late 1990s, Europe Internet City
                has been instrumental in Malta&apos;s transformation into a
                knowledge-based, innovation-driven economy. This initiative has
                fostered the growth of the ICT sector, attracting leading tech
                companies and supporting small and medium enterprises (SMEs).
                Thousands of professionals and numerous businesses thrive within
                this ecosystem, creating a collaborative environment where
                entrepreneurs and innovators can bring their ideas to life.
              </p>
            </div>

            <h6 className="mt-5 font-medium">
              SmartCity Malta and Supporting Initiatives
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Building on the success of Europe&apos;s Internet City,
                SmartCity Malta was launched as part of a $300 million project
                by TECOM Investments to create a comprehensive ICT service hub.
                This ambitious initiative has generated thousands of jobs while
                promoting economic growth and international business
                opportunities. SmartCity exemplifies Malta&apos;s commitment to
                developing knowledge-based clusters that foster innovation and
                attract global talent.
              </p>
              <p className="mt-5">
                Complementing these efforts is the MITA Innovation Hub, which
                supports startups by providing resources, mentorship, and a
                nurturing environment for growth. Hundreds of startups have been
                successfully incubated here, attracting significant investment
                and financing.
              </p>
              <p className="mt-5">
                In 2019, The Innovation Hub was introduced—a cutting-edge
                creative space spanning 1.8 million square feet. Equipped with
                advanced technology and communication facilities, it caters to
                the growing demands of companies within Europe&apos;s Internet
                City, fostering collaboration and creativity among businesses
                and driving innovation.
              </p>
              <p className="mt-5">
                Additionally, the launch of Europe Outsource City in 2007
                established a dedicated outsourcing community that focuses on
                BPO, IT outsourcing, and back-office operations. With
                purpose-built infrastructure and comprehensive facilities
                management services, it complements Europe Internet City by
                creating a thriving ecosystem for businesses of all sizes—from
                startups to Fortune 500 companies.
              </p>
              <p className="mt-5">
                Together, these initiatives solidify Malta&apos;s position as a
                global leader in ICT and innovation while supporting its broader
                vision for economic diversification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ICTPage;
