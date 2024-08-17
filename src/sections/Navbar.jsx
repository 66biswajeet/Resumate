// Navbar.jsx
import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../assets/logo3.png";
import { HiMenuAlt1 } from "react-icons/hi";

import { Link, useLocation } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 95%;
  position: fixed;
  top: 0;
  z-index: 100;

  @media (max-width: 1200px) {
    justify-content: space-between;
    width: 85%;
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
    left: -33px;
    right: 0;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    align-items: center;
    width: 100%;
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
    background: linear-gradient(
      to right,
      var(--primary-color) 0%,
      var(--primary-color) 33.33%,
      var(--third-color) 33.33%,
      var(--third-color) 66.66%,
      var(--fifth-color) 66.66%,
      var(--fifth-color) 100%
    );
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

  transition: all 0.3s;
  &:hover {
    background-color: var(--secondary-color);
  }
  @media (max-width: 1200px) {
    margin: 0 1rem;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const isActive = (paths) => {
    if (Array.isArray(paths)) {
      return paths.some((path) => location.pathname.startsWith(path));
    }
    return location.pathname === paths;
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
        <MenuItem as={Link} to="/" active={isActive("/")}>
          Home
        </MenuItem>
        <MenuItem
          as={Link}
          to="/resume-build"
          active={isActive("/resume-build")}
        >
          Resume Build
        </MenuItem>
        <MenuItem
          as={Link}
          to="/ats/resume"
          active={isActive(["/ats/resume", "/ats/score"])}
        >
          ATS Score
        </MenuItem>
        <MenuItem
          as={Link}
          to="/resume-parser"
          active={isActive("/resume-parser")}
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
