"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../app/globals.css";

// import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

const BusinessHighLights = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="group inline-block">
          <h2 className="inline-block cursor-default text-center text-4xl text-secondary-divine">
            Business Highlights
          </h2>
          <div className="mt-1 h-1 w-[60px] rounded-full bg-primary-divine duration-500 group-hover:w-[200px]"></div>
          <p className="mt-4">
            Divine Group has brought to the market leading projects,
            destinations, and untapped opportunities through key partnerships
            and investments in the region and beyond.
          </p>
          <div className="mx-auto max-w-2xl"></div>
        </div>

        {/* <div className="mx-auto max-w-2xl">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/DESIGN.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/EDUCATION.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/Employment Service.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/HOSPITALITY.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/ICT.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/MANUFACTURING LOGISTICS.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/REAL ESTATE.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/RETAIL 2.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/SCIENCE.jpeg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/SMES & ENTREPRENEURSHIP.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="block w-full"
                src="/business-highlights/TOURISM.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div> */}

        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="items-center gap-x-5 px-5 py-11">
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/DESIGN.jpg"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/EDUCATION.jpg"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/Employment Service.jpg"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/HOSPITALITY.jpg"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/ICT.jpg"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/MANUFACTURING LOGISTICS.png"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/REAL ESTATE.jpg"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/RETAIL 2.jpg"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/SCIENCE.jpeg"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/SMES & ENTREPRENEURSHIP.png"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
              <CarouselItem className="basis-full lg:basis-1/2">
                <Image
                  className="h-auto w-full rounded-2xl border-8 border-primary-divine shadow"
                  src="/business-highlights/TOURISM.jpg"
                  alt="Business Highlights"
                  width={720}
                  height={415}
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BusinessHighLights;
