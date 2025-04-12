"use client";

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
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";

const MobileServiceNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  const industries = [
    {
      title: "Employment Service",
      path: "#",
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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <div className="fixed z-50 mt-5 flex h-[60px] w-[25px] cursor-pointer items-center justify-center bg-white text-primary-divine lg:hidden">
          <MdKeyboardArrowRight className="text-xl" />
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll" side="left">
        <div className="mt-9 space-y-2">
          {industries.map((industry, i) => (
            <Link
              className="block rounded-full border p-2 duration-200 hover:bg-accent"
              href={industry.path}
              key={i}
              onClick={closeSheet}
            >
              <span className="flex items-center gap-3">
                <div className="inline-block rounded-full border p-2 group-hover:bg-primary-divine">
                  {industry.icon}
                </div>
                <span className="text-sm text-primary-divine group-hover:inline">
                  {industry.title}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileServiceNavigation;
