import Image from "next/image";
import flag from "../svg/FlagUsaIconRegionSelect.webp";
import MyNintendoStoreLogoIcon from "../svg/MyNintendoStoreLogoIcon";
import Nintendo from "../svg/Nintendo";
import Link from "next/link";

export default function MobileBanner() {
  return (
    <div className="bg-primary w-full py-5 lg:hidden text-white ">
      <div className="px-5 flex-row flex justify-between">
        <div className="items-center h-full w-[105px]">
          <Link className="" href="https://www.nintendo.com">
            <Nintendo width={"20"} />
          </Link>
        </div>
        <div className="flex flex-row gap-x-5 items-center">
          <MyNintendoStoreLogoIcon />
          <div>
            <Image
              src={flag}
              alt="us-flag"
              className="rounded-sm border-white border"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
