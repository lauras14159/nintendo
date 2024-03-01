"use client";
import { useState } from "react";
import DPadIcon from "../svg/DPadIcon";
import MyNintendoTileIcon from "../svg/MyNintendoTileIcon";
import NewsIcon from "../svg/NewsIcon";
import StarPlayNintendoIcon from "../svg/StarPlayNintendoIcon";
import NavItem from "./menu/NavItem";
import ArrowDown from "../svg/ArrowDown";

export default function NavBar() {
  const [isDropdownActive, setIsDropdownActive] = useState(true);

  return (
    <div className="flex flex-row text-tertiary  border-b border-[#DADADA]">
      <div className="flex flex-row py-4 mx-auto  gap-x-8">
        <NavItem svg={<MyNintendoTileIcon />}>
          <p
            className="group-hover:text-primary items-center flex flex-row w-fit"
            onClick={() => setIsDropdownActive(!isDropdownActive)}
          >
            My Nintendo Store
            <span
              className={` duration-300 ease-in-out ${
                !isDropdownActive ? "-rotate-180 ml-2" : "rotate-0  pl-2"
              }`}
            >
              <ArrowDown />
            </span>
          </p>
        </NavItem>
        <NavItem svg={<DPadIcon size={"18"} />}>
          <p
            className="group-hover:text-primary items-center flex flex-row w-fit"
            onClick={() => setIsDropdownActive(!isDropdownActive)}
          >
            Games
            <span
              className={` duration-300 ease-in-out ${
                !isDropdownActive ? "-rotate-180 ml-2" : "rotate-0  pl-2"
              }`}
            >
              <ArrowDown />
            </span>
          </p>
        </NavItem>
        <NavItem svg={<MyNintendoTileIcon />}>
          <p
            className="group-hover:text-primary items-center flex flex-row w-fit"
            onClick={() => setIsDropdownActive(!isDropdownActive)}
          >
            Nintendo Switch
            <span
              className={` duration-300 ease-in-out ${
                !isDropdownActive ? "-rotate-180 ml-2" : "rotate-0  pl-2"
              }`}
            >
              <ArrowDown />
            </span>
          </p>
        </NavItem>
        <NavItem svg={<NewsIcon />}>
          <p
            className="group-hover:text-primary items-center flex flex-row w-fit"
            onClick={() => setIsDropdownActive(!isDropdownActive)}
          >
            News & Events
          </p>
        </NavItem>
        <NavItem svg={<MyNintendoTileIcon />}>
          <p
            className="group-hover:text-primary items-center flex flex-row w-fit"
            onClick={() => setIsDropdownActive(!isDropdownActive)}
          >
            Play Nintendo
            <span
              className={` duration-300 ease-in-out ${
                !isDropdownActive ? "-rotate-180 ml-2" : "rotate-0  pl-2"
              }`}
            >
              <ArrowDown />
            </span>
          </p>
        </NavItem>
      </div>
    </div>
  );
}
