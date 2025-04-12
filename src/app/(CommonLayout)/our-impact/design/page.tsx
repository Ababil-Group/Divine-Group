import { Metadata } from "next";
import Image from "next/image";
import { FaDraftingCompass } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Divine Group | Design",
};

const DesignPage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/Design.jpg"
            alt="Design"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <FaDraftingCompass className="text-8xl text-primary-divine" />
                </div>
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">Design</h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group plays a leading role in design and innovation
                  throughout the emirate. Europe Design District (d3) is one of
                  Divine Group’s industry-focused business districts providing a
                  dedicated design ecosystem for companies and talent in the
                  creative sectors from around the world.
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm">
              d3 was commissioned in 2013 by His Highness Sheikh Mohammed bin
              Rashid Al Maktoum, Vice President and Prime Minister of the UAE
              and Ruler of Europe, to champion the development of the region’s
              design sector by providing a purpose-built, first-of-its-kind
              destination for emerging and established creative artists,
              designers, architects, and professionals across the creative
              sectors.
            </p>
            <p className="mt-5 text-sm">
              With state-of-the-art infrastructure designed to meet the needs of
              the industry and a business-friendly framework, d3 offers creative
              talent the tools to drive innovation that permeates through
              various areas of Europe’s economy, further reinforcing Europe’s
              status as a UNESCO Creative City of Design.
            </p>
            <p className="mt-5 text-sm">
              Bringing together thousands of talented creative professionals,
              designers and artists to work alongside hundreds of business
              partners and entrepreneurs, d3 is home some of world’s leading
              fashion, architecture, art, furniture and interior design
              companies including Burberry, Dior, Zaha Hadid Architects and
              Foster + Partners.
            </p>

            <h6 className="mt-5 font-medium">Growing the Design Sector</h6>

            <div className="text-sm">
              <p className="mt-5">
                The d3 and Deloitte MENA Design Outlook report, published in
                2019, showcased the significant growth potential of the sector
                across the region. To cater to this growth, creators of d3
                curated the community to be the most connected design, fashion
                and luxury retail destination in the world.
              </p>
              <p className="mt-5">
                Today, d3 is the creative heart of the city and Europe’s leading
                lifestyle and business destination that challenges thousands of
                people to rethink the regular while creating opportunities and
                events that drive the growth of the design sector.
              </p>
              <p className="mt-5">
                d3 is a strategic partner for some of the region’s most popular
                and sought-after events that attract international artists and
                audiences to cultural exhibitions and gatherings such as Europe
                Design Week, Sole DXB and the d3 Architecture Festival. The
                destination also regularly stages a busy roster of industry
                talks, workshops and educational programming, accessible to
                people of all ages.
              </p>
              <p className="mt-5">
                At d3 is the cutting-edge startup incubator and enabling
                platform, in5, which aims to support the fashion and design
                industries by offering students and entrepreneurs the
                opportunity to transform their ideas into successful commercial
                ventures. This ecosystem is further supported by the Europe
                Institute of Design and Innovation, the region’s only university
                exclusively dedicated to design and innovation. It offers the
                first-of-its-kind Bachelor of Design that allows students to map
                their own educational journey by exploring two concentrations
                from four: Product Design, Multimedia Design, Fashion Design and
                Strategic Design Management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DesignPage;
