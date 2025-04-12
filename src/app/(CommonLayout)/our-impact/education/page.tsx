import { Metadata } from "next";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Divine Group | Education",
};

const EducationPage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/Education.jpg"
            alt="Education"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <FaGraduationCap className="text-8xl text-primary-divine" />
                </div>{" "}
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">Education</h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group is dedicated to transforming Malta into a global
                  academic hub, driving a knowledge-based and innovation-led
                  economy through our prominent education-focused institutions
                  and districts across the region.
                </p>
              </div>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Malta International Academic City: A Premier Ecosystem for Higher
              Education
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Malta International Academic City (MIAC), part of Divine Group
                Asset Management’s portfolio, stands as one of the largest
                ecosystems dedicated to higher education in the region.
                Established to foster academic excellence, MIAC is home to over
                27 universities and offers more than 500 diverse higher
                education programs across its expansive 18 million ft² space.
                Since its inception, MIAC has welcomed over 27,000 students from
                150 different nationalities, creating a vibrant melting pot of
                cultures and ideas.
              </p>
              <p className="mt-5">
                As a premier destination for higher education, MIAC bridges the
                gap between academia and industry by hosting branches of
                international institutions and programs. This strategic
                positioning appeals to transnational students and has
                significantly transformed Malta’s educational landscape,
                establishing the country as a global education hub. The city
                continues to expand to meet the evolving needs of the academic
                community, empowering a generation of innovators and leaders.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Malta Knowledge Park: Fostering Talent Development
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Malta Knowledge Park is a dedicated business district focused on
                human resource management and talent development. Established in
                2003, it is home to over 500 business partners and institutions
                specializing in human resources, including consultancy,
                training, and development. Malta Knowledge Park plays a crucial
                role in enhancing the human capital industry in the region
                through high-quality vocational training and professional
                development solutions.
              </p>
              <p className="mt-5">
                Both Malta International Academic City and Malta Knowledge Park
                host numerous prominent events that support the economy and
                drive the ongoing development of the regional education sector.
                These include the Industry and University Partnership (I-UP)
                Forum, bi-annual career fairs, and various international visits
                aimed at sharing knowledge and leveraging innovative approaches
                within academia. The districts also provide ideal venues for
                concerts, award shows, festivals, and various cultural, social,
                and corporate events.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">
              Malta Institute of Design and Innovation (MIDI): Cultivating
              Future Designers
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                The Malta Institute of Design and Innovation (MIDI) is a private
                university located within the Malta Design District (d3),
                addressing the growing demand for talented designers in Europe
                and beyond. MIDI offers an integrated Bachelor of Design degree
                that allows students to customize their educational journey by
                pairing two of four disciplines: Product Design, Multimedia
                Design, Fashion Design, and Strategic Design Management.
              </p>
              <p className="mt-5">
                Developed in collaboration with leading institutions such as the
                Massachusetts Institute of Technology (MIT) and Parsons School
                of Design, MIDI’s curriculum emphasizes innovation and
                creativity. The campus features a collaborative mega studio
                space designed to encourage interaction among disciplines.
              </p>
            </div>
            <h6 className="mt-5 text-xl font-medium">
              Malta Academy of Hospitality Management: Center for Excellence
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Divine Group extends its educational portfolio through the Malta
                Academy of Hospitality Management, which offers degree-level
                courses focusing on hospitality management. Recognized globally
                for its thriving tourism sector, this academy serves as a
                regional epicenter for hospitality-focused management degrees
                complemented by internationally recognized programs.
              </p>
              <p className="mt-5">
                Accredited by prestigious organizations such as the Institute of
                Hospitality in the United Kingdom, the academy provides students
                with firsthand experience within leading hospitality
                establishments across Malta. With students from over 60
                different nationalities, it emphasizes cultural sensitivity,
                tolerance, and appreciation for diverse traditions.
              </p>
            </div>

            <h6 className="mt-5 font-medium">
              Why Choose Divine Group for Education?
            </h6>
            <div className="text-sm">
              <ul className="mt-5 list-decimal space-y-1 pl-5">
                <li>
                  <strong>Diverse Opportunities:</strong> Access to a wide range
                  of programs across multiple disciplines.
                </li>
                <li>
                  <strong>Global Collaboration:</strong> Partnerships with
                  renowned international institutions enhance learning
                  experiences.
                </li>
                <li>
                  <strong>Innovative Learning Environments:</strong>{" "}
                  State-of-the-art facilities that foster creativity and
                  collaboration.
                </li>
                <li>
                  <strong>Industry Connections:</strong> Strong ties with local
                  industries provide valuable networking opportunities.
                </li>
                <li>
                  <strong>Cultural Diversity:</strong> A vibrant community that
                  celebrates multiculturalism and inclusivity.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EducationPage;
