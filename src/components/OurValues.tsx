import Image from "next/image";

const OurValues = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <h2 className="inline-block cursor-default text-4xl text-secondary-divine">
          Our Values
        </h2>
        <div className="mt-1 h-1 w-[60px] rounded-full bg-primary-divine duration-500 group-hover:w-[200px]"></div>

        <div className="w-full lg:w-1/2">
          <p className="mt-5">
            Divine Group Limited remains steadfast in its pursuit of growth,
            innovation, and success. We continuously contribute to the
            development of Malta and the broader European region by adhering to
            our core values:
          </p>
          <ul className="mt-5 space-y-1">
            <li>
              <strong>Integrity:</strong> We uphold the highest standards of
              honesty and transparency.
            </li>
            <li>
              <strong>Excellence:</strong> We strive for superior quality in all
              our services.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe in the power of
              teamwork and partnerships.
            </li>
            <li>
              <strong>Innovation:</strong> We embrace change and encourage
              creative solutions.
            </li>
            <li>
              <strong>Community Focus:</strong> We are committed to making a
              positive impact on society.
            </li>
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* card  */}
          <div className="space-y-2 rounded-3xl border-8 border-primary-divine p-5 duration-300 hover:shadow-2xl">
            <div>
              <Image
                src="/Commitment.png"
                alt="Commitment"
                height={40}
                width={40}
              />
            </div>
            <h4 className="text-2xl font-medium">Dedication</h4>
            <p className="">
              Focused on attaining the highest standards and producing
              exceptional outcomes.
            </p>
          </div>
          {/* card  */}
          <div className="space-y-2 rounded-3xl border-8 border-primary-divine p-5 duration-300 hover:shadow-2xl">
            <div>
              <Image src="/Care.png" alt="Care" height={40} width={40} />
            </div>
            <h4 className="text-2xl font-medium">Compassion</h4>
            <p className="">
              Focusing on the health and prosperity of our team, collaborators,
              and the communities we serve.
            </p>
          </div>
          {/* card  */}
          <div className="space-y-2 rounded-3xl border-8 border-primary-divine p-5 duration-300 hover:shadow-2xl">
            <div>
              <Image src="/Vision.png" alt="Vision" height={40} width={40} />
            </div>
            <h4 className="text-2xl font-medium">Perspective</h4>
            <p className="">
              Pioneering new solutions and embracing change to build a thriving
              and enduring future.
            </p>
          </div>
        </div>

        {/* <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
         
          <div className="space-y-2">
            <div>
              <Image
                src="/icon_Authentically_Principled.jpg"
                alt="Authentically Principled"
                height={45}
                width={45}
              />
            </div>
            <h3 className="text-3xl">Authentically Principled</h3>
            <h6 className="text-lg opacity-50">We take responsibility</h6>
          </div>
          
          <div className="space-y-2">
            <div>
              <Image
                src="/icon_Pioneering_Growth.jpg"
                alt="Authentically Principled"
                height={45}
                width={45}
              />
            </div>
            <h3 className="text-3xl">Pioneering Growth</h3>
            <h6 className="text-lg opacity-50">We lead the way</h6>
          </div>
         
          <div className="space-y-2">
            <div>
              <Image
                src="/icon_Sustainable_Futures.jpg"
                alt="Authentically Principled"
                height={45}
                width={45}
              />
            </div>
            <h3 className="text-3xl">Sustainable Futures</h3>
            <h6 className="text-lg opacity-50">We enable each other</h6>
          </div>
          
          <div className="space-y-2">
            <div>
              <Image
                src="/icon_Uncompromised_Discipline.jpg"
                alt="Authentically Principled"
                height={45}
                width={45}
              />
            </div>
            <h3 className="text-3xl">Uncompromised Discipline</h3>
            <h6 className="text-lg opacity-50">
              We do the right things, right
            </h6>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default OurValues;
