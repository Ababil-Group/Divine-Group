import { Metadata } from "next";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Divine Group | Retail",
};

const RetailPage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/Retail.jpg"
            alt="Retail"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <HiOutlineShoppingBag className="text-8xl text-primary-divine" />
                </div>
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">Retail</h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group enhances the vibrant retail landscape of Malta,
                  recognizing the importance of retail as a major contributor to
                  the country’s diverse economy while facilitating ongoing
                  growth in the sector and tourism overall.
                </p>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group Asset Management’s retail portfolio includes some
                  of Malta’s most iconic destinations, elevating the city’s
                  status as a global center for tourism and leisure. We operate
                  20 leading urban retail destinations, encompassing 3.7 million
                  sq. ft. of gross leasable retail space across the island.
                </p>
              </div>
            </div>

            <h6 className="mt-5 font-medium">
              Malta’s Vibrant Retail Landscape
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Malta’s retail sector is a key contributor to the country’s
                economy and tourism, offering a mix of high-end shopping
                destinations, local boutiques, and community-focused hubs.
                Valletta Waterfront stands out as one of Malta’s most iconic
                destinations, combining stunning Grand Harbour views with a
                lively atmosphere. It features a variety of retail outlets,
                restaurants, and cafés, making it a must-visit for locals and
                tourists alike. Similarly, the Sliema Promenade is a bustling
                hub with international high-street stores, boutique shops, and
                dining options. Visitors can enjoy scenic Mediterranean views
                while exploring popular brands and savoring both local and
                international cuisines.
              </p>
            </div>

            <h6 className="mt-5 font-medium">Premier Shopping Destinations</h6>

            <div className="text-sm">
              <p className="mt-5">
                Tigné Point, located in Sliema, is home to The Point Shopping
                Mall, Malta&apos;s premier lifestyle destination. This upscale
                mall offers high-end brands, entertainment options, and dining
                experiences in a modern setting. In addition, PAMA Shopping
                Village in Mosta and PAVI Shopping Complex in Qormi are two of
                the island&apos;s largest retail centers. These complexes house
                supermarkets, fashion outlets (including Zara and Zara Home),
                electronics stores, and other essential services, making them
                popular family shopping destinations. Birkirkara also serves as
                a thriving mixed-use district with shopping centers that provide
                diverse retail options for residents and visitors alike.
              </p>
            </div>

            <h6 className="mt-5 font-medium">Blending Culture with Retail</h6>
            <div className="text-sm">
              <p className="mt-5">
                Malta’s retail landscape also celebrates its cultural heritage
                through destinations like The Village, which combines local
                crafts with global brands in a vibrant shopping atmosphere.
                Community-focused retail developments across the island
                integrate essential services such as supermarkets, pharmacies,
                salons, and dining outlets within residential areas to enhance
                convenience for locals.
              </p>
              <p className="mt-5">
                With its mix of iconic shopping hubs like Valletta Waterfront
                and The Point Shopping Mall alongside cultural and
                community-driven experiences, Malta offers something for every
                shopper—from luxury goods to local crafts—solidifying its
                reputation as a premier Mediterranean destination for shopping
                and leisure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RetailPage;
