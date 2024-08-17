import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin-left: 70px;

  @media (max-width: 1200px) {
    margin: auto;
  }
`;
const H3 = styled.h3`
  font-size: 25px;
`;

const Spinner = ({ type, color }) => (
  <Container>
    {/* <H3>Analyzing Your Resume</H3> */}
    <ReactLoading type={type} color={color} height={"15%"} width={"15%"} />
  </Container>
);

export default Spinner;
