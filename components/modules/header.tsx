"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { LogoPositivus } from "@/components/icons/logoPositivus";
import { showToast } from "../features/toast";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = useCallback((url: string) => {
    console.log(url);
    setMobileMenuOpen(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="wrap relative">
      {/* Desktop Header */}
      <div className="hidden md:flex flex-wrap gap-10 items-center">
        <div className="grow">
          <Button
            variant={"logo"}
            onClick={() => {
              handleNavigation("/");
            }}
          >
            <LogoPositivus />
          </Button>
        </div>
        <div
          className="
            flex gap-10
            order-3 w-full
            justify-between lg:justify-end
            xl:order-2 xl:w-auto
          "
        >
          {menuEntries.map((item, i) => (
            <Button
              key={`menu-entry-${i}`}
              variant={"link"}
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
          onClick={() => {
            handleNavigation("/quote");
          }}
        >
          Request a quote
        </Button>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between w-full py-4 px-2">
        <Button
          variant={"logo"}
          onClick={() => {
            handleNavigation("/");
          }}
        >
          <LogoPositivus />
        </Button>

        {/* Hamburger Menu Button */}
        <button
          className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-dark transition-transform duration-300 ${
              mobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-dark transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-dark transition-transform duration-300 ${
              mobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          absolute right-14 top-24 z-50 bg-light border border-dark shadow-lg rounded-lg py-6 px-6 md:hidden w-64
          transition-all duration-300 ease-in-out
          cursor-pointer
          ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="flex flex-col space-y-6 justify-start items-start gap-4">
          {menuEntries.map((item, i) => (
            <Button
              key={`mobile-menu-entry-${i}`}
              variant={"link"}
              className=""
              onClick={() => {
                handleNavigation(item.href);
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant={"outline"}
            className="bg-white w-full hover:bg-light-hover"
            onClick={() => {
              handleNavigation("/quote");
            }}
          >
            Request a quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
