const Hero = () => {
  return (
    <section className="h-[95vh] w-full">
      <video
        className="h-full w-full object-cover"
        src="/video/hero-video.mp4"
        autoPlay
        loop
        muted
      />
    </section>
  );
};

export default Hero;
