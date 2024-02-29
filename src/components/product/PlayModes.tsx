import HandheldModeIcon from "../svg/HandheldModeIcon";
import TabletopModeIcon from "../svg/TabletopModeIcon";
import TvModeIcon from "../svg/TvModeIcon";

export default function PlayModes() {
  return (
    <div className="bg-[#f8f8f8] rounded-xl relative flex-col flex md:px-5 py-5 md:w-2/5 w-full">
      <p className="text-tertiary text-base font-semibold text-center">
        Supported play modes
      </p>
      <div className="flex flex-row mx-auto gap-x-5 mt-5 ">
        <div className="bg-tertiary md:px-10 md:py-4 py-4 px-4 md:text-xs rounded-xl shadow-md items-center">
          <TvModeIcon />
        </div>
        <div className="bg-tertiary md:px-10 md:py-4 py-4 px-4 md:text-xs rounded-xl shadow-md items-center">
          <TabletopModeIcon />
        </div>
        <div className="bg-tertiary md:px-10 md:py-4 py-4 px-4 md:text-xs rounded-xl shadow-md items-center">
          <HandheldModeIcon />
        </div>
      </div>
    </div>
  );
}
