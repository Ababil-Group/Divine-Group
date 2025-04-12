import { Metadata } from "next";
import Image from "next/image";
import { FaGear } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Divine Group | Manufacturing and Logistics",
};

const ManufacturingAndLogisticsPage = () => {
  return (
    <main className="pb-20">
      <section>
        {/* top div  */}
        <div className="relative min-h-[700px] w-full">
          <Image
            className="object-cover object-center"
            src="/our-impact/Manufacturing & Logistics.jpg"
            alt="Manufacturing And Logistics"
            fill
          />
        </div>

        {/* bottom div  */}
        <div className="container">
          <div className="relative mx-auto -mt-20 max-w-5xl rounded-2xl bg-white p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-5 lg:flex-row">
              <div className="basis-full lg:basis-auto">
                <div className="mb-5 flex size-36 items-center justify-center rounded-full border-2 border-primary-divine">
                  <FaGear className="text-8xl text-primary-divine" />
                </div>{" "}
              </div>
              <div className="basis-full lg:basis-auto">
                <h1 className="text-3xl font-medium">
                  Manufacturing & Logistics
                </h1>
                <p className="mt-3 text-xl font-extralight">
                  Divine Group is committed to realizing Malta’s potential as a
                  leading global manufacturing and logistics center through the
                  establishment of Malta Industrial City. This dedicated
                  industrial hub offers unparalleled manufacturing and
                  logistical services to support the region&apos;s growth and
                  development.
                </p>
              </div>
            </div>

            <h6 className="mt-5 text-xl font-medium">Malta Industrial City</h6>

            <h6 className="mt-5 font-medium">
              A Premier Destination for Industrial Development
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Founded in 2004, Malta Industrial City has been pivotal in
                accelerating industrial growth across the region, positioning
                Malta as a global manufacturing and logistics powerhouse. The
                city features world-class infrastructure and a comprehensive
                range of efficient, cost-effective services designed to enhance
                the ease of doing business and boost Malta’s competitiveness on
                the global stage.
              </p>
              <p className="mt-5">
                Strategically located near key transport links, including major
                ports and airports, Malta Industrial City enables businesses to
                reach two-thirds of the world’s population within eight hours.
                Spanning 550 million sq ft, this expansive business district
                caters to various sectors, including food and beverages,
                transport equipment, machinery, logistics, chemicals, and more.
              </p>
              <p className="mt-5">
                Home to over 250 operational factories and more than 750
                business partners, Malta Industrial City includes prominent
                companies such as Barakat Quality Plus, Unilever, and other
                industry leaders. This thriving environment catalyzes growth in
                the industrial sector, attracting investors eager to contribute
                to Malta&apos;s economic diversification.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">Malta Outsource City</h6>
            <h6 className="mt-5 font-medium">
              Driving Growth in the Outsourcing Industry
            </h6>

            <div className="text-sm">
              <p className="mt-5">
                Building on the success of Malta Industrial City, Malta
                Outsource City was established in 2007 as a dedicated community
                aimed at fostering the growth of the outsourcing industry. This
                vibrant hub supports business process outsourcing (BPO), HR
                outsourcing, IT outsourcing, and back-office operations.
              </p>
              <p className="mt-5">
                Malta Outsource City provides purpose-built infrastructure along
                with state-of-the-art office spaces and facilities management
                services. It has evolved into a thriving community housing over
                1,600 business partners, including both Fortune 500 companies
                and innovative startups.
              </p>
            </div>

            <h6 className="mt-5 text-xl font-medium">SmartCity Malta</h6>
            <h6 className="mt-5 font-medium">
              Creating Knowledge-Based Clusters for Innovation
            </h6>
            <div className="text-sm">
              <p className="mt-5">
                SmartCity Malta was launched in 2007 to export the successful
                business community model established in Malta Industrial City.
                This initiative aims to create a global network of purpose-built
                free zone communities that promote economic growth and personal
                development.
              </p>
              <p className="mt-5">
                SmartCity communities are designed to foster innovation through
                environmentally friendly infrastructure while nurturing emerging
                companies in the technology, science, and innovation sectors. By
                creating an ecosystem that encourages collaboration and
                creativity, SmartCity Malta positions itself as a leader in
                sustainable industrial development.
              </p>
            </div>

            <h6 className="mt-5 font-medium">Why Choose Divine Group?</h6>
            <div className="text-sm">
              <ul className="mt-5 list-decimal space-y-1 pl-5">
                <li>
                  Strategic Location: Benefit from proximity to major transport
                  links facilitating global trade.
                </li>
                <li>
                  Comprehensive Infrastructure: Access world-class facilities
                  tailored for various industries.
                </li>
                <li>
                  Diverse Business Ecosystem: Join a thriving community of
                  established companies and startups.
                </li>
                <li>
                  Support for Innovation: Engage with initiatives that promote
                  technology and entrepreneurship.
                </li>
                <li>
                  Commitment to Growth: Contribute to Malta’s vision of becoming
                  a leading industrial hub.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ManufacturingAndLogisticsPage;
