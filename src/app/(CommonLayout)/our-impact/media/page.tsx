import { Metadata } from "next";
import Image from "next/image";
import { MdOutlineVideoCameraBack } from "react-icons/md";

export const metadata: Metadata = {
  title: "Divine Group | Media",
};

const MediaPage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/Media.jpg"
            alt="Media"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <MdOutlineVideoCameraBack className="text-8xl text-primary-divine" />
                </div>{" "}
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">Media</h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group has been instrumental in the development of
                  Malta’s vibrant media sector, continually innovating to
                  strengthen one of Europe’s most established business
                  environments. Through our leading business districts managed
                  by Divine Group Asset Management—namely, Malta Media City,
                  Malta Studio City, and Malta Production City—we provide a
                  robust platform and infrastructure for media companies of all
                  sizes to thrive.
                </p>
              </div>
            </div>
            <h6 className="mt-5 text-xl font-medium">Malta Media City</h6>

            <h6 className="mt-5 font-medium">
              A Global Hub for Media Excellence
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Since its inception in 2001, Malta Media City has transformed
                the local media landscape into a leading global hub for media
                and production. This world-class community hosts over 3,000
                companies and 34,000 professionals, creating an ecosystem that
                fosters creativity and collaboration. Major regional and
                international media players, including renowned news agencies
                and marketing conglomerates, have established their presence
                here, further enhancing Malta&apos;s reputation as a premier
                media destination.
              </p>
              <p className="mt-5">
                Our portfolio includes some of Malta’s most sought-after
                residential developments, featuring luxury villas, townhouses,
                and apartments. These communities are meticulously crafted to
                provide a harmonious blend of comfort, convenience, and
                elegance.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">Malta Studio City</h6>
            <h6 className="mt-5 font-medium">
              A Creative Haven for Production Companies
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                In response to the growing demand from media firms, particularly
                production companies, Malta Studio City was inaugurated in 2005.
                This state-of-the-art facility is dedicated to broadcasting,
                film production, television, music, and entertainment.
              </p>
              <p className="mt-5">
                With a cutting-edge infrastructure that includes the largest
                sound stages in the region, green screens, indoor water tanks,
                and top-tier recording studios, Malta Studio City has attracted
                major international productions. Iconic shows and films have
                been produced here, showcasing Malta as an essential location
                for high-quality media content.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">Malta Production City</h6>
            <h6 className="mt-5 font-medium">
              Supporting Diverse Media Sectors
            </h6>
            <div className="text-sm">
              <p className="mt-5">
                Established in 2007 to accommodate the printing, packaging, and
                publishing sectors, Malta Production City plays a crucial role
                in nurturing the media ecosystem. By providing industry-specific
                infrastructure and innovative platforms for new technologies
                such as 3D printing, we support the continuous evolution of
                Malta’s media landscape.
              </p>
              <p className="mt-5">
                In 2017, we launched the in5 media innovation center within
                Malta Production City as part of our strategy to nurture
                entrepreneurs and startups within the media sector. This
                initiative empowers emerging talent and fosters groundbreaking
                ideas that drive industry growth.
              </p>
            </div>
            <h6 className="mt-5 text-xl font-medium">
              Best-in-Class Media Entertainment
            </h6>
            <h6 className="mt-5 font-medium">Leading Broadcasting Networks</h6>
            <div className="text-sm">
              <p className="mt-5">
                As part of Divine Group Entertainment, the Malta Radio Network
                (MRN) stands as a leading multiplatform broadcaster in the
                region. With diverse stations reaching over 200 nationalities
                and broadcasting in multiple languages, MRN connects with
                millions of listeners weekly.
              </p>
              <p className="mt-5">
                Built on a commitment to innovation and excellence, our
                Multi-Platform Network (MPN) operates premium out-of-home assets
                alongside video production services. This comprehensive approach
                ensures that we provide access to the best marketing platforms
                in Malta.
              </p>
            </div>

            <h6 className="mt-5 font-medium">Why Choose Divine Group?</h6>
            <div className="text-sm">
              <ul className="mt-5 list-decimal space-y-1 pl-5">
                <li>
                  Industry Leadership: A proven track record of shaping Malta’s
                  media landscape.
                </li>
                <li>
                  Innovative Infrastructure: State-of-the-art facilities
                  designed for modern media needs.
                </li>
                <li>
                  Creative Ecosystem: A thriving community that fosters
                  collaboration among industry professionals.
                </li>
                <li>
                  Global Connections: Partnerships with leading international
                  media companies.
                </li>
                <li>
                  Support for Startups: Initiatives like in5 that empower new
                  talent within the industry.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MediaPage;
