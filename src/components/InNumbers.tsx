"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const InNumbers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensure the animation triggers only once
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  return (
    <section className="bg-primary-divine py-20 text-white">
      <div className="container">
        <div>
          <h2 className="text-4xl">Divine Group in Numbers</h2>
          <div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          >
            <div className="flex items-center gap-x-2">
              <h2 className="text-[100px] font-black">
                {inView && <CountUp end={150} duration={3} />}
              </h2>
              <h5 className="text-lg">
                BILLION <br /> EURO <br /> TOTAL ASSETS
              </h5>
            </div>
            <div className="flex items-center gap-x-2">
              <h2 className="text-[100px] font-black">
                {inView && <CountUp end={20} duration={3} />}
              </h2>
              <h5 className="text-lg">
                THOUSAND <br /> COMBINED WORKFORCE <br /> ACROSS THE GROUP
              </h5>
            </div>
            <div className="flex items-center gap-x-2">
              <h2 className="text-[100px] font-black">
                {inView && <CountUp end={15} duration={3} />}
              </h2>
              <h5 className="text-lg">
                COUNTRIES <br /> WHERE <br /> WE INVEST
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InNumbers;
