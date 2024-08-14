// Navbar.jsx
import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../assets/logo3.png";
import { HiMenuAlt1 } from "react-icons/hi";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    justify-content: space-between;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const Logo = styled.img`
  height: 50px;
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  transition: all 1s;

  @media (max-width: 1200px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0px;
    right: 0;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    align-items: center;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: ${({ active }) => (active ? "var(--primary-color)" : "black")};
  margin-left: 2rem;
  font-weight: bold;
  position: relative;

  &::after {
    content: "";

    height: 4px;
    background-color: var(--secondary-color);
    position: absolute;
    display: ${({ active }) => (active ? "block" : "none")};

    width: ${({ active }) => (active ? "100%" : "0%")};
    border-radius: 2px;
  }

  @media (max-width: 1200px) {
    margin: 1rem 0;
  }
`;

const MenuBtn = styled.div`
  display: flex;
  column-gap: 10px;
  margin: 0 0 0 100px;
  @media (max-width: 1200px) {
    flex-direction: column;
    row-gap: 10px;
    margin: 0;
    width: 100%;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const Button = styled.button`
  background-color: ${({ active }) =>
    active ? "var(--secondary-color)" : "var(--primary-color)"};
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.3s;
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <LogoDiv>
        <Logo src={LogoImage} alt="ResumePro Logo" />
      </LogoDiv>
      <HamburgerButton onClick={toggleMenu}>
        <HiMenuAlt1 style={{ color: "var(--primary-color)" }} />
      </HamburgerButton>
      <MenuItems isOpen={isMenuOpen}>
        <MenuItem
          href="/"
          active={activePage === "Home"}
          onClick={() => setActivePage("Home")}
        >
          Home
        </MenuItem>
        <MenuItem
          href="#"
          active={activePage === "Resume Build"}
          onClick={() => setActivePage("Resume Build")}
        >
          Resume Build
        </MenuItem>
        <MenuItem
          href="/ats/resume"
          active={activePage === "ATS Score"}
          onClick={() => setActivePage("ATS Score")}
        >
          ATS Score
        </MenuItem>
        <MenuItem
          href="#"
          active={activePage === "Resume Parser"}
          onClick={() => setActivePage("Resume Parser")}
        >
          Resume Parser
        </MenuItem>

        <MenuBtn>
          <Button href="#">Sign in</Button>
          <Button>Log IN</Button>
        </MenuBtn>
      </MenuItems>
    </Nav>
  );
};

export default Navbar;
