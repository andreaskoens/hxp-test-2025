"use client";

import React from "react";

type SectionTitleProps = {
  title: string;
  subtitle: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div
      className={
        "flex flex-col md:flex-row justify-start items-start xl:items-center whitespace-nowrap max-w-full lg:max-w-5/6 xl:max-w-2/3"
      }
    >
      <h2 className="rounded-[7px] bg-brand leading-10 font-medium text-[40px] py-1 px-2 mb-5 md:mb-0 md:mr-10">
        {title}
      </h2>
      <p className="text-[18px] font-normal leading-6 text-balance">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
