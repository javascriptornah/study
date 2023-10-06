import { useState, useRef } from "react";
import COLORS from "../../data/colors";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const Cont = styled.div`
  border: 1px solid ${(props) => props.colors.lightGrey};
  margin-bottom: 32px;

  cursor: pointer;
  transition: box-shadow 0.25s ease;

  .header {
    padding: 16px;
    transition: background-color 0.25s ease;
  }
  .icon-sm {
    transition: transform 0.5s ease;
  }
  &:hover {
    box-shadow: none;
    .icon-sm {
      transform: rotate(180deg);
    }
  }

  .index {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
  .answer-box {
    margin-top: 24px;
    padding-top: 8px;
    border-top: 1px solid ${(props) => props.colors.lightGrey};
    border-top: 1px solid black;
    transition: height 0.5s ease-out;
    overflow-y: hidden;
    transition: padding 0.25s ease;
  }
`;

const ExamQuestion = ({ question, answer, index }) => {
  const [visible, setVisible] = useState(false);
  const accordion = useRef(null);
  const [height, setHeight] = useState("0px");
  const toggleAccordion = () => {
    setHeight(visible ? "0px" : `${accordion.current.scrollHeight + 32}px`);
    setVisible((prev) => {
      return !prev;
    });
  };

  return (
    <Cont colors={COLORS} className="box-shadow">
      <div
        style={{ backgroundColor: visible ? COLORS.lightGrey : "#fff" }}
        className="space-between flex align-center header"
        onClick={toggleAccordion}
      >
        <div className="flex align-center">
          <div className="index mar-right-16">
            <p className="off-white small">{index}</p>
          </div>
          <h3>{question}</h3>
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ transform: visible ? "rotate(180deg)" : "rotate(0deg)" }}
          className="icon-sm"
        />
      </div>
      <div
        ref={accordion}
        style={{ height: height, padding: visible ? "16px" : "0px" }}
        className="answer-box"
      >
        <ReactMarkdown className="markdown">{answer}</ReactMarkdown>
      </div>
    </Cont>
  );
};

export default ExamQuestion;
