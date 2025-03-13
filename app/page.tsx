"use client";

import {
  caseStudies,
  partners,
  services,
  team,
  testimonials,
  workingProcess,
} from "@/app/data";
import AccordionCards from "@/components/features/accordionCards";
import CarouselTestimonials from "@/components/features/carouselTestimonials";
import SectionTitle from "@/components/features/sectionTitle";
import { showToast } from "@/components/features/toast";
import { DiagonalArrow } from "@/components/icons/diagonalArrow";
import { LogoLinkedin } from "@/components/icons/logoLinkedin";
import ContactForm from "@/components/modules/contactForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

export default function Home() {
  const handleNavigation = useCallback((url: string) => {
    console.log(url);

    showToast({
      message: "Navigation successful",
      variant: "success",
    });
  }, []);

  return (
    <>
      {/* header ---------- */}
      <div className="wrap relative flex lg:justify-between lg:items-center space-x-4 flex-col lg:flex-row">
        <div className="relative w-full md:w-2/3 lg:w-1/2 max-w-[550px] z-1">
          <h1 className="text-h1 font-medium">
            Navigating the digital landscape for success
          </h1>
          <p className="mt-9">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button
            variant={"default"}
            className="mt-9"
            onClick={() => {
              handleNavigation("/");
            }}
          >
            Book a consultation
          </Button>
        </div>
        <div className="hidden md:block lg:hidden absolute top-[50%] left-[65%] translate-y-[-50%] scale-x-[-1] z-0 w-[50vw] h-[90%]">
          <div className="relative w-full h-full">
            <Image
              src="/fig-header.png"
              alt="Image"
              layout="fill"
              objectFit="contain"
              className="max-w-none"
            />
          </div>
        </div>
        <div className="hidden lg:block w-1/2">
          <Image src="/fig-header.png" alt="Image" width={600} height={515} />
        </div>
      </div>
      {/* partners ---------- */}
      <div className="wrap w-full pt-16 px-24 mb-14">
        <div className="w-full flex flex-wrap justify-between ">
          {partners.map((partner, i) => (
            <div key={`partner-${i}`} className="w-1/2 sm:w-1/3 lg:w-auto">
              <Image
                src={partner.image}
                alt={partner.title}
                width={partner.imageWidth}
                height={partner.imageHeight}
                className="grayscale mx-auto my-5 xl:my-0 xl:mx-0"
              />
            </div>
          ))}
        </div>
      </div>
      {/* services ---------- */}
      <div className="wrap">
        <SectionTitle
          title="Services"
          subtitle="At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-20 pb-2">
          {services.cards.map((card, i) => (
            <div
              key={`services-${i}`}
              className={`
                    flex p-12 min-h-[300px] rounded-[2.75rem] border border-dark shadow-[0_5px_0_0_#191A23]
                    items-center justify-between
                    ${card.color === "light" ? "bg-light" : ""}
                    ${card.color === "dark" ? "bg-dark" : ""}
                    ${card.color === "green" ? "bg-brand" : ""}
                  `}
            >
              <div className="flex flex-col h-full w-full justify-between">
                <h3>
                  <span
                    className={`
                          inline font-medium text-[30px] leading-tight rounded-md py-0 px-2
                          box-decoration-clone
                          ${
                            card.color === "light"
                              ? "bg-brand text-dark shadow-[0.1em_0_0_#B9FF66,-0.1em_0_0_#B9FF66]"
                              : "bg-light text-dark shadow-[0.1em_0_0_#F3F3F3,-0.1em_0_0_#F3F3F3]"
                          }
                        `}
                  >
                    {card.title}
                  </span>
                </h3>

                <Image
                  src={card.image}
                  alt={card.title}
                  width={card.imageWidth}
                  height={card.imageHeight}
                  className="flex-col block sm:hidden lg:block xl:hidden h-auto w-2/3 mt-5 self-end"
                />

                <Button
                  variant={"link"}
                  onClick={() => {
                    handleNavigation("/");
                  }}
                  className={`
                    group flex items-center justify-start text-xl
                    ${card.color === "light" ? "text-dark" : ""}
                    ${card.color === "dark" ? "text-light" : ""}
                    ${card.color === "green" ? "text-dark" : ""}
                  `}
                >
                  <i
                    className={`
                    h-10 w-10 mr-2 rounded-full flex justify-around items-center transition-all duration-100 ease-in-out group-hover:rotate-[30deg]
                    ${card.color === "light" ? "bg-dark" : ""}
                    ${card.color === "dark" ? "bg-light" : ""}
                    ${card.color === "green" ? "bg-dark" : ""}
                  `}
                  >
                    <DiagonalArrow
                      color={
                        card.color === "light"
                          ? "#B9FF66"
                          : card.color === "dark"
                            ? "#191A23"
                            : "#B9FF66"
                      }
                    />
                  </i>
                  Learn more
                </Button>
              </div>

              <div className="flex-col hidden sm:flex lg:hidden xl:flex">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={card.imageWidth}
                  height={card.imageHeight}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* cta-banner ---------- */}
      <div className="wrap mt-14 mb-14 !overflow-visible">
        <div className="makeHappen bg-light text-dark h-auto lg:h-[350px] max-h-none lg:max-h-[350px] rounded-[2.75rem] flex">
          <div className="flex flex-col gap-5 lg:gap-0 lg:justify-between lg:w-3/4 xl:w-1/2 grow p-14">
            <h3 className="text-h3 text-medium "> Let’s make things happen</h3>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>

            <Image
              src="/fig-happen.png"
              alt="Image"
              width={359}
              height={394}
              className="w-1/2 self-end -m-8 mr-10 lg:hidden pointer-events-none z-1"
            />

            <Button
              variant={"default"}
              className="w-fit"
              onClick={() => {
                handleNavigation("/");
              }}
            >
              Get your free proposal
            </Button>
          </div>
          <div className=" flex-col items-center justify-center w-1/2 hidden lg:flex">
            <Image src="/fig-happen.png" alt="Image" width={359} height={394} />
          </div>
        </div>
      </div>
      {/* studies ---------- */}
      <div className="wrap">
        <SectionTitle
          title={caseStudies.title}
          subtitle={caseStudies.subtitle}
        />
        <div className="studies flex flex-col lg:flex-row items-start justify-center w-full mt-18 py-16 bg-dark rounded-[2.75rem] px-16">
          {caseStudies.cards.map((card, i) => (
            <div
              key={`studies-${i}`}
              className={`card text-light text-[18px] ${
                i > 0
                  ? `
                    border-light
                    border-t border-l-0
                    lg:border-t-0 lg:border-l
                    pt-10 lg:pt-0
                    mt-10 lg:mt-0
                    lg:pl-10 lg:ml-10
                  `
                  : ""
              }`}
            >
              <p className="mb-5">{card.text}</p>
              <Button
                variant="link"
                className="block text-brand text-xl group"
                onClick={() => {
                  handleNavigation("/");
                }}
              >
                Learn more
                <DiagonalArrow
                  color="#b9ff66"
                  classes="ml-2 inline-block transition-transform duration-300 group-hover:rotate-[30deg]"
                />
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* process ---------- */}
      <div className="wrap mt-18">
        <SectionTitle
          title={workingProcess.title}
          subtitle={workingProcess.subtitle}
        />
        <div className="w-full pt-20 pb-2">
          <AccordionCards items={workingProcess.cards} />
        </div>
      </div>
      {/* team ---------- */}
      <div className="wrap mt-18">
        <SectionTitle title={team.title} subtitle={team.subtitle} />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center w-full pt-20">
          {team.cards.map((card, i) => (
            <div
              key={`team-${i}`}
              className="relative p-12 rounded-[2.75rem] border border-dark shadow-[0_5px_0_0_var(--color-dark)]"
            >
              <Link
                href={card.link}
                target="_blank"
                className="absolute right-12 top-12"
              >
                <LogoLinkedin color="#b9ff66" />
              </Link>
              <div className="flex flex-row items-end">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={106}
                  height={103}
                  className="mr-7 shrink-0"
                />
                <div>
                  <div className="text-xl font-medium">{card.name}</div>
                  <div>{card.role}</div>
                </div>
              </div>
              <p className="mt-7 pt-7 border-t border-dark text-[1.125rem]">
                {card.about}
              </p>
            </div>
          ))}
        </div>
        <div className="text-right">
          <Button
            variant={"default"}
            className="w-fit mt-10"
            onClick={() => {
              handleNavigation("/");
            }}
          >
            See all team
          </Button>
        </div>
      </div>
      {/* testimonials ---------- */}
      <div className="wrap mt-8">
        <SectionTitle
          title={testimonials.title}
          subtitle={testimonials.subtitle}
        />
        <div className="testimonials pt-20">
          <CarouselTestimonials items={testimonials.cards} />
        </div>
      </div>
      {/* contact ---------- */}
      <div className="wrap mt-14">
        <SectionTitle
          title="Contact Us"
          subtitle="Connect with Us: Let`s Discuss Your Digital Marketing Needs"
        />
        <div className="contactForm pt-20">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
