"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Cont colors={COLORS}>
      <h3>Study Guide</h3>
      <Link href="/computerEssentials">
        <h3 className={pathname == "/computerEssentials" ? "active-link" : "nav-link"}>
          Computer Essentials
        </h3>
      </Link>
      <Link href="/database">
        <h3 className={pathname == "/database" ? "active-link" : "nav-link"}>
          Database
        </h3>
      </Link>
    </Cont>
  );
};

export default Navbar;
