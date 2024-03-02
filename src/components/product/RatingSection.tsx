import EsrbIcon from "../svg/EsrbIcon";

export default function RatingSection() {
  return (
    <div className="bg-[#f8f8f8] rounded-xl relative flex-col flex md:px-5 py-8 lg:w-2/5 md:w-1/2 w-full ">
      <p className="text-tertiary text-base font-semibold text-center">
        ESRB rating
      </p>
      <div className="bg-white px-7 py-4 mt-5 md:text-xs text-[10px] rounded-xl shadow-md flex flex-row mx-auto gap-x-3 items-center ">
        <EsrbIcon />
        <div className="md:max-w-xs max-w-[12rem]">
          <div className="flex flex-row w-fit">
            <p className="pt-1">
              Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
              Gambling, Mild Language, Mild Blood
            </p>
          </div>
          <div className="border-b border-black p-1" />
          <p>Users Interact</p>
        </div>
      </div>
    </div>
  );
}
