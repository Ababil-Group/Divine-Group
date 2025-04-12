// import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";
import { BsEnvelopeAtFill } from "react-icons/bs";
// import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Divine Group | Contact Us",
};

const ContactUsPage = () => {
  return (
    <main>
      <div className="container py-20">
        <div className="container">
          <h1 className="text-center text-4xl font-bold text-primary-divine">
            Contact Us
          </h1>
          <p className="mb-8 mt-3 text-center">
            Feel free to reach out to us for any questions, inquiries, or
            recommendations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* card  */}
            {/* <div className="flex w-[350px] cursor-pointer flex-col items-center gap-2 rounded-xl border border-x-8 border-x-primary-divine p-10 duration-200 hover:border-primary-divine">
              <FaMapMarkedAlt className="animate-floating text-center text-4xl text-primary-divine" />
              <h4 className="text-2xl font-semibold">Location</h4>
              <Link
                className="text-sm font-medium duration-200 hover:text-primary-divine"
                href="https://maps.app.goo.gl/mVZvmsBbz77tNJx18"
                target="_blank"
              >
                Uttara, Dhaka, Bangladesh
              </Link>
            </div> */}
            {/* card  */}
            <div className="flex w-[350px] cursor-pointer flex-col items-center gap-2 rounded-xl border border-x-8 border-x-primary-divine p-10 duration-200 hover:border-primary-divine">
              <FaPhoneVolume className="animate-floating text-center text-4xl text-primary-divine" />
              <h4 className="text-2xl font-semibold">Call Us</h4>
              <Link
                className="text-sm font-medium duration-200 hover:text-primary-divine"
                href="tel:+8801234567890"
                target="_blank"
              >
                +356 993 04175
              </Link>
            </div>
            {/* card  */}
            <div className="flex w-[350px] cursor-pointer flex-col items-center gap-2 rounded-xl border border-x-8 border-x-primary-divine p-10 duration-200 hover:border-primary-divine">
              <BsEnvelopeAtFill className="animate-floating text-center text-4xl text-primary-divine" />
              <h4 className="text-2xl font-semibold">Email Us</h4>
              <Link
                className="text-sm font-medium duration-200 hover:text-primary-divine"
                href="mailto:info@divine.group"
                target="_blank"
              >
                info@divinegroup.online
              </Link>
            </div>
          </div>
        </div>
        <div className="container my-10 flex max-w-3xl flex-col-reverse items-center justify-between gap-x-20 lg:flex-row">
          <div className="w-full basis-full">
            <form className="space-y-5" action="">
              <Input
                className="text-sm focus:ring-2 focus:ring-primary-divine"
                type="text"
                placeholder="Name"
                required
              />
              <Input
                className="text-sm focus:ring-2 focus:ring-primary-divine"
                type="email"
                placeholder="Email"
                required
              />
              <Input
                className="text-sm focus:ring-2 focus:ring-primary-divine"
                type="text"
                placeholder="Subject"
                required
              />
              <Textarea
                className="text-sm focus:ring-2 focus:ring-primary-divine"
                placeholder="Message"
                rows={5}
                required
              />
              <Button className="bg-primary-divine" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          {/* <div className="relative min-h-[400px] w-full basis-full lg:min-h-[500px]">
            <Image
              className="object-contain"
              src="/contact-us.svg"
              alt="Borno - Contact Us"
              fill
            />
          </div> */}
        </div>
        {/* <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14596.188142742663!2d90.3525154355846!3d23.852463468173067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1731913750932!5m2!1sen!2sbd"
            width="100%"
            height="600"
            style={{ border: "0px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
        {/* <ContactForm /> */}
      </div>
    </main>
  );
};

export default ContactUsPage;
