import WarningText from "@/components/WarningText";
import InfoCard from "@/components/product/InfoCard";
import thumbnail from "../../public/productImage.png";
import RatingSection from "@/components/product/RatingSection";
import PlayModes from "@/components/product/PlayModes";
import InfoTable from "@/components/product/InfoTable";
import Lightbox from "@/components/Lightbox";

export default function Home() {
  const infoCardData = [
    {
      title: `You're moving to the valley...`,
      text: `You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!

      Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience.`,
      image: thumbnail,
      link: "",
    },
  ];

  const productInfo = [
    {
      date: "October 5, 2017",
      players: [
        { player: "Single System (1)", playerLink: "" },
        { player: `Local wireless (1)`, playerLink: "" },
        { player: `Online (1-4)`, playerLink: "" },
      ],
      genres: [
        {
          genre: `Role-Playing`,
          genreLink: "",
        },
        {
          genre: `Simulation`,
          genreLink: "",
        },
      ],
      playMode: "TV mode, Tabletop mode, Handheld mode",
      size: "1.5 GB",
      language:
        "English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese",
      publishers: [{ publisher: "ConcernedApe", publisherLink: "" }],
      rating: [{ rate: "Everyone 10+", rateLink: "" }],
    },
  ];

  return (
    <>
      <Lightbox />
      {infoCardData.map((data, index) => (
        <InfoCard
          key={index}
          title={data.title}
          text={data.text}
          image={data.image}
          link={data.link}
        />
      ))}
      <div className="flex md:flex-row flex-col md:px-10 gap-x-5 gap-y-5 md:gap-y-0 mx-auto justify-center pt-10">
        <RatingSection />
        <PlayModes />
      </div>
      <div className="py-10">
        {productInfo.map((data, index) => (
          <InfoTable
            key={index}
            date={data.date}
            players={data.players}
            genres={data.genres}
            publishers={data.publishers}
            rating={data.rating}
            playMode={data.playMode}
            size={data.size}
            languages={data.language}
          />
        ))}
      </div>
      <WarningText />
    </>
  );
}
