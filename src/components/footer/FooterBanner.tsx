import Image from "next/image";
import flag from "../svg/FlagUsaIconRegionSelect.webp";

export default function FooterBanner() {
  return (
    <div className="bg-[#242424] w-full text-white md:text-xs text-[10px] flex lg:flex-row flex-col items-center px-5 lg:text-left text-center lg:h-24 h-80 lg:pt-0 pt-10">
      <div className="lg:max-w-2xl md:max-w-sm md:flex hidden">
        © Nintendo. Games are property of their respective owners. Nintendo of
        America Inc. Headquarters are in Redmond, Washington, USA
      </div>
      <div className="lg:max-w-2xl md:max-w-sm flex md:hidden whitespace-break-spaces">
        © Nintendo.{`\n`} Games are property of their respective owners.{`\n`}
        Nintendo of America Inc.Headquarters are in Redmond, Washington, USA
      </div>
      <div className="flex flex-row gap-x-3 font-bold lg:py-0 py-10">
        <a href="/contact">Contact us</a>
        <a href="https://nintendoofamerica.co1.qualtrics.com/jfe/form/SV_dp1F1wielOUu20t">
          Website feedback
        </a>
        <a href="/terms-of-use">Terms of Use</a>
        <a href="https://en-americas-support.nintendo.com/app/legal/a_id/48057/">
          Documents & Policies
        </a>
      </div>
      <a className="flex flex-row items-center lg:pl-10 text-sm">
        <div>
          <Image
            src={flag}
            alt="us-flag"
            className="rounded-sm border-white border"
          />
        </div>
        <p className="pl-2 font-bold">English (United States)</p>
      </a>
    </div>
  );
}
