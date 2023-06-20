"use client";

import { useState, useRef } from "react";
import week3, {
  week1,
  week2,
  week4,
  week5,
  week6,
} from "../../../public/data/computer_essentials";
import styled from "styled-components";
import COLORS from "../../../public/data/colors";
import GenerateBtn from "./GenerateBtn";
import Question from "./Question";
const Cont = styled.div`
  padding: 32px;
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
`;
const ComputerEssentials = () => {
  const [weeks, setWeeks] = useState([
    week1,
    week2,
    week3,
    week4,
    week5,
    week6,
  ]);
  const [week, setWeek] = useState(0);
  const questionRef = useRef(null);
  const [question, setQuestion] = useState(weeks[0][0]);

  const selectRandomQuestion = () => {
    const number = Math.floor(Math.random() * weeks[week].length);
    if (weeks[week][number].question == question.question) {
      selectRandomQuestion();
      return;
    }
    setQuestion(weeks[week][number]);

    questionRef.current.classList.add("opacity-anim");
    setTimeout(() => {
      questionRef.current.classList.remove("opacity-anim");
    }, 500);
  };

  return (
    <Cont colors={COLORS}>
      <h2 className="mar-bottom-8">Computer Essentials Study Quiz</h2>
      <div className="grey-line mar-bottom-32"></div>
      <div className="flex justify-center mar-bottom-32">
        <div onClick={selectRandomQuestion}>
          <GenerateBtn />
        </div>
      </div>
      <div className=" flex-column align-center" ref={questionRef}>
        <Question question={question} />
      </div>
    </Cont>
  );
};

export default ComputerEssentials;
