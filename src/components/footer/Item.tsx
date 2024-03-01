type FooterItemProps = {
  title: string;
  subtitles: Array<{ subtitle: string; subtitleLink: string }>;
  titleLink: string;
};

export default function FooterItem({
  title,
  subtitles,
  titleLink,
}: FooterItemProps) {
  return (
    <div className="flex flex-col font-bold gap-x-2 w-fit cursor-pointer border-l-2 border-[#efefef]">
      <a
        className="text-tertiary text-lg py-4 hover:underline hover:decoration-secondary hover:decoration-2 underline-offset-4 pl-5"
        href={titleLink}
      >
        {title}
      </a>
      {subtitles.map((data, index) => (
        <a
          className="text-primary hover:text-secondary hover:underline flex flex-col py-1 pl-5"
          href={data.subtitleLink}
          key={index}
        >
          {data.subtitle}
        </a>
      ))}
    </div>
  );
}
