"use client";

export const metadata = {
  title: "Algonquin Study",
  description:
    "Learn linux through a series a questions. This is a great way to really practice and remember linux concepts.",
  image: "/images/main.png",
  link: "https://algonquinstudy.vercel.app",
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
        url: "/images/main.png",
        width: 800,
        height: 400,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

import { useState, useRef, useEffect } from "react";
import { week1, week2, week3 } from "../../../public/data/linux.js";
import styled from "styled-components";
import COLORS from "../../../public/data/colors";
import GenerateBtn from "../computerEssentials/GenerateBtn";
import Question from "../computerEssentials/Question";
import ExamQuestions from "../../../public/components/AllQuestions/ExamQuestions.js";
const Cont = styled.div`
  padding: 32px;
  max-width: 1000px;
  margin: 0 auto;
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .opacity-anim {
    animation: opacity 0.5s ease;
  }

  .week {
    padding: 4px 8px;
    border: 1px solid ${(props) => props.colors.green1};
    cursor: pointer;
  }
  .week-active {
    p {
      font-weight: 700;
      color: ${(props) => props.colors.green4};
    }
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: 2px solid ${(props) => props.colors.green4};
  }
`;
const Render = () => {
  const [weeks, setWeeks] = useState([week1, week2, week3]);
  const [week, setWeek] = useState(0);
  const questionRef = useRef(null);
  const [question, setQuestion] = useState(weeks[0][0]);
  const [show, setShow] = useState(false);
  const selectRandomQuestion = () => {
    setShow(false);
    const number = Math.floor(Math.random() * weeks[week].length);
    if (weeks[week][number].question == question.question) {
      selectRandomQuestion();
      return;
    }
    setQuestion(weeks[week][number]);
    console.log("kkk");
    console.log(questionRef);
    try {
      if (questionRef != null) {
        questionRef?.current?.classList?.add("opacity-anim");
        setTimeout(() => {
          questionRef?.current?.classList?.remove("opacity-anim");
        }, 500);
      }
    } catch (e) {}
  };

  const [weekBtns, setWeekBtns] = useState(() => {
    let weekObj = [];
    for (let i = 0; i < 3; i++) {
      weekObj.push(
        <div
          onClick={() => setWeek(i)}
          className={i == week ? "week week-active" : "week"}
        >
          <p>Week {i + 1}</p>
        </div>
      );
    }
    return weekObj;
  });

  useEffect(() => {
    setWeekBtns((prev) => {
      let weekObj = [];
      for (let i = 0; i < 3; i++) {
        weekObj.push(
          <div
            onClick={() => setWeek(i)}
            className={i == week ? "week week-active" : "week"}
          >
            <p>Week {i + 1}</p>
          </div>
        );
      }
      return weekObj;
    });
    selectRandomQuestion();
  }, [week]);
  return (
    <Cont colors={COLORS}>
      <h2 className="mar-bottom-8">Linux Study Quiz</h2>
      <div className="grey-line mar-bottom-16"></div>
      <div className="flex mar-bottom-32 flex-wrap">{weekBtns}</div>
      <div className="flex justify-center mar-bottom-32">
        <div onClick={selectRandomQuestion}>
          <GenerateBtn />
        </div>
      </div>
      <div className=" flex-column align-center" ref={questionRef}>
        <Question question={question} show={show} setShow={setShow} />
      </div>
      <div className="mar-bottom-32"></div>
      <ExamQuestions />
    </Cont>
  );
};

export default Render;
