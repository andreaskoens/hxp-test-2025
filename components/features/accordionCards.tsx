"use client";
import { useState } from "react";

type AccordionCardProps = {
  id: number;
  title: string;
  text: string;
};

const AccordionCard: React.FC<AccordionCardProps> = ({ id, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`p-10 rounded-[2.75rem] border border-dark shadow-[0_5px_0_0_#191A23] text-lg cursor-pointer transition-all duration-150
        ${isOpen ? "bg-brand hover:bg-brand" : "bg-light hover:bg-light-hover"}
        ${id !== 1 ? "mt-7" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`flex flex-row w-full gap-6 items-center transition-all duration-150 pb-0 ${isOpen ? "pb-10" : ""}`}
      >
        <div className="text-6xl font-medium">{id}</div>
        <div className="text-h3 grow">{title}</div>
        <div className="border border-dark h-[58px] w-[58px] flex justify-center items-center rounded-full bg-light">
          {isOpen ? (
            <svg
              width="18"
              height="7"
              viewBox="0 0 18 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6.14V0.5H17.76V6.14H0Z" fill="#191A23" />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z"
                fill="#191A23"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`w-full overflow-hidden transition-all duration-150
          ${
            isOpen
              ? "border-t border-dark h-auto pt-7"
              : "h-0 border-t border-transparent"
          }`}
      >
        {text}
      </div>
    </div>
  );
};

type AccordionCardsProps = {
  items: Array<{
    title: string;
    text: string;
  }>;
};

const AccordionCards: React.FC<AccordionCardsProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <AccordionCard
          key={`AccordionItem-${index}`}
          id={index + 1}
          title={item.title}
          text={item.text}
        />
      ))}
    </>
  );
};

export default AccordionCards;
