import { Metadata } from "next";
import Image from "next/image";
import { MdOutlineRealEstateAgent } from "react-icons/md";

export const metadata: Metadata = {
  title: "Divine Group | Real Estate",
};

const RealEstatePage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/Real Estate.jpg"
            alt="Real State"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <MdOutlineRealEstateAgent className="text-8xl text-primary-divine" />
                </div>{" "}
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">Real Estate</h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group is proud to play a pivotal role in shaping
                  Malta’s real estate sector, contributing to the nation’s
                  economic growth through innovative developments and strategic
                  investments. As one of the largest integrated master
                  developers and asset managers in the region, we are committed
                  to delivering exceptional residential, commercial, and retail
                  spaces that redefine modern living.
                </p>
              </div>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Master Development and Residential Real Estate
            </h6>

            <h6 className="mt-5 font-medium">Crafting Iconic Communities</h6>

            <div className="text-sm">
              <p className="mt-5">
                Divine Group has established itself as a leader in the
                development of vibrant, sustainable communities across Malta.
                Our projects are designed to meet the evolving needs of
                residents and visitors, offering an unparalleled lifestyle
                experience. With a focus on infrastructure, accessibility, and
                family-friendly amenities, our master-planned communities
                include schools, supermarkets, green spaces, and
                state-of-the-art facilities.
              </p>
              <p className="mt-5">
                Our portfolio includes some of Malta’s most sought-after
                residential developments, featuring luxury villas, townhouses,
                and apartments. These communities are meticulously crafted to
                provide a harmonious blend of comfort, convenience, and
                elegance.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Asset Management: Commercial, Residential & Retail
            </h6>
            <h6 className="mt-5 font-medium">
              A Diverse Portfolio for a Thriving Economy
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Divine Group’s asset management division oversees a wide-ranging
                portfolio of properties that cater to both individuals and
                businesses. From luxury residences to commercial hubs, we focus
                on creating long-term value for stakeholders while fostering
                economic growth in Malta.
              </p>
              <p className="mt-5">
                Our commercial properties include cutting-edge business
                districts that serve as innovation hubs for entrepreneurs and
                established companies alike. Meanwhile, our retail assets are
                strategically located in prime destinations across Malta,
                offering an exceptional shopping experience with over 3 million
                square feet of leasable space.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Facilities Management: Ensuring Excellence
            </h6>
            <h6 className="mt-5 font-medium">
              Comprehensive Community Solutions
            </h6>
            <div className="text-sm">
              <p className="mt-5">
                Our facilities management services ensure that every property
                under Divine Group’s care is maintained to the highest
                standards. From residential complexes to commercial spaces, our
                dedicated team provides end-to-end solutions encompassing
                maintenance, security, and customer support. This commitment to
                excellence guarantees a seamless experience for residents and
                businesses alike.
              </p>
            </div>
            <h6 className="mt-5 text-xl font-medium">
              Community & District Management
            </h6>
            <h6 className="mt-5 font-medium">Sustainable Living at Its Best</h6>
            <div className="text-sm">
              <p className="mt-5">
                Divine Group is dedicated to creating flourishing communities
                that prioritize sustainability and quality of life. By managing
                residential and commercial districts with a focus on safety and
                aesthetics, we ensure that every development adds value for
                investors while enhancing the living experience for residents.{" "}
              </p>
            </div>
            <h6 className="mt-5 text-xl font-medium">
              Retail Destinations: A World of Opportunities
            </h6>
            <h6 className="mt-5 font-medium">Prime Locations Across Malta</h6>
            <div className="text-sm">
              <p className="mt-5">
                Our retail portfolio features some of Malta’s most vibrant
                shopping destinations. From boutique stores to large-scale
                retail centers, Divine Group provides dynamic spaces where
                businesses can thrive. Each destination is designed with
                accessibility and customer satisfaction in mind, making them
                ideal for both local shoppers and international visitors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RealEstatePage;
