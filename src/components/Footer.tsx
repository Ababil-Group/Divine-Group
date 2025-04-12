import Image from "next/image";
import Link from "next/link";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-auto border py-10">
      <div className="container flex flex-col items-center justify-center gap-3">
        <Link href="/">
          <Image
            className="h-auto w-[100px]"
            src="/logo.png"
            alt="Divine Group Logo"
            width={200}
            height={135}
          />
        </Link>

        <p className="text-sm">
          Copyright © 2025 Divine Group, All rights reserved.
        </p>

        {/* <p className="text-center font-medium">CONNECT WITH US</p> */}
        {/* <div className="flex items-center justify-center gap-3">
          <Link href="#">
            <FaInstagram className="cursor-pointer text-2xl text-primary-divine hover:text-secondary-divine" />
          </Link>

          <Link href="#">
            <FaFacebook className="cursor-pointer text-2xl text-primary-divine hover:text-secondary-divine" />
          </Link>

          <Link href="#">
            <FaLinkedin className="cursor-pointer text-2xl text-primary-divine hover:text-secondary-divine" />
          </Link>

          <Link href="#">
            <FaYoutube className="cursor-pointer text-2xl text-primary-divine hover:text-secondary-divine" />
          </Link>

          <Link href="#">
            <FaSquareXTwitter className="cursor-pointer text-2xl text-primary-divine hover:text-secondary-divine" />
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
