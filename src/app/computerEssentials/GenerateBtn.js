"use client";
import React from "react";
import styled from "styled-components";
import COLORS from "../../../public/data/colors";

const Cont = styled.div`
  border: 2px solid ${(props) => props.colors.green4};
  display: inline-block;
  border-radius: 32px;
  padding: 8px 16px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  h2 {
    color: ${(props) => props.colors.green4};
  }
  &:active {
    box-shadow: none;
  }

  &:hover {
    background-color: ${(props) => props.colors.lightGrey};
  }
`;

const GenerateBtn = () => {
  return (
    <Cont colors={COLORS}>
      <h2>Generate Question</h2>
    </Cont>
  );
};

export default GenerateBtn;
