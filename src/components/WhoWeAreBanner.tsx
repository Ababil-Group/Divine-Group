import Image from "next/image";

const WhoWeAreBanner = () => {
  return (
    <section className="relative min-h-[530px] w-full">
      <Image
        className="object-cover object-center"
        src="/who-we-are-banner.jpg"
        alt="Divine Group"
        fill
      />
    </section>
  );
};

export default WhoWeAreBanner;
