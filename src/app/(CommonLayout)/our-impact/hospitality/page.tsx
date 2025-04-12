import { Metadata } from "next";
import Image from "next/image";
import { IoBedOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Divine Group | Hospitality",
};

const HospitalityPage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/Hospitality.jpg"
            alt="Hospitality"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <IoBedOutline className="text-8xl text-primary-divine" />
                </div>{" "}
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">Hospitality</h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group has been at the forefront of Malta’s hospitality
                  industry, delivering unparalleled guest experiences through
                  its luxury hospitality brands and strategic partnerships with
                  world-renowned hotel operators. With a commitment to
                  excellence, we have become synonymous with premium service and
                  unforgettable stays.
                </p>
              </div>
            </div>

            <h6 className="mt-5 font-medium">Luxury Hotels in Malta</h6>

            <div className="text-sm">
              <p className="mt-5">
                Divine Group’s vision aligns with Malta’s vibrant hospitality
                landscape, which boasts some of the most prestigious hotels in
                Europe. Among these are iconic establishments like The Phoenicia
                Malta, a historic 5-star hotel located at the gates of Valletta,
                offering lush gardens, an infinity pool with panoramic views of
                Marsamxett Harbour, and a luxurious spa featuring a Himalayan
                salt room and steam baths. Similarly, Hilton Malta, situated in
                Portomaso Marina, combines Mediterranean elegance with modern
                amenities, including multiple pools, tennis courts, and fine
                dining options like the renowned Blue Elephant restaurant.
              </p>
              <p className="mt-5">
                Other standout properties include Cugó Gran Macina Grand Harbour
                Hotel, a boutique gem blending 16th-century architecture with
                modern luxury in Senglea, and The Westin Dragonara Resort, known
                for its prime location on the Dragonara Peninsula and its
                private beaches. These hotels exemplify Malta’s commitment to
                providing world-class accommodations that blend history,
                culture, and contemporary comfort.
              </p>
            </div>

            <h6 className="mt-5 font-medium">Culinary Excellence</h6>

            <div className="text-sm">
              <p className="mt-5">
                Malta’s culinary scene thrives with diverse dining options that
                cater to every palate. Notable restaurants include ION Harbour
                at Iniala Harbour House in Valletta, led by Michelin-starred
                chef Simon Rogan, offering innovative menus inspired by local
                and seasonal ingredients. The Villa Corinthia at Corinthia
                Palace Hotel showcases gourmet Mediterranean cuisine under the
                guidance of acclaimed chef Francesco Mazzei. Additionally,
                casual yet refined dining experiences are available at venues
                like Oceana at Hilton Malta or Salia at db Seabank Resort & Spa.
              </p>
            </div>

            <h6 className="mt-5 font-medium">Wellness Retreats</h6>
            <div className="text-sm">
              <p className="mt-5">
                Malta’s hospitality offerings extend to wellness through
                luxurious spas designed to rejuvenate the mind and body. The
                Essence Spa at Iniala Harbour House provides personalized
                treatments in a serene setting overlooking Valletta’s Grand
                Harbour. At Corinthia Palace Hotel, guests can indulge in
                holistic therapies and state-of-the-art wellness facilities
                amidst lush gardens. Similarly, Hilton Malta offers a tranquil
                spa experience complemented by its outdoor pools and fitness
                amenities.
              </p>
            </div>
            <h6 className="mt-5 font-medium">Gozo: A Natural Escape</h6>
            <div className="text-sm">
              <p className="mt-5">
                For those seeking serenity and adventure, Gozo offers
                eco-friendly accommodations that immerse visitors in nature.
                Guests can explore hiking trails or relax in boutique lodges
                while enjoying the island&apos;s unspoiled beauty. Properties
                like Kempinski Hotel San Lawrenz provide an ideal retreat with
                luxurious amenities amidst Gozo’s tranquil landscapes.
              </p>
            </div>
            <h6 className="mt-5 font-medium">Strategic Partnerships</h6>
            <div className="text-sm">
              <p className="mt-5">
                Through collaborations with global leaders such as Hard Rock
                Hotel Malta and Bvlgari Resort & Residences Malta (upcoming
                projects), Divine Group continues to bring internationally
                acclaimed brands to the Maltese Islands. These partnerships
                enhance the local hospitality sector while attracting discerning
                travelers from around the world.
              </p>
              <p className="mt-5">
                By combining luxury accommodations, exceptional dining
                experiences, wellness retreats, and eco-friendly escapes, Divine
                Group and Malta’s hospitality industry offer an unparalleled
                experience for travelers seeking both relaxation and adventure
                in the heart of the Mediterranean.
              </p>
            </div>
            <h6 className="mt-5 font-medium">Why Choose Divine Group?</h6>
            <div className="text-sm">
              <ul className="mt-5 list-decimal space-y-1 pl-5">
                <li>
                  Unmatched Luxury: Experience world-class hospitality at our
                  iconic properties.
                </li>
                <li>
                  Culinary Excellence: Indulge in diverse dining options crafted
                  by expert chefs.
                </li>
                <li>
                  Wellness Focus: Rejuvenate with award-winning treatments at
                  Talise Spa.
                </li>
                <li>
                  Adventure Awaits: Explore nature through exclusive retreats in
                  Gozo.
                </li>
                <li>
                  Global Expertise: Benefit from partnerships with leading
                  international brands.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HospitalityPage;
