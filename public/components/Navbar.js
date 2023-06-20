import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import COLORS from "../data/colors";

const Cont = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.colors.black};
  background-color: ${(props) => props.colors.lightGrey};
`;

const Navbar = () => {
  return (
    <Cont colors={COLORS}>
      <h3>Study Guide</h3>
      <Link href="/computerEssentials">
        <h3>Computer Essentials</h3>
      </Link>
      <h3>Database</h3>
    </Cont>
  );
};

export default Navbar;
