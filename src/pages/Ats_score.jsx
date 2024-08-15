import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { chatSession } from "../gen-ai/Gemini";

// icon imports

import { IoDocumentTextSharp } from "react-icons/io5";
import { IoBarChart } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Ats_score = () => {
  const [activePage, setActivePage] = useState("Score");
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const resume_response = await chatSession.sendMessage(
          "how are you gemini"
        );
        setResponse(resume_response.response.text());
      } catch (error) {
        console.error("Error fetching response:", error);
      }
    };

    fetchResponse();
  }, []);

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <Container>
      <Sidebar>
        <Link to={"/ats/resume"} style={{ textDecoration: "none" }}>
          <SidebarItem
            active={activePage === "Resume"}
            onClick={() => setActivePage("Resume")}
          >
            <Icon>
              <IoDocumentTextSharp />
            </Icon>
            Resume
          </SidebarItem>
        </Link>
        <Link to={"/ats/score"} style={{ textDecoration: "none" }}>
          <SidebarItem
            href="/ats/score"
            active={activePage === "Score"}
            onClick={() => setActivePage("Score")}
          >
            <Icon>
              <IoBarChart />
            </Icon>
            Score
          </SidebarItem>
        </Link>
        <SidebarItem
          active={activePage === "Settings"}
          onClick={() => setActivePage("Settings")}
        >
          <Icon>
            <IoMdSettings />
          </Icon>
          Settings
        </SidebarItem>
      </Sidebar>
      <MainContent></MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 80vh;
  font-family: Arial, sans-serif;

  margin: auto;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 200px;

  color: var(--primary-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 1200px) {
    flex-direction: row;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? "var(--fifth-color)" : "transparent"};
  border-radius: 5px;
  /* color: ${({ active }) => (active ? "white" : "var(--primary-color)")}; */
  color: var(--primary-color);
  text-decoration: none;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Icon = styled.span`
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const MainContent = styled.div``;

export default Ats_score;
