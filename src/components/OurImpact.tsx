import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TbCloudNetwork } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { FaDraftingCompass } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import Link from "next/link";

export const industries = [
  {
    title: "EMPLOYMENT SERVICE",
    path: "/our-impact/employment-service",
    icon: <FaUsers className="text-5xl duration-300 group-hover:text-white" />,
  },
  {
    title: "ICT",
    path: "/our-impact/ict",
    icon: (
      <TbCloudNetwork className="text-5xl duration-300 group-hover:text-white" />
    ),
  },
  {
    title: "REAL ESTATE",
    path: "/our-impact/real-estate",
    icon: (
      <MdOutlineRealEstateAgent className="text-5xl duration-300 group-hover:text-white" />
    ),
  },
  {
    title: "HOSPITALITY",
    path: "/our-impact/hospitality",
    icon: (
      <IoBedOutline className="text-5xl duration-300 group-hover:text-white" />
    ),
  },
  {
    title: "MEDIA",
    path: "/our-impact/media",
    icon: (
      <MdOutlineVideoCameraBack className="text-5xl duration-300 group-hover:text-white" />
    ),
  },
  {
    title: "DESIGN",
    path: "/our-impact/design",
    icon: (
      <FaDraftingCompass className="text-5xl duration-300 group-hover:text-white" />
    ),
  },
  {
    title: "MANUFACTURING & LOGISTICS",
    path: "/our-impact/manufacturing-and-logistics",
    icon: <FaGear className="text-5xl duration-300 group-hover:text-white" />,
  },
  {
    title: "EDUCATION",
    path: "/our-impact/education",
    icon: (
      <FaGraduationCap className="text-5xl duration-300 group-hover:text-white" />
    ),
  },
  {
    title: "TOURISM",
    path: "/our-impact/tourism",
    icon: (
      <FaUmbrellaBeach className="text-5xl duration-300 group-hover:text-white" />
    ),
  },
  {
    title: "SMES & ENTREPRENEURSHIP",
    path: "/our-impact/smes-and-entrepreneurship",
    icon: <FaCubes className="text-5xl duration-300 group-hover:text-white" />,
  },
  {
    title: "SCIENCE",
    path: "/our-impact/science",
    icon: (
      <GiMaterialsScience className="text-5xl duration-300 group-hover:text-white" />
    ),
  },
  {
    title: "RETAIL",
    path: "/our-impact/retail",
    icon: (
      <HiOutlineShoppingBag className="text-5xl duration-300 group-hover:text-white" />
    ),
  },
];

const OurImpact = () => {
  return (
    <section className="bg-[#f7f7f788] py-20">
      <div className="container">
        <div className="group inline-block">
          <h2 className="inline-block cursor-default text-4xl text-secondary-divine">
            Our Impact
          </h2>
          <div className="mt-1 h-1 w-[60px] rounded-full bg-primary-divine duration-500 group-hover:w-[200px]"></div>
          <p className="mt-4">
            Divine Group has played an instrumental role in diversifying
            Europe&apos;s economy. Collectively, our companies represent our
            involvement across 12 sectors, continually driving support and
            growth of a sustainable, innovation-led economy in line with the
            Malta government’s vision.
          </p>
        </div>

        <div className="px-10">
          <Carousel>
            <CarouselContent className="py-11">
              {industries.map((industry) => (
                <CarouselItem
                  className="basis-full items-center justify-center md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                  key={industry.title}
                >
                  <Link href={industry.path}>
                    <div className="group flex flex-col items-center justify-center gap-5 duration-300 hover:scale-125">
                      <div className="inline-block rounded-full border-2 border-secondary-divine p-4 duration-300 group-hover:border-primary-divine group-hover:bg-primary-divine">
                        {industry.icon}
                      </div>
                      <h3 className="text-center text-lg font-light">
                        {industry.title}
                      </h3>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
