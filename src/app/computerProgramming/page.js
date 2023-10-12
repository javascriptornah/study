"use client";

import { useState, useRef, useEffect } from "react";
import week1, {
  week2,
  week3,
  week4,
  week5,
  week9,
  week10,
  week11,
} from "../../../public/data/database";
import styled from "styled-components";
import COLORS from "../../../public/data/colors";
import GenerateBtn from "../computerEssentials/GenerateBtn";
import Question from "../computerEssentials/Question";
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
const ComputerEssentials = () => {
  const [weeks, setWeeks] = useState([
    week1,
    week2,
    week3,
    week4,
    week5,
    week9,
    week10,
    week11,
  ]);
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
    for (let i = 0; i < 8; i++) {
      let skipWeek = i;
      if (i >= 5) {
        skipWeek += 3;
      }
      weekObj.push(
        <div
          onClick={() => setWeek(i)}
          className={i == week ? "week week-active" : "week"}
        >
          <p>Week {skipWeek + 1}</p>
        </div>
      );
    }
    return weekObj;
  });

  useEffect(() => {
    setWeekBtns((prev) => {
      let weekObj = [];
      for (let i = 0; i < weeks.length; i++) {
        let skipWeek = i;
        if (i >= 5) {
          skipWeek += 3;
        }
        weekObj.push(
          <div
            onClick={() => setWeek(i)}
            className={i == week ? "week week-active" : "week"}
          >
            <p>Week {skipWeek + 1}</p>
          </div>
        );
      }
      return weekObj;
    });
    selectRandomQuestion();
  }, [week]);
  return (
    <Cont colors={COLORS}>
      <h2 className="mar-bottom-8">Database Study Quiz</h2>
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
    </Cont>
  );
};

export default ComputerEssentials;
