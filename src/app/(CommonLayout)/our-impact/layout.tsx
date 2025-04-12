import Link from "next/link";
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
import { Poppins } from "next/font/google";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import MobileServiceNavigation from "@/components/MobileServiceNavigation";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const OurImpactLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const industries = [
    {
      title: "Employment Service",
      path: "/our-impact/employment-service",
      icon: (
        <FaUsers className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Ict",
      path: "/our-impact/ict",
      icon: (
        <TbCloudNetwork className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Real Estate",
      path: "/our-impact/real-estate",
      icon: (
        <MdOutlineRealEstateAgent className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Hospitality",
      path: "/our-impact/hospitality",
      icon: (
        <IoBedOutline className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Media",
      path: "/our-impact/media",
      icon: (
        <MdOutlineVideoCameraBack className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Design",
      path: "/our-impact/design",
      icon: (
        <FaDraftingCompass className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Manufacturing & Logistics",
      path: "/our-impact/manufacturing-and-logistics",
      icon: (
        <FaGear className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Education",
      path: "/our-impact/education",
      icon: (
        <FaGraduationCap className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Tourism",
      path: "/our-impact/tourism",
      icon: (
        <FaUmbrellaBeach className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Smes & Entrepreneurship",
      path: "/our-impact/smes-and-entrepreneurship",
      icon: (
        <FaCubes className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Science",
      path: "/our-impact/science",
      icon: (
        <GiMaterialsScience className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
    {
      title: "Retail",
      path: "/our-impact/retail",
      icon: (
        <HiOutlineShoppingBag className="text-2xl text-primary-divine duration-200 group-hover:text-white" />
      ),
    },
  ];

  return (
    <main className={`${poppins.className} relative flex items-start`}>
      <MobileServiceNavigation />

      <aside className="group fixed left-0 z-50 hidden min-h-screen w-20 space-y-1 overflow-y-scroll border bg-white p-3 duration-500 hover:w-80 lg:block">
        {industries.map((industry, i) => (
          <Link
            className="block rounded-full p-2 duration-200 hover:bg-accent"
            href={industry.path}
            key={i}
          >
            <span className="flex items-center gap-3">
              <div className="inline-block rounded-full border p-2 group-hover:bg-primary-divine">
                {industry.icon}
              </div>
              <span className="hidden text-sm group-hover:inline">
                {industry.title}
              </span>
            </span>
          </Link>
        ))}
      </aside>

      <div className="grow">{children}</div>
    </main>
  );
};

export default OurImpactLayout;
