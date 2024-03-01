import EsrbPrivacyCertified from "../svg/EsrbPrivacyCertified";
import FooterBanner from "./FooterBanner";
import FooterItem from "./Item";
import SocialMediaBanner from "./SocialMediaBanner";

export default function Footer() {
  const footerNav = [
    {
      title: "About Nintendo",
      titleLink: "/about",
      subtitles: [
        { subtitle: "Careers", subtitleLink: "https://careers.nintendo.com/" },
        {
          subtitle: "Corporate Social Responsibility",
          subtitleLink: "/about/csr",
        },
      ],
    },
    {
      title: "Shop",
      titleLink: "/store",
      subtitles: [
        { subtitle: "Games", subtitleLink: "/store/games" },
        { subtitle: "Hardware", subtitleLink: "/store/hardware" },
        { subtitle: "Merchandise", subtitleLink: "/store/merchandise" },
        { subtitle: "Sales & deals", subtitleLink: "/store/sales-and-deas" },
        { subtitle: "Exclusives", subtitleLink: "/store/exclusives" },
        {
          subtitle: "Online service",
          subtitleLink: "switch/online/",
        },
        {
          subtitle: "Nintendo NY store",
          subtitleLink: "https://www.nintendonyc.com/",
        },
      ],
    },
    {
      title: "My Nintendo Store orders",
      titleLink: "/orders",
      subtitles: [
        { subtitle: "Order details", subtitleLink: "/store/games" },
        {
          subtitle: "Shipping info",
          subtitleLink:
            "https://en-americas-support.nintendo.com/app/answers/detail/a_id/15575",
        },
        { subtitle: "Returns & exchanges", subtitleLink: "/returns-exchanges" },
        {
          subtitle: "FAQ",
          subtitleLink:
            "https://en-americas-support.nintendo.com/app/answers/detail/a_id/15578",
        },
      ],
    },
    {
      title: "Support",
      titleLink: "/https://en-americas-support.nintendo.com/app/home",
      subtitles: [
        {
          subtitle: "Nintendo Switch",
          subtitleLink:
            "https://en-americas-support.nintendo.com/app/products/detail/p/989",
        },
        {
          subtitle: "Nintendo Account",
          subtitleLink:
            "https://en-americas-support.nintendo.com/app/products/detail/p/992",
        },
        {
          subtitle: "Other systems",
          subtitleLink:
            "https://en-americas-support.nintendo.com/app/products/detail/p/172",
        },
        {
          subtitle: "Repairs",
          subtitleLink:
            "https://en-americas-support.nintendo.com/app/products/detail/p/995",
        },
        {
          subtitle: "Nintendo product recycling",
          subtitleLink:
            "https://en-americas-support.nintendo.com/app/answers/detail/a_id/10276/",
        },
      ],
    },
    {
      title: "Parents",
      titleLink: "https://play.nintendo.com/parents/",
      subtitles: [
        {
          subtitle: "Info for parents",
          subtitleLink: "https://play.nintendo.com/parents/crash-courses/",
        },
        {
          subtitle: "Parental controls",
          subtitleLink:
            "https://play.nintendo.com/parents/crash-courses/parental-controls",
        },
      ],
    },
    {
      title: "Community",
      titleLink:
        "https://en-americas-support.nintendo.com/app/answers/detail/a_id/43419",
      subtitles: [
        {
          subtitle: "Community guidelines",
          subtitleLink: "/code-of-conduct",
        },
        {
          subtitle: "Online safety principles",
          subtitleLink: "/online-safety-principles/",
        },
      ],
    },
    {
      title: "Privacy",
      titleLink: "/privacy-policy/",
      subtitles: [
        {
          subtitle: "Privacy policy",
          subtitleLink: "/privacy-policy/",
        },
        {
          subtitle: "Cookies and interest-based ads",
          subtitleLink: "/privacy-request/#cookies",
        },
      ],
    },
  ];

  return (
    <>
      <SocialMediaBanner />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-y-10 justify-around mx-auto w-full px-10 py-10 mb-32">
        {footerNav.map((data, index) => (
          <FooterItem
            key={index}
            title={data.title}
            subtitles={data.subtitles}
            titleLink={data.titleLink}
          />
        ))}
      </div>
      {/* <EsrbPrivacyCertified /> */}
      <FooterBanner />
    </>
  );
}
