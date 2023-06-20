"use client";
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import COLORS from "../data/colors";
const Cont = styled.div``;

const LayoutComponent = ({ children }) => {
  return (
    <Cont colors={COLORS}>
      <Navbar />
      {children}
    </Cont>
  );
};

export default LayoutComponent;
