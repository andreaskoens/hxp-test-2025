"use client";

import React, { useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { LogoPositivus } from "@/components/icons/logoPositivus";
import { showToast } from "../features/toast";

export const Header = () => {
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
    <div className="wrap flex-wrap flex gap-10 items-center">
      <Button
        variant={"link"}
        className="grow justify-start cursor-pointer order-1"
        onClick={() => {
          handleNavigation("/");
        }}
      >
        <LogoPositivus />
      </Button>
      <div
        className="
          flex gap-10 justify-end
          order-3 w-full
          xl:order-2 xl:w-auto
        "
      >
        {menuEntries.map((item, i) => (
          <Button
            key={`menu-entry-${i}`}
            variant={"link"}
            className="m-0 p-0 text-xl font-normal cursor-pointer"
            onClick={() => {
              handleNavigation(item.href);
            }}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <Button
        variant={"outline"}
        className="border-dark text-xl font-normal py-5 px-9 h-auto cursor-pointer rounded-[14px] order-2 xl:order-3"
        onClick={() => {
          handleNavigation("/quote");
        }}
      >
        Request a quote
      </Button>
    </div>
  );
};

export default Header;
