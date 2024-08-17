import React from "react";
import styled from "styled-components";
import { FaFileUpload } from "react-icons/fa";

const Button = styled.button`
  position: relative;
  overflow: hidden;

  height: 2.22rem;
  width: 100%;

  height: 2.15rem;

  padding: 0 2rem;
  border-radius: 0.5rem;
  background: ${({ bgColor }) => bgColor || " var(--primary-color)"};
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
  display: flex;
  gap: 5px;
`;

const Navbtn = ({ text, textColor, bgColor, gradient, onclick }) => {
  return (
    <Button bgColor={bgColor} textColor={textColor} gradient={gradient}>
      <ButtonContent>
        {" "}
        <FaFileUpload />
        {text}
      </ButtonContent>
      {/* comment */}
    </Button>
  );
};

export default Navbtn;
