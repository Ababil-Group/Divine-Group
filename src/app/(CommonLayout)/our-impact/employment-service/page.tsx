import { Metadata } from "next";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Divine Group | Employment Service",
};

const EmploymentServicePage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/Employment Services.jpg"
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
                <h1 className="text-3xl font-medium">Employment Service</h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group is dedicated to empowering individuals in Malta
                  by providing comprehensive employment services that foster
                  independence and career growth. Our mission is to connect job
                  seekers with opportunities while supporting their journey
                  towards successful employment.
                </p>
              </div>
            </div>

            <h6 className="mt-5 font-medium">Our Mission</h6>

            <div className="text-sm">
              <p className="mt-5">
                At Divine Group, we believe in the potential of every
                individual. Our purpose is to assist job seekers in developing
                essential skills, securing meaningful employment, and achieving
                personal and professional goals. We strive to create a
                supportive environment where everyone can thrive.
              </p>
            </div>
            <h6 className="mt-5 font-medium">Pre-Employment Training</h6>

            <div className="text-sm">
              <p className="mt-5">
                Divine Group offers a range of pre-employment training services
                designed to equip individuals with the skills needed for the
                workforce. Our training includes:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Technical and Personal Skills Development</li>
                <li>Transitioning from Education to Employment</li>
                <li>Cultural Awareness and Diversity Training</li>
                <li>Career Assessments and Goal Setting</li>
                <li>Resume Writing and Interview Preparation</li>
                <li>Time Management and Work Ethics</li>
                <li>Understanding Employment Types and Benefits</li>
              </ul>
            </div>
            <h6 className="mt-5 font-medium">
              Job Development and Placement Services
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Our dedicated team provides personalized job development and
                placement assistance, including:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Creating Customized Employment Plans</li>
                <li>Searching for Full-Time and Part-Time Opportunities</li>
                <li>Identifying Paid Internship Programs</li>
                <li>Assisting with Interview Techniques and Skills</li>
                <li>Connecting Job Seekers with Local Employers</li>
              </ul>
            </div>
            <h6 className="mt-5 font-medium">Supported Employment Program</h6>

            <div className="text-sm">
              <p className="mt-5">
                Divine Group offers ongoing support for individuals in their
                employment journey. Our Supported Employment Program includes:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>On-Site Job Coaching and Mentoring</li>
                <li>Advocacy for Fair Pay and Working Conditions</li>
                <li>Orientation and Training Assistance</li>
                <li>Building Positive Relationships with Colleagues</li>
                <li>Continuous Performance Support</li>
              </ul>
            </div>
            <h6 className="mt-5 font-medium">Remote Services</h6>

            <div className="text-sm">
              <p className="mt-5">
                In response to changing needs, Divine Group provides remote
                employment services through virtual platforms. Clients can
                receive training and support from the comfort of their own
                homes, ensuring accessibility for all.
              </p>
            </div>
            <h6 className="mt-5 font-medium">Paid Internship Program (PIP)</h6>

            <div className="text-sm">
              <p className="mt-5">
                Our Paid Internship Program partners with local businesses to
                provide hands-on training opportunities. This program allows
                individuals to gain valuable work experience while exploring
                various career paths tailored to their interests.
              </p>
            </div>

            <h6 className="mt-5 font-medium">Why Choose Divine Group?</h6>

            <div className="text-sm">
              <ul className="mt-5 space-y-1">
                <li>
                  <strong>Empowerment Focus:</strong> We prioritize the personal
                  growth of each individual.
                </li>
                <li>
                  <strong>Comprehensive Support:</strong> From training to job
                  placement, we offer end-to-end services.
                </li>
                <li>
                  <strong>Community Connections:</strong> Strong partnerships
                  with local businesses enhance job opportunities.
                </li>
                <li>
                  <strong>Tailored Programs:</strong> Customized training and
                  support based on individual needs.
                </li>
                <li>
                  <strong>Commitment to Excellence:</strong> A dedicated team
                  that strives for success in every placement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmploymentServicePage;
