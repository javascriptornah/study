"use client";
import React from "react";
import styled from "styled-components";
import COLORS from "../../../public/data/colors";

const Cont = styled.div``;

const GenerateBtn = () => {
  return (
    <Cont colors={COLORS} className="green-btn">
      <h2>Generate Question</h2>
    </Cont>
  );
};

export default GenerateBtn;
