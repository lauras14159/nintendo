"use client";
import { useState } from "react";
import SubCategoryItem from "../header/menu/SubCategoryItem";

export default function CategoryDrop() {
  const [isDropdownActive, setIsDropdownActive] = useState(true),
    toggle = () => {
      setIsDropdownActive(!isDropdownActive);
    };

  return (
    <div className="group w-full">
      <span
        className="text-tertiary font-bold text-sm group-hover:text-primary"
        onClick={toggle}
      >
        All categories
        <i
          className={`bi bi-chevron-down text-tertiary group-hover:text-primary duration-300 t pl-2  ${
            !isDropdownActive
              ? "rotate-90 transform-gpu ease-linear transition-all"
              : "rotate-0"
          }`}
        />
      </span>

      {!isDropdownActive ? (
        <div
          className={`absolute z-30 flex-col text-left text-[13px] font-thin mt-2 shadow-lg rounded-full`}
        >
          <ul className="w-32 list-none rounded-md bg-white py-1">
            <SubCategoryItem pathname={"All categories"} />
            <SubCategoryItem pathname={"Games"} />
            <SubCategoryItem pathname={"Hardware"} />
            <SubCategoryItem pathname={"Marchandise"} />
            <SubCategoryItem pathname={"News & Events"} />
            <SubCategoryItem pathname={"Support"} />
          </ul>
        </div>
      ) : null}
    </div>
  );
}
