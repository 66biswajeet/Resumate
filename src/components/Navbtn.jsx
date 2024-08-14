import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  overflow: hidden;
  height: 2.1rem;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background: ${({ bgColor }) => bgColor || "#3d3a4e"};
  background-size: 400%;
  color: ${({ textColor }) => textColor || "#fff"};
  border: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: ${({ gradient }) =>
      gradient ||
      "linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%)"};
    transition: all 0.475s;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ButtonContent = styled.span`
  position: relative;
  z-index: 1;
`;

const Navbtn = ({ text, textColor, bgColor, gradient }) => {
  return (
    <Button bgColor={bgColor} textColor={textColor} gradient={gradient}>
      <ButtonContent>{text}</ButtonContent>
    </Button>
  );
};

export default Navbtn;
