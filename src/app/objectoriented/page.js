import Render from "./Render";

export const metadata = {
  title: "Algonquin Study",
  description: "Learn the specifics on java with this interactive tutorial",
  image: "/images/java.png",
  link: "https://algonquinstudy.vercel.app/objectOriented",
  tags: [
    "java",
    "java programming",
    "learn java",
    "object oriented",
    "object oriented programming",
  ],
  date: "2023-10-07 18:00:00.000",
  type: "website",
  openGraph: {
    title: "Algonquin Study",
    description:
      "Study app for algonquin college students in computer programming level 1.",
    url: "https://algonquinstudy.vercel.app/objectOriented",
    images: [
      {
        url: "/images/java.png",
        width: 600,
        height: 400,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const ObjectOriented = () => {
  return (
    <div>
      <Render></Render>
    </div>
  );
};

export default ObjectOriented;
