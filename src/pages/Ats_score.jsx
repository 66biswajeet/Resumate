import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { chatSession } from "../gen-ai/Gemini";

import { useResumeContext } from "../systems/ResumeContext";

import DOMPurify from "dompurify";

// icon imports

import { IoDocumentTextSharp } from "react-icons/io5";
import { IoBarChart } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Ats_score = () => {
  const [activePage, setActivePage] = useState("Score");
  const [response, setResponse] = useState("");

  const { prompt2 } = useResumeContext();
  console.log(prompt2);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const resume_response =
          await chatSession.sendMessage(`Task: Extract all the candidate information from the resume (${prompt2}) and generate a detailed analysis structured with HTML tags:

            
Note: sharp start from the name nothing extra .

<p class = "name">[Candidate Name]</p>

line under the name .

<h4>Contact Information</h4>
<ul>
  <li>[Phone Number]</li>
  <li>[Email Address]</li>
  <a>[other links]</a>
</ul>

<h4>Summary</h4>
<p>[Professional summary or objective statement]</p>

<h4>Skills</h4>
<ul>
  <li class = "skills">[Skill 1]</li>
  <li class = "skills">[Skill 2]</li>
  <!-- Add more skills as needed -->
</ul>

<h4>Experience</h4>
<h5>[Job Title] at [Company Name]</h5>
<p>[Employment Period]</p>
<ul>
  <li>[Responsibility/Achievement 1]</li>
  <li>[Responsibility/Achievement 2]</li>
  <!-- Add more items as needed -->
</ul>

<!-- Repeat the above structure for each job -->

<h4>Education</h4>
<h5>[Degree] in [Field of Study]</h5>
<p>[University Name], [Graduation Year]</p>

<h4>Projects</h4>
<h5>[Project Name]</h5>
<ul>
  <li>[Project Description]</li>
  <li>[Technologies Used]</li>
  <!-- Add more details as needed -->
</ul>

<!-- Repeat the above structure for each project -->
Note : if some points is not specified then ignore it .
 . No need of important notes or explanations.
`);
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

  const formatResponse = (text) => {
    return DOMPurify.sanitize(text);
  };

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
      <MainContent>
        {response && (
          <ResumeLayout>
            <h2>Candidate Resume</h2>
            <div
              dangerouslySetInnerHTML={{ __html: formatResponse(response) }}
            />
          </ResumeLayout>
        )}
      </MainContent>
    </Container>
  );
};

const ResumeLayout = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;

  h2 {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .name {
    font-size: 30px;
    font-weight: 700;
    color: var(--primary-color);
    text-align: center;
    margin: 0;

    @media (max-width: 1000px) {
      font-size: 25px;
    }
  }

  h4 {
    color: var(--secondary-color);
    margin-top: 25px;
    margin-bottom: 15px;
  }

  h5 {
    color: var(--tertiary-color);
    margin-top: 15px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skills {
    border: none;
    padding: 0 5px;
    border-radius: 5px;
    background-color: var(--fifth-color);
  }

  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }

  p {
    line-height: 1.6;
  }
`;

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
  width: 150px;
  background-color: white;
  color: var(--primary-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  position: fixed;

  @media (max-width: 1200px) {
    flex-direction: row;
    top: 0;
    width: 100%;
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

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-left: 220px; // Adjust based on your sidebar width

  @media (max-width: 1200px) {
    margin-left: 0;
    margin-top: 100px;
    overflow-x: hidden;
  }
`;

export default Ats_score;
