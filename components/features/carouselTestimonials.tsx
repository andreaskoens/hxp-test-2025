"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type CarouselTestimonialProps = {
  text: string;
  name: string;
  role: string;
};

const CarouselTestimonial: React.FC<CarouselTestimonialProps> = ({
  text,
  name,
  role,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative flex-grow rounded-[2.75rem] border border-lime-400 p-12 text-light mb-6">
        <p className="text-lg">{text}</p>
        <div
          className="
            absolute -bottom-[30.5px] left-12
            w-0 h-0
            border-l-[32px] border-l-transparent
            border-t-[30px] border-t-brand
            border-r-[32px] border-r-transparent
          "
        />
        <div
          className="
            absolute -bottom-[29px] left-12
            w-0 h-0
            border-l-[32px] border-l-transparent
            border-t-[30px] border-t-dark
            border-r-[32px] border-r-transparent
          "
        />
      </div>
      <div className="px-20 pt-6 leading-0">
        <p className="font-medium text-brand text-lg">{name}</p>
        <p className="text-light text-lg">{role}</p>
      </div>
    </div>
  );
};

type CarouselTestimonialsProps = {
  items: Array<{
    text: string;
    name: string;
    role: string;
  }>;
};

const CarouselTestimonials: React.FC<CarouselTestimonialsProps> = ({
  items,
}) => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full bg-dark py-20 rounded-[2.75rem]">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              className="basis-3/4 md:basis-5/6 lg:basis-1/2 px-5"
              key={`CarouselItem-${index}`}
            >
              <CarouselTestimonial
                text={item.text}
                name={item.name}
                role={item.role}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-between gap-6 mt-28 w-1/2 mx-auto">
          <button
            onClick={() => api?.scrollPrev()}
            className="flex items-center justify-center text-light cursor-pointer opacity-40 hover:opacity-100"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="flex gap-4">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="cursor-pointer"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                    fill={current === i ? "#b9ff66" : "#f3f3f3"}
                  />
                </svg>
              </button>
            ))}
          </div>

          <button
            onClick={() => api?.scrollNext()}
            className="flex items-center justify-center text-light cursor-pointer opacity-40 hover:opacity-100"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselTestimonials;
