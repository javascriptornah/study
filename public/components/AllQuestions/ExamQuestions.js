"use client";

import { useState } from "react";

import styled from "styled-components";
import COLORS from "../../../public/data/colors";
import ExamQuestion from "./ExamQuestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const Cont = styled.div`
  .questions-holder {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const ExamQuestions = ({ refreshPage, fullQuestionList }) => {
  const [questions, setQuestions] = useState(
    fullQuestionList.map((question, index) => {
      return (
        <ExamQuestion
          key={index}
          index={index + 1}
          question={question.question}
          answer={question.answer}
        />
      );
    })
  );

  return (
    <Cont colors={COLORS}>
      <h2 className="mar-bottom-8">Final Exam Review</h2>
      <div className="grey-line mar-bottom-32"></div>
      <div className="flex flex-end mar-bottom-16">
        {/*  <div className="green-btn flex align-center">
          <h2 className="mar-right-16">Refresh</h2>
          <FontAwesomeIcon icon={faRefresh} className="icon-sm green" />
        </div> */}
      </div>
      <div className="questions-holder">{questions}</div>
    </Cont>
  );
};

export default ExamQuestions;
