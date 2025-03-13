"use client";

import React, { useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogoPositivus } from "@/components/icons/logoPositivus";
import { SocialLinkedin } from "@/components/icons/socialLinkedin";
import { SocialFacebook } from "@/components/icons/socialFacebook";
import { SocialTwitter } from "@/components/icons/socialTwitter";
import { showToast } from "../features/toast";

export const Footer = () => {
  const handleNavigation = useCallback((url: string) => {
    console.log(url);

    showToast({
      message: "Navigation successful",
      variant: "success",
    });
  }, []);

  const menuEntries = useMemo(() => {
    return [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
    ];
  }, []);

  return (
    <div className="wrap mt-14">
      <div className="w-full">
        <div className="bg-dark rounded-t-[2.75rem] text-light px-[3.75rem] pt-[3.75rem] pb-[3.125rem]">
          <div className="flex justify-between flex-wrap">
            <Button
              variant={"link"}
              className="justify-start cursor-pointer w-full lg:w-auto !px-0"
              onClick={() => {
                handleNavigation("/");
              }}
            >
              <LogoPositivus color="#f3f3f3" width={180} height={29} />
            </Button>
            <div className="flex gap-5 md:gap-8 xl:gap-10">
              {menuEntries.map((item, i) => (
                <Button
                  key={`menu-entry-${i}`}
                  variant={"link"}
                  className="m-0 p-0 text-lg underline cursor-pointer font-normal text-light"
                  onClick={() => {
                    handleNavigation(item.href);
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <div className="flex gap-5">
              <Button
                variant={"link"}
                className="m-0 p-0 cursor-pointer"
                onClick={() => {
                  handleNavigation("/external/linkedin");
                }}
              >
                <SocialLinkedin bg="#f3f3f3" color="#191a23" />
              </Button>
              <Button
                variant={"link"}
                className="m-0 p-0 cursor-pointer"
                onClick={() => {
                  handleNavigation("/external/facebook");
                }}
              >
                <SocialFacebook color="#f3f3f3" />
              </Button>
              <Button
                variant={"link"}
                className="m-0 p-0 cursor-pointer"
                onClick={() => {
                  handleNavigation("/external/twitter");
                }}
              >
                <SocialTwitter bg="#f3f3f3" color="#191a23" />
              </Button>
            </div>
          </div>

          <div className="mt-16 flex flex-col lg:flex-row gap-20">
            <div className="shrink text-lg lg:max-w-[33.333%]">
              <div className="w-fit text-xl bg-[#B9FF66] text-dark font-medium px-2 rounded-[7px] mb-7">
                Contact us:
              </div>
              <div className="mb-6">Email: info@positivus.com</div>
              <div className="mb-6">Phone: 555-567-8901</div>
              <div className="mb-6">
                Address: 1234 Main St Moonstone City, Stardust State 12345
              </div>
            </div>
            <div className="grow">
              <div className="bg-[#292A32] h-full rounded-[14px] p-10 flex items-center justify-center xl:justify-between flex-col xl:flex-row">
                <Input
                  type="email"
                  placeholder="Email"
                  className="xl:grow !text-xl font-normal py-5 px-9 h-[68px] rounded-[14px] placeholder:text-xl"
                />
                <Button
                  variant={"default"}
                  className="mt-10 xl:mt-0 xl:ml-10 xl:shrink bg-[#B9FF66] text-dark text-xl font-normal py-5 px-9 h-[68px] cursor-pointer rounded-[14px] w-full xl:w-fit"
                >
                  Subscribe to news
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-[3.125rem] pt-[3.125rem] border-t border-[#f3f3f3] flex items-center">
            <div className="mr-10 text-lg">
              © 2023 Positivus. All Rights Reserved.
            </div>
            <div>
              <Button
                variant={"link"}
                className="m-0 p-0 text-lg underline cursor-pointer font-normal text-light"
                onClick={() => {
                  handleNavigation("/privacy");
                }}
              >
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
