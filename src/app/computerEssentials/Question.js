import { useState } from "react";
import styled from "styled-components";
import COLORS from "../../../public/data/colors";

const Cont = styled.div`
  .info-box {
    border: 1px solid ${(props) => props.colors.darkGrey};
    padding: 32px;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

const Question = ({ question }) => {
  const [show, setShow] = useState(false);

  return (
    <Cont colors={COLORS}>
      {show ? (
        <div onClick={() => setShow(false)} className="info-box">
          <p>{question.answer}</p>
          <div className="mar-bottom-16"></div>
          <div className="flex justify-center">
            <div className="btn" onClick={() => setShow(true)}>
              <p>Show question</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="info-box">
          <p>{question.question}</p>
          <div className="mar-bottom-16"></div>
          <div className="flex justify-center">
            <div className="btn" onClick={() => setShow(true)}>
              <p>Show answer</p>
            </div>
          </div>
        </div>
      )}
    </Cont>
  );
};

export default Question;
