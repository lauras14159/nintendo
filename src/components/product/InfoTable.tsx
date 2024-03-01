import Link from "next/link";
import BuildingIcon from "../svg/BuildingIcon";
import CalendarIcon from "../svg/CalendarIcon";
import DPadIcon from "../svg/DPadIcon";
import GearIcon from "../svg/GearIcon";
import GlobeIcon from "../svg/GlobeIcon";
import GroupIcon from "../svg/GroupIcon";
import StorageIcon from "../svg/StorageIcon";
import SwitchLiteIcon from "../svg/SwitchLiteIcon";

type InfoType = {
  date: string;
  players: Array<{ player: string; playerLink: string }>;
  genres: Array<{ genre: string; genreLink: string }>;
  publishers: Array<{ publisher: string; publisherLink: string }>;
  rating: Array<{ rate: string; rateLink: string }>;
  playMode: string;
  size: string;
  languages: string;
};

export default function InfoTable({
  date,
  playMode,
  players,
  genres,
  publishers,
  rating,
  size,
  languages,
}: InfoType) {
  return (
    <div className="flex flex-col w-10/12 text-tertiary mx-auto">
      <div className="flex flex-row border-y py-3 border-[#efefef] md:items-center items-start pl-2 w-full ">
        <CalendarIcon />
        <div className="flex md:grid md:grid-cols-2 flex-col pl-5 md:items-center w-full">
          <p className="text-base md:text-lg font-semibold w-full">
            Release date
          </p>
          <div className="">{date}</div>
        </div>
      </div>

      <div className="flex flex-row border-y py-3 border-[#efefef] md:items-center items-start pl-2 w-full">
        <GroupIcon />
        <div className="flex md:grid md:grid-cols-4 flex-col pl-5 md:items-center w-full">
          <p className="text-base md:text-lg font-semibold md:col-span-2">
            No. of players
          </p>
          <div className="md:col-span-2">
            {players.map((data, index) => (
              <Link
                href={data.playerLink}
                key={index}
                className="text-primary hover:text-secondary underline  underline-offset-4 font-semibold decoration-2 after:pl-4 before:pl-0 "
              >
                {data.player}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row border-y py-3 border-[#efefef] md:items-center items-start pl-2 w-full">
        <DPadIcon />
        <div className="flex md:grid md:grid-cols-4 flex-col pl-5 md:items-center w-full">
          <p className="text-base md:text-lg font-semibold md:col-span-2">
            Genre
          </p>
          <div className="md:col-span-2">
            {genres.map((data, index) => (
              <Link
                href={data.genreLink}
                key={index}
                className="text-primary hover:text-secondary underline  underline-offset-4 font-semibold decoration-2 after:pl-4 before:pl-0"
              >
                {data.genre}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row border-y py-3 border-[#efefef] md:items-center items-start pl-2 w-full">
        <BuildingIcon />
        <div className="flex md:grid md:grid-cols-4 flex-col pl-5 md:items-center w-full">
          <p className="text-base md:text-lg font-semibold md:col-span-2">
            Publisher
          </p>
          <div className="md:col-span-2">
            {publishers.map((data, index) => (
              <Link
                href={data.publisherLink}
                key={index}
                className="text-primary hover:text-secondary underline  underline-offset-4 font-semibold decoration-2 after:pl-4 before:pl-0"
              >
                {data.publisher}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-y py-3 border-[#efefef] flex flex-row md:items-center items-start pl-2 w-full">
        <GearIcon />
        <div className="flex md:grid md:grid-cols-4 flex-col pl-5 md:items-center w-full">
          <p className="text-base md:text-lg font-semibold md:col-span-2">
            ESRB rating
          </p>
          <div className="md:col-span-2">
            {rating.map((data, index) => (
              <Link
                href={data.rateLink}
                key={index}
                className="text-primary hover:text-secondary underline  underline-offset-4 font-semibold decoration-2 after:pl-4 before:pl-0"
              >
                {data.rate}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row border-y py-3 border-[#efefef] md:items-center items-start pl-2 w-full">
        <SwitchLiteIcon />
        <div className="flex md:grid md:grid-cols-2 flex-col pl-5 md:items-center w-full">
          <p className="text-base md:text-lg font-semibold w-full">
            Supported play modes
          </p>
          <div className="">{playMode}</div>
        </div>
      </div>

      <div className="flex flex-row border-y py-3 border-[#efefef] md:items-center items-start pl-2 w-full">
        <StorageIcon />
        <div className="flex md:grid md:grid-cols-2 flex-col pl-5 md:items-center w-full">
          <p className="text-base md:text-lg font-semibold w-full">
            Game file size
          </p>
          <div className="">{size}</div>
        </div>
      </div>

      <div className="flex flex-row border-y py-3 border-[#efefef]  md:items-center items-start pl-2 w-full">
        <GlobeIcon />
        <div className="flex md:grid md:grid-cols-2 flex-col pl-5 md:items-center w-full">
          <p className="text-base md:text-lg font-semibold w-full">
            Supported languages
          </p>
          <div className="">{languages}</div>
        </div>
      </div>
    </div>
  );
}
