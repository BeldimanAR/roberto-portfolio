"use client";
import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.js";
import styled from "styled-components";
import Link from "next/link.js";
import Image from "next/image.js";

const NavbarContainer = styled.nav`
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 5px;
  position: fixed;
  top: 0;
  z-index: 20;
  background-color: #050816;
  @media (min-width: 640px) {
    padding-left: 16px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

const Links = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledLogo = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  position: relative;
`;
const StyledText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
const StyledUl = styled.ul`
  list-style: none;
  display: none;

  @media (min-width: 640px) {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
`;
interface StyledLiProps {
  active: boolean;
}
const StyledLi = styled.li<StyledLiProps>`
  color: ${({ active }) => (active ? "#ffffff" : "#aaa6c3")};
  font-size: 18px;
  font-weight: medium;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #ffffff;
  }
`;
const StyledLiCV = styled.li`
  color: #915eff;
  font-size: 18px;
  font-weight: medium;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #ffffff;
  }
`;
const MobileContainer = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
`;
const Hamburger = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  cursor: pointer;
`;
interface StyledDivProps {
  toggle: boolean;
}
const MobilePopUp = styled.div<StyledDivProps>`
  display: ${({ toggle }) => (toggle ? "flex" : "none")};
  padding: 24px;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #434343, #000000);
  background: linear-gradient(to right, #434343, #000000);
  position: absolute;
  top: 60px;
  right: 0;
  margin: 8px 16px;
  min-width: 160px;
  z-index: 10;
  border-radius: 12px;
`;
const MobileUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
`;
interface StyledLiProps {
  active: boolean;
}

const StyledLiMobile = styled.li<StyledLiProps>`
  color: ${({ active }) => (active ? "#ffffff" : "#aaa6c3")};
  font-family: "Poppins", sans-serif;
  font-weight: medium;
  cursor: pointer;
  font-size: 16px;
`;
const LinkDiv = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <NavbarContainer>
      <Container>
        <LinkDiv
          href="/"
          onClick={() => {
            setActive("");
          }}
        >
          <StyledLogo>
            <Image src="/logo.svg" fill={true} alt="logo" />
          </StyledLogo>
          <StyledText>Roberto</StyledText>
        </LinkDiv>
        <StyledUl>
          <StyledLiCV key="download">
            <a
              href="https://drive.google.com/uc?export=download&id=1QEWYYzFjwzjpYHruAPTiZMxee-0IKPk-
"
            >
              CV
            </a>
          </StyledLiCV>
          {navLinks?.map((link) => {
            return (
              <StyledLi
                key={link.id}
                active={active === link.title}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </StyledLi>
            );
          })}
        </StyledUl>
        <MobileContainer>
          <Hamburger
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt={"/menu.svg"}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <MobilePopUp toggle={toggle}>
            <MobileUl>
              {navLinks?.map((link) => {
                return (
                  <StyledLiMobile
                    key={link.id}
                    active={active === link.title}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </StyledLiMobile>
                );
              })}
              <StyledLiCV key="download">
                <a
                  href="https://drive.google.com/uc?export=download&id=1BZjvUct8kMR-C6RpmegsrPj1JQe806a9
"
                >
                  CV
                </a>
              </StyledLiCV>
            </MobileUl>
          </MobilePopUp>
        </MobileContainer>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
