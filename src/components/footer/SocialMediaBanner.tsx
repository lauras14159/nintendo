import Nintendo from "../svg/Nintendo";

export default function SocialMediaBanner() {
  return (
    <div className="bg-primary flex md:flex-row flex-col md:p-5 py-7 w-full md:justify-between justify-center items-center">
      <a className="md:w-[14%] w-2/5" href="https://www.nintendo.com">
        <Nintendo width={"40"} />
      </a>
      <div className="flex flex-row md:gap-x-14 gap-x-7 md:pt-0 pt-5">
        <a
          href="https://www.facebook.com/NintendoAmerica/"
          target="_blank"
          className="bi bi-facebook text-white"
          style={{ fontSize: 30 }}
        ></a>
        <a
          href="https://www.facebook.com/NintendoAmerica/"
          target="_blank"
          className="bi bi-instagram text-white"
          style={{ fontSize: 30 }}
        ></a>
        <a
          href="https://twitter.com/NintendoAmerica"
          target="_blank"
          className="bi bi-twitter-x text-white"
          style={{ fontSize: 30 }}
        ></a>
        <a
          href="https://www.youtube.com/nintendo"
          target="_blank"
          className="bi bi-youtube text-white"
          style={{ fontSize: 30 }}
        ></a>
      </div>
    </div>
  );
}
