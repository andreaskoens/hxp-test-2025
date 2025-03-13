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
  const handleNavigation = useCallback(() => {
    showToast({
      message: "Navigation successful",
      variant: "success",
    });
  }, []);

  return (
    <>
      {/* header ---------- */}
      <div className="wrap flex lg:justify-between lg:items-center space-x-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 max-w-[550px]">
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
            className="mt-9 bg-dark text-light text-xl font-normal py-5 px-9 h-auto cursor-pointer rounded-[14px]"
            onClick={handleNavigation}
          >
            Book a consultation
          </Button>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-20">
          {services.cards.map((card, i) => (
            <div
              key={`services-${i}`}
              className={`flex serviceCard ${card.color} items-center justify-between min-h-[300]`}
            >
              <div className="flex flex-col h-full w-full justify-between">
                <h3>
                  <span>{card.title}</span>
                </h3>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={card.imageWidth}
                  height={card.imageHeight}
                  className="flex-col block sm:hidden lg:block xl:hidden h-auto w-2/3 mt-5 self-end"
                />
                <Link href={card.url} onClick={handleNavigation}>
                  <DiagonalArrow />
                  Learn more
                </Link>
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
      <div className="wrap mt-14 mb-14">
        <div className="makeHappen bg-light text-dark max-h-[350px] rounded-[2.75rem] flex">
          <div className="flex flex-col justify-between w-1/2 grow p-14">
            <h3 className="text-h3 text-medium "> Let’s make things happen</h3>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>

            <Button
              variant={"default"}
              className="bg-dark text-light text-xl font-normal py-5 px-9 h-auto cursor-pointer rounded-[14px] w-fit"
              onClick={handleNavigation}
            >
              Get your free proposal
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2">
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
        <div className="studies flex items-start justify-center w-full mt-18 py-16 bg-dark">
          {caseStudies.cards.map((card, i) => (
            <div
              key={`studies-${i}`}
              className="card text-light text-[18px] px-16"
            >
              <p>{card.text}</p>

              <Link
                href={card.url}
                className="block text-brand text-xl mt-5"
                onClick={handleNavigation}
              >
                Learn more{" "}
                <DiagonalArrow color="#b9ff66" classes="ml-2 h-[16] w-auto" />
              </Link>
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
        <div className="w-full pt-20">
          <AccordionCards items={workingProcess.cards} />
        </div>
      </div>
      {/* team ---------- */}
      <div className="wrap mt-18">
        <SectionTitle title={team.title} subtitle={team.subtitle} />
        <div className="team grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center w-full pt-20">
          {team.cards.map((card, i) => (
            <div key={`team-${i}`} className="teamCard relative">
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
              <p className="about">{card.about}</p>
            </div>
          ))}
        </div>
        <div className="text-right">
          <Button
            variant={"default"}
            className="bg-dark text-light text-xl font-normal py-5 px-9 h-auto cursor-pointer rounded-[14px] w-fit mt-10"
            onClick={handleNavigation}
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
