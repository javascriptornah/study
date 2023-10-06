"use client";
import styles from "./page.module.css";
import Image from "next/image";
import styled from "styled-components";
import COLORS from "../../public/data/colors";
import CourseLink from "../../public/components/CourseLink";

const Cont = styled.div`
  .hero {
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    & > div {
      height: 400px;
      padding: 16px;
    }
    .relative {
      width: 100%;
      overflow: hidden;
      border-radius: 16px;
    }
  }

  .link-section {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .disclaimer {
    max-width: 1000px;
    margin: 0 auto;
    padding: 32px;
  }

  @media only screen and (min-width: 1200px) {
    .hero,
    .link-section {
      max-width: 1000px;
    }
  }

  @media only screen and (max-width: 700px) {
    .hero {
      flex-direction: column;
      .text-section {
        height: auto;
        margin-bottom: 32px;
      }
    }
  }
`;

export default function Home() {
  return (
    <Cont colors={COLORS}>
      <div className="hero padding-32">
        <div className="text-section">
          <h1 className="green-2 mar-bottom-16">Welcome to Algonquin Study</h1>
          <h3>
            This is the <span className="dark-grey">unofficial</span> study
            guide for level 2 Computer Programming students
          </h3>
        </div>
        <div className="relative">
          <Image
            src="/images/study.jpg"
            style={{ objectFit: "cover" }}
            fill
          ></Image>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="link-section">
        <h2 className="green-2 mar-bottom-32">
          We have study notes for all your midterms
        </h2>
        <div className="links">
          <CourseLink
            link="/objectoriented"
            text="Object Oriented Programming (OOP)"
          />
          <CourseLink link="/linux" text="Operating Systems (Linux)" />
          <CourseLink link="/webprogramming" text="Web Programming" />
          <CourseLink link="database" text="Database" />
        </div>
      </div>
      <div className="disclaimer">
        <h2 className="green-2 mar-bottom-32">Disclaimer</h2>

        <h4 className="mar-bottom-16">
          All course content is not provided. There will be info provided in the
          course that I have decided not to include. This is content I didn't
          include because of it's ease.
        </h4>

        <h4 className="mar-bottom-16">
          You may need to learn this information on your own, so I always
          recommend reviewing your study notes on your own before you use this
          guide!
        </h4>

        <h4 className="mar-bottom-16">
          This information is all provided for free and provides no cheating of
          any kind. It simply organizes your study notes for you to make it more
          enjoyable and interactive with the goals of improving your midterm
          marks.
        </h4>

        <h4 className="mar-bottom-16">
          Lastly, I don’t think this is the best way to study. This guide is
          only intended to help you memorize “useful” facts for your midterm.
          Although, I try to include as many practical examples as possible as
          well.
        </h4>
      </div>
    </Cont>
  );
}
