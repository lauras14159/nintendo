"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MinusIcon from "../svg/MinusIcon";
import PlusIcon from "../svg/PlusIcon";

type InfoCardProps = {
  title: string;
  text: string;
  image: any;
  link: string;
  amountOfWords?: number;
};
export default function InfoCard({
  text,
  title,
  image,
  link,
  amountOfWords = 123,
}: InfoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const splittedText = text.split(" ");
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;
  const endText = splittedText.slice(amountOfWords - 1).join(" ");

  const handleKeyboard = (e: any) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <div className="flex md:flex-row flex-col text-tertiary justify-center md:gap-x-10 md:px-0 mx-5 py-10">
      <div className="lg:max-w-xl max-w-xs flex-flex-col">
        <p className="text-xl font-semibold">{title}</p>
        <div className="md:text-base text-sm pt-5 font-light whitespace-pre-line">
          {beginText}
          {itCanOverflow && (
            <div className="flex flex-col">
              {!isExpanded && <span>... </span>}
              <span
                className={`${!isExpanded && "hidden"}`}
                aria-hidden={!isExpanded}
              >
                {endText}
              </span>
              <div
                className="text-primary font-bold hover:text-secondary py-3 w-fit"
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onKeyDown={handleKeyboard}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <div className="items-center flex flex-row">
                    <span>
                      <MinusIcon />
                    </span>
                    <span className="pl-2">Read less</span>
                  </div>
                ) : (
                  <div className="items-center flex flex-row">
                    <PlusIcon />

                    <span className="pl-2">Read more</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="pt-3">
          <p className="text-xs">
            Software description provided by the publisher.
          </p>
          <div className="pt-7">
            <Link
              href={link}
              className="bg-primary hover:bg-secondary w-full p-3 text-white font-bold md:text-lg text-sm rounded-xl"
            >
              Explore this game's official website
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:w-2/5 w-full md:pt-0 pt-10 md:h-1/2">
        <Image
          src={image}
          alt="product_thumb"
          className="rounded-xl w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
