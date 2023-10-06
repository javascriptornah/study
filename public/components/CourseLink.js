import React from "react";
import Link from "next/link";
import styled from "styled-components";
import COLORS from "../data/colors";

const Cont = styled.div`
  padding: 24px 32px;
  border-radius: 8px;
  max-width: 320px;
  width: 100%;
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.colors.lightGrey};
`;

const CourseLink = ({ text, link }) => {
  return (
    <Cont colors={COLORS}>
      <h3 className="mar-bottom-32">{text}</h3>
      <Link href={link}>
        <button className="button">
          <h5>Check Guide</h5>
        </button>
      </Link>
    </Cont>
  );
};

export default CourseLink;
