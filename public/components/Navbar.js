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

  @media only screen and (max-width: 500px) {
    .nav-links {
      justify-content: flex-end;
      text-align: end;
    }
    a {
      margin-right: 8px;
    }
  }
`;

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Cont colors={COLORS}>
      <Link href="/" className="mar-right-32 mar-bottom-16">
        <h3 className={pathname == "/" ? "active-link" : "nav-link"}>
          Study Guide
        </h3>
      </Link>

      <div className="flex flex-wrap space-around nav-links">
        <Link href="/objectoriented" className="mar-right-32 mar-bottom-16">
          <h3
            className={
              pathname == "/objectoriented" ? "active-link" : "nav-link"
            }
          >
            Object Oriented
          </h3>
        </Link>

        <Link href="/linux" className="mar-right-32 mar-bottom-16">
          <h3 className={pathname == "/linux" ? "active-link" : "nav-link"}>
            Linux
          </h3>
        </Link>

        <Link href="/webprogramming" className="mar-right-32 mar-bottom-16">
          <h3
            className={
              pathname == "/webprogramming" ? "active-link" : "nav-link"
            }
          >
            Web Programming
          </h3>
        </Link>

        <Link href="/database" className="mar-right-32 mar-bottom-16">
          <h3 className={pathname == "/database" ? "active-link" : "nav-link"}>
            Database
          </h3>
        </Link>
      </div>
    </Cont>
  );
};

export default Navbar;
