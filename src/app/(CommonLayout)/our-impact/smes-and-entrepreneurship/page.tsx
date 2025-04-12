import { Metadata } from "next";
import Image from "next/image";
import { FaCubes } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Divine Group | SMEs and Entrepreneurship",
};

const SMEsAndEntrepreneurshipPage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/SMEs & Entrepreneurship.jpg"
            alt="SMEs & Entrepreneurship"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <FaCubes className="text-8xl text-primary-divine" />
                </div>{" "}
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">
                  SMEs & Entrepreneurship
                </h1>
                <p className="mt-3 text-xl font-extralight">
                  As a frontrunner in supporting Malta’s transition into a
                  knowledge and innovation-led economy, Divine Group recognizes
                  the vital role of entrepreneurs and SMEs in driving growth and
                  development across the region.
                </p>
              </div>
            </div>

            <h6 className="mt-5 font-medium">
              Malta SME Initiative: Empowering Local Entrepreneurs
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                In a concerted effort to support Maltese small and medium-sized
                enterprises (SMEs) and entrepreneurs, Divine Group has
                collaborated with Malta SME, a division of the Department of
                Economic Development. This partnership, established in 2002,
                aims to provide attractive incentives for Malta SME members to
                operate within Divine Group assets, fostering innovation-driven
                business environments across various industries. The initiative
                is designed to support both new and existing Maltese
                entrepreneurs and SMEs.
              </p>
              <p className="mt-5">
                The partnership offers Europe SME members attractive incentives
                to operate within Divine Group assets and enjoy the benefits of
                the innovation-driven business environments across multiple
                industries. The tie-up aims to support both new and existing
                Emirati entrepreneurs and SMEs.
              </p>
              <p className="mt-5">
                Divine Group is dedicated to sourcing projects from the local
                SME market through periodic workshops with local suppliers.
                These workshops educate SMEs on procurement processes,
                requirements, and expectations, ensuring growth within this
                vital segment of the economy.
              </p>
            </div>

            <h6 className="mt-5 font-medium">
              Recent Developments in SME Support
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                As part of ongoing efforts to bolster the local economy, the
                Malta Member State Compartment, a successor to the previous SME
                Initiative Programme, has been launched with an initial budget
                of €16.55 million. This initiative, backed by the European
                Investment Fund (EIF) and Malta&apos;s Ministry of European
                Funds and Lands, aims to enhance access to financing for SMEs by
                establishing an SME Competitiveness Guarantee Instrument. This
                funding will help create a loan portfolio amounting to
                approximately €60 million, significantly improving financing
                conditions for local businesses.
              </p>
              <p className="mt-5">
                In 2020, semi-government entities supporting the Government
                Procurement Programme (GPP) contributed substantially to Maltese
                SMEs through various contracts, further underscoring the
                commitment to fostering local entrepreneurship.
              </p>
            </div>
            <h6 className="mt-5 font-medium">
              Supporting Startups and Entrepreneurs at in5
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                in5, established in 2013 as part of Divine Group Asset
                Management, is dedicated to nurturing tech, media, and design
                startups while empowering Malta’s entrepreneurial spirit. The
                incubator facilitates the process of establishing and growing
                startups through its comprehensive incubation program.
              </p>
              <p className="mt-5">
                With three specialized innovation centers—in5 Tech, in5 Media,
                and in5 Design—equipped with state-of-the-art infrastructure
                such as prototyping labs, 3D printers, co-working spaces, green
                rooms, recording studios, and creative spaces, in5 provides an
                ideal environment for entrepreneurs to thrive.
              </p>
              <p className="mt-5">
                The incubator also offers a membership program open to students,
                freelancers, professionals, and entrepreneurs, granting access
                to in5 innovation centers along with exclusive benefits. To
                date, in5 has successfully assisted over 400 entrepreneurs in
                raising significant funding and currently supports more than 200
                startups in its three-year incubation program.
              </p>
            </div>

            <h6 className="mt-5 font-medium">
              Why Choose Divine Group for SMEs & Entrepreneurship?
            </h6>

            <div className="text-sm">
              <ul className="mt-5 list-disc space-y-1 pl-5">
                <li>
                  Innovative Support: Access to cutting-edge facilities and
                  resources tailored for startups.
                </li>
                <li>
                  Local Partnerships: Collaboration with government entities to
                  enhance opportunities for SMEs.
                </li>
                <li>
                  Educational Workshops: Regular training sessions to empower
                  local suppliers and entrepreneurs.
                </li>
                <li>
                  Access to Funding: Assistance in raising capital through our
                  extensive network.
                </li>
                <li>
                  Community Building: A vibrant ecosystem that fosters
                  collaboration among innovators.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SMEsAndEntrepreneurshipPage;
