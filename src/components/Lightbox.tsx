"use client";
import thumbnail from "../../public/productImage.png";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Lightbox() {
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "Insert plan type here");
  }, []);
  return (
    <SlideshowLightbox className=" grid grid-cols-3 gap-2 mx-auto w-1/2 ">
      <Image alt="" className="w-full rounded" src={thumbnail} />
      <Image alt="" className="w-full rounded" src={thumbnail} />
      <Image alt="" className="w-full rounded" src={thumbnail} />
      <Image alt="" className="w-full rounded" src={thumbnail} />
      <Image alt="" className="w-full rounded" src={thumbnail} />
    </SlideshowLightbox>
  );
}
