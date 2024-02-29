import CartIcon from "../svg/CartIcon";
import HeartIcon from "../svg/HeartIcon";
import Nintendo from "../svg/Nintendo";
import QuestionMarkIcon from "../svg/QuestionMarkIcon";
import UserIcon from "../svg/UserIcon";
import HeaderItem from "./menu/Item";
import flag from "../svg/FlagUsaIconRegionSelect.webp";
import SearchToggle from "../searchbar/SearchToggle";
import Image from "next/image";

export default function TopNavBar() {
  const menu = [
    { svg: <QuestionMarkIcon />, title: "Support" },
    { svg: <HeartIcon />, title: "Wish List" },
    { svg: <CartIcon />, title: "Cart" },
    { svg: <UserIcon />, title: "Log in / Sign up" },
  ];
  return (
    <div className="justify-between lg:flex hidden flex-row border-b border-[#DADADA]">
      <div className="flex flex-row items-center ">
        <a
          href="https://www.nintendo.com/us"
          className="bg-primary p-[18px] items-center h-full w-[105px]"
        >
          <Nintendo width="16" />
        </a>
        <SearchToggle />
      </div>

      <nav className="flex flex-row gap-x-5 items-center pr-10">
        {menu.map((data, index) => (
          <HeaderItem svg={data.svg} pathname={data.title} key={index} />
        ))}
        <div>
          <Image src={flag} alt="us-flag" className="rounded-sm" />
        </div>
      </nav>
    </div>
  );
}
