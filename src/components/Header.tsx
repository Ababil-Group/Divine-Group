"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const notHomePage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled || notHomePage
          ? "sticky bg-white shadow-sm"
          : "fixed bg-transparent"
      } top-0 z-50 w-full py-5 transition-all duration-300`}
    >
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className={`h-auto w-[100px]`}
            src={isScrolled || notHomePage ? `/logo.png` : "/logo-white.png"}
            alt="Divine Group Logo"
            width={200}
            height={135}
          />
        </Link>

        <FaBars
          className={`cursor-pointer text-[30px] ${
            isScrolled || notHomePage ? "text-black" : "text-white"
          }`}
          onClick={toggleDrawer}
        />
      </nav>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className="flex h-full w-[285px] flex-col bg-primary-divine p-7 text-white">
          <Link href="/" onClick={toggleDrawer}>
            <Image
              className={`h-auto w-[100px]`}
              src="/logo-white.png"
              alt="Divine Group Logo"
              width={200}
              height={135}
            />
          </Link>

          <div className="mt-10 space-y-3">
            <Link className="block" href="/who-we-are" onClick={toggleDrawer}>
              Who We Are
            </Link>

            <Link className="block" href="/contact-us" onClick={toggleDrawer}>
              Contact Us
            </Link>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars } from "react-icons/fa";
// import Drawer from "react-modern-drawer";
// import "react-modern-drawer/dist/index.css";
// import { usePathname } from "next/navigation";
// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const pathname = usePathname();

//   const toggleDrawer = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const notHomePage = pathname !== "/";

//   return (
//     <header
//       className={`${notHomePage ? "sticky bg-white" : "fixed"} top-0 z-50 w-full bg-transparent py-5 shadow-sm transition-all duration-300`}
//     >
//       <nav className="container flex items-center justify-between">
//         <Link href="/">
//           <Image
//             className={`h-auto w-[100px]`}
//             src={notHomePage ? `/logo.png` : "/logo-white.png"}
//             alt="Divine Group Logo"
//             width={200}
//             height={135}
//           />
//         </Link>

//         <FaBars
//           className={`cursor-pointer text-[30px] text-white`}
//           onClick={toggleDrawer}
//         />
//       </nav>

//       <Drawer
//         open={isOpen}
//         onClose={toggleDrawer}
//         direction="right"
//         className="bla bla bla"
//       >
//         <div className="flex h-full w-[285px] flex-col bg-primary-divine p-7 text-white">
//           <Link href="/" onClick={toggleDrawer}>
//             <Image
//               className={`h-auto w-[100px]`}
//               src="/logo-white.png"
//               alt="Divine Group Logo"
//               width={200}
//               height={135}
//             />
//           </Link>

//           <div className="mt-10 space-y-3">
//             <Link className="block" href="/who-we-are" onClick={toggleDrawer}>
//               Who We Are
//             </Link>

//             <Link className="block" href="/contact-us" onClick={toggleDrawer}>
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </Drawer>
//     </header>
//   );
// };

// export default Header;
