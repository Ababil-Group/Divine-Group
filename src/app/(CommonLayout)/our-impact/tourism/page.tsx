import { Metadata } from "next";
import Image from "next/image";
import { FaUmbrellaBeach } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Divine Group | Tourism",
};

const TourismPage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/Tourism.jpg"
            alt="Tourism"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <FaUmbrellaBeach className="text-8xl text-primary-divine" />
                </div>{" "}
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">Tourism</h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group’s impact on leisure and entertainment is
                  unparalleled, offering leading attractions and venues that
                  have brought to life many of the most popular and iconic
                  tourist hotspots across Europe.
                </p>
              </div>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Entertaining Millions through Media, Events, and Attractions
            </h6>

            <h6 className="mt-5 font-medium">
              Divine Group Entertainment: A Leader in Leisure
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Divine Group Entertainment operates the Malta Radio Network
                (MRN), the largest and most dynamic multiplatform radio network
                in the region. With several leading radio stations, MRN attracts
                more than 4 million weekly listeners, connecting communities
                through music, culture, and local events.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Iconic Attractions and Venues
            </h6>
            <h6 className="mt-5 font-medium">
              A World of Entertainment Awaits
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                The Divine Group Entertainment portfolio features a diverse
                range of attractions and event venues that cater to all
                interests, including:
              </p>
              <ul className="mt-5 space-y-1">
                <li>
                  <strong>The Malta Eye:</strong> The largest observation wheel
                  in Europe, offering breathtaking views of the coastline and
                  cityscape.
                </li>
                <li>
                  <strong>Malta Arena:</strong> The largest multipurpose indoor
                  arena in the region, hosting concerts, sporting events, and
                  cultural performances.
                </li>
                <li>
                  <strong>The Tropical Oasis:</strong> An immersive indoor
                  tropical forest experience where visitors can encounter exotic
                  wildlife.
                </li>
                <li>
                  <strong>CineMalta:</strong> A boutique cinema experience that
                  combines luxury with the latest film releases.
                </li>
              </ul>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Adventure Awaits at Gozo Adventure Park
            </h6>
            <h6 className="mt-5 font-medium">Nature Meets Thrill</h6>
            <div className="text-sm">
              <p className="mt-5">
                Gozo Adventure Park is one of Malta’s premier eco-friendly
                adventure destinations. This unique experience allows visitors
                to escape city life and indulge in nature while enjoying a wide
                array of activities such as glamping, hiking, mountain biking,
                kayaking, and exploring the rich heritage of Gozo. It attracts
                thrill-seekers, nature enthusiasts, families, and holidaymakers
                year after year.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Spreading Joy with Leading Theme Parks
            </h6>
            <h6 className="mt-5 font-medium">Global Village Malta</h6>
            <div className="text-sm">
              <p className="mt-5">
                Managed by Divine Group Entertainment, Global Village Malta is
                one of Europe’s longest-established tourist attractions. Since
                its opening in 1997, it has offered world-class cultural and
                family entertainment featuring numerous international pavilions
                representing diverse countries. The attraction has welcomed
                millions of guests over its seasons.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Malta Parks and Resorts™
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                The newest addition to our entertainment portfolio is Malta
                Parks and Resorts™, the region’s largest multi-themed leisure
                destination comprising three distinct theme parks:
              </p>
              <ul className="mt-5 space-y-1">
                <li>
                  <strong>MOTIONGATE™ Malta:</strong> The largest
                  Hollywood-inspired theme park in the region featuring
                  immersive rides based on beloved films.
                </li>
                <li>
                  <strong>LEGOLAND® Malta:</strong> An interactive theme park
                  designed for families that brings LEGO® bricks to life in a
                  playful environment.
                </li>
                <li>
                  <strong>LEGOLAND® Water Park:</strong> The first water park
                  in Malta specifically designed for families with children aged
                  2-12 years.
                </li>
              </ul>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Quality Experiences at Water Parks
            </h6>
            <h6 className="mt-5 font-medium">AquaSplash Waterpark</h6>
            <div className="text-sm">
              <p className="mt-5">
                Opened in 1999, AquaSplash Waterpark became the first themed
                waterpark in the region and set a high standard for others to
                follow. With its innovative rides and commitment to safety, it
                welcomes thousands of visitors annually seeking fun and
                excitement.
              </p>
            </div>
            <h6 className="mt-5 font-medium">
              Enhancing Malta’s Appeal as a Tourism Destination
            </h6>
            <div className="text-sm">
              <p className="mt-5">
                Together, these diverse entertainment and leisure assets from
                across Divine Group’s portfolio significantly enhance the appeal
                of Malta as an international tourism destination. With
                high-quality facilities and exceptional standards of training,
                supervision, and security, we are committed to providing
                memorable experiences that entertain millions. Experience the
                magic of leisure and entertainment with Divine Group as we
                continue to shape Malta into a vibrant hub for tourists from
                around the globe!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TourismPage;
