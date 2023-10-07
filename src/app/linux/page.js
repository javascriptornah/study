import Render from "./Render";

export const metadata = {
  title: "Algonquin Study",
  description:
    "Learn linux commands, terminology and get hands on experience with this interactive study guide.",
  image: "/images/linux.png",
  link: "https://algonquinstudy.vercel.app/linux",
  tags: ["linux", "learn linux", "linux notes", "linux study notes"],
  date: "2023-10-06 20:00:00.000",
  type: "website",
  openGraph: {
    title: "Algonquin Study",
    description:
      "Study app for algonquin college students in computer programming level 1.",
    url: "https://algonquinstudy.vercel.app",
    images: [
      {
        url: "/images/linux.png",
        width: 600,
        height: 400,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const Linux = () => {
  return (
    <div>
      <Render></Render>
    </div>
  );
};

export default Linux;
