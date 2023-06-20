"use client";
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import COLORS from "../data/colors";
import StyledComponentsRegistry from "../../lib/registry";

const Cont = styled.div``;

const LayoutComponent = ({ children }) => {
  return (
    <Cont colors={COLORS}>
      <StyledComponentsRegistry>
        {" "}
        <Navbar />
        {children}
      </StyledComponentsRegistry>
    </Cont>
  );
};

export default LayoutComponent;
