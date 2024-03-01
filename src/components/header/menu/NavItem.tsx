import Link from "next/link";
import { ReactNode } from "react";

type NavProps = {
  svg: JSX.Element;
  link?: string;
  children: ReactNode;
};

export default function NavItem({ svg, link, children }: NavProps) {
  return (
    <div className="flex flex-row items-center group text-tertiary ">
      <div className="group-hover:text-primary">{svg}</div>
      <Link
        href={link ?? ""}
        className={`text-sm font-bold group-hover:text-primary pl-2 w-fit`}
      >
        {children}
      </Link>
    </div>
  );
}
