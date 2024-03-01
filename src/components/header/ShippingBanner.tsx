import Link from "next/link";
import ShippingTruckIcon from "../svg/ShippingIcon";
import CoinsIcon from "../svg/CoinsIcon";

export default function ShippingBanner() {
  return (
    <div className="flex-row text-tertiary  bg-[#f8f8f8] lg:flex hidden">
      <div className="flex flex-row py-4 justify-center w-full">
        <div className="flex flex-row items-center">
          <ShippingTruckIcon />
          <div className="pl-3 flex flex-row items-center">
            <p>
              <span className="font-bold">Free shipping</span> on orders $50 or
              more.
            </p>
            <Link href={""} className="text-sm underline pl-1">
              Restrictions apply.{" "}
            </Link>
          </div>
          <span className="px-5 ">|</span>
        </div>
        <div className="flex flex-row items-center">
          <CoinsIcon />
          <div className="pl-3">
            <p>
              <span>Earn</span>
              <Link href={""} className="font-bold underline pl-1">
                My Nintendo Points
              </Link>
              <span className="pl-1">on digital games</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
