import React, { useState, useEffect } from "react";
import GaugeMeter from "../components/GaugeMeter";
import styled from "styled-components";
import { chatSession } from "../gen-ai/Gemini";
import { useJdContext } from "../systems/JdContext";
import { useResumeContext } from "../systems/ResumeContext";
import JdPrompt from "../prompts/JdPrompt";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;
  position: fixed;
  /* width: 80%; */
  margin-top: 70px;
  background-color: white;
  z-index: 250;
  right: 70px;

  @media (max-width: 1200px) {
    margin: 15px auto 25px auto;
    width: 100%;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: var(--primary-color);
    text-align: center;
    margin: 0;
    position: relative;
    margin-bottom: 10px;

    @media (max-width: 1000px) {
      font-size: 25px;
    }
    &::after {
      content: "";
      background: linear-gradient(
        to right,
        var(--primary-color) 0%,
        var(--primary-color) 33.33%,
        var(--third-color) 33.33%,
        var(--third-color) 66.66%,
        var(--fifth-color) 66.66%,
        var(--fifth-color) 100%
      );
      height: 4px;
      background-color: var(--secondary-color);
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      border-radius: 2px;
    }
  }
`;

const Ats_meter = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const { prompt1 } = useJdContext();
  const { prompt2 } = useResumeContext();

  useEffect(() => {
    const fetchResponse = async () => {
      setLoading(true);
      try {
        const jd_response = await chatSession.sendMessage(
          JdPrompt(prompt1, prompt2) // the prompt defind in the Prompts.js file .
        );
        setResponse(jd_response.response.text()); // response hook have the generated response from the gemini .
      } catch (error) {
        console.error("Error fetching response:", error);
      }
      setLoading(false);
    };

    fetchResponse();
  }, []);

  // optional (for testing purpose) //
  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <Container>
      <h2>ATS SCORE</h2>
      <GaugeMeter value={loading ? "Calculating.." : response} />
    </Container>
  );
};

export default Ats_meter;
