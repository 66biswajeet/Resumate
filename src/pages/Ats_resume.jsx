import React, { useState } from "react";

import styled from "styled-components";

import { Link } from "react-router-dom";

// use here for file name to show on the popup //
import { useResumeExtract } from "../systems/useResumeExtract";
import { useJdContext } from "../systems/JdContext";

// section & components imports  //
import JobDescription from "../sections/JobDescription";
import Navbtn from "../components/Navbtn";

// icon imports
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoBarChart } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaBriefcase, FaFileUpload } from "react-icons/fa";

const Ats_resume = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const [activePage, setActivePage] = useState("Resume");

  const { selectedFile, extractText } = useResumeExtract();
  const { prompt1, setPrompt1 } = useJdContext();

  // prompt1 = job description and prompt2 = resume text

  // on upload button click the popup will shown
  const handleUploadClick = () => {
    console.log("Upload button clicked");
    setIsUploadOpen(true);
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
        <Link to={"/ats/meter"} style={{ textDecoration: "none" }}>
          <SidebarItem
            active={activePage === "Settings"}
            onClick={() => setActivePage("Settings")}
          >
            <Icon>
              <IoMdSettings />
            </Icon>
            Settings
          </SidebarItem>
        </Link>
      </Sidebar>
      <MainContent>
        <BackgroundPattern />
        <Title>Applicant Tracking System</Title>
        <Subtitle>
          Are you not getting enough interview calls? Check your Resume's ATS
          compatibility & get your GAP Report in just 3 minutes. This is your
          chance to get 2X more interview calls.
        </Subtitle>

        <JobDescription
          value={prompt1}
          onChange={(e) => setPrompt1(e.target.value)}
        />

        <div onClick={handleUploadClick}>
          <Navbtn text={"Upload Resume"}> </Navbtn>
        </div>

        {isUploadOpen && (
          <UploadModal>
            <ModalContent>
              <ModalHeader>
                <h2>Upload Resume</h2>
                <CloseButton onClick={() => setIsUploadOpen(false)}>
                  ×
                </CloseButton>
              </ModalHeader>
              <UploadArea>
                <UploadIcon>⬆️</UploadIcon>
                <p>Drop files here</p>
                <SupportedFormats>Supported format: Pdf </SupportedFormats>
                <OrDivider>OR</OrDivider>
                <BrowseButton htmlFor="fileInput">Browse</BrowseButton>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={extractText}
                />
                {selectedFile && <p> {selectedFile.name}</p>} 
              </UploadArea>
              <ModalFooter>
                <CancelButton onClick={() => setIsUploadOpen(false)}>
                  Cancel
                </CancelButton>
                <Link to={"/ats/score"}>
                  <UploadButton>Check ATS</UploadButton>
                </Link>
              </ModalFooter>
            </ModalContent>
          </UploadModal>
        )}
      </MainContent>
    </Container>
  );
};

//.............................// styling section //..........................//

const Container = styled.div`
  /* display: flex;
  min-height: 80vh;
  font-family: Arial, sans-serif;
  justify-content: center;
  margin: auto;
  @media (max-width: 1200px) {
    flex-direction: column;
  } */
  display: flex;
  min-height: 80vh;
  font-family: Arial, sans-serif;

  margin: auto;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const BackgroundPattern = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: repeating-linear-gradient(
    45deg,
    var(--fifth-color) 0,
    var(--fifth-color) 10px,
    transparent 10px,
    transparent 20px
  );
  opacity: 0.3;
`;

const Sidebar = styled.div`
  /* width: 150px;
  background-color: white;
  color: var(--primary-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  @media (max-width: 1200px) {
    flex-direction: row;
    top: 0;
    width: 85%;
    left: 0px;
  } */
  width: 150px;
  background-color: white;
  color: var(--primary-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  position: fixed;
  left: 60px;
  z-index: 100;

  @media (max-width: 1200px) {
    flex-direction: row;
    top: 0;
    width: 100%;
    justify-content: center;
    left: 0px;
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
  display: flex;
  flex-direction: column;
  /* margin-top: 50px; */
  margin-left: 200px;
  margin-right: auto;
  width: 80%;
  align-items: center;
  padding: 30px;
  height: 95vh;

  justify-content: center;
  scale: 1;

  @media (max-width: 1200px) {
    max-width: 100%;
    align-items: center;
    margin-left: auto;
    margin-top: 50px;
  }
`;

const Title = styled.h1`
  color: var(--primary-color);
  font-weight: 900;
  position: relative;
  padding-bottom: 10px;
  @media (max-width: 1200px) {
    font-size: 15px;
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
`;

const Subtitle = styled.p`
  color: var(--third-color);
  max-width: 70%;
  font-size: 15px;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 1200px) {
    max-width: 90%;
    text-align: left;
  }
`;

const UploadModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  scale: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  width: 95%;
  padding: 50px 0;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background-color: var(--fourth-color);
    border-radius: 50%;
  }
`;

const UploadArea = styled.div`
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 40px;
  text-align: center;
`;

const UploadIcon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;

const SupportedFormats = styled.p`
  color: #666;
  font-size: 14px;
`;

const OrDivider = styled.p`
  margin: 10px 0;
  color: #666;
`;

const BrowseButton = styled.label`
  background: none;
  border: none;
  color: var(--secondary-color);
  text-decoration: underline;
  cursor: pointer;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const CancelButton = styled(Button)`
  background-color: #f0f0f0;
  color: #333;
  margin-top: 20px;
  transition: all 0.5s;
  &:hover {
    background-color: var(--fifth-color);
  }
`;

const UploadButton = styled(Button)`
  background-color: var(--primary-color);
  color: white;
  margin-top: 20px;
  transition: all 0.5s;
  &:hover {
    background-color: var(--secondary-color);
  }
`;

// const JobDescriptionInput = styled.textarea`
//   width: 100%;
//   max-width: 600px;
//   height: 150px;
//   padding: 12px;
//   border: 1.5px solid var(--primary-color);
//   border-radius: 8px;
//   font-size: 16px;
//   resize: vertical;
//   margin-bottom: 20px;
//   transition: border-color 0.3s ease;
//   background-color: var(--fifth-color);

//   &:focus {
//     outline: none;
//     border-color: var(--secondary-color);
//     box-shadow: 0 0 0 2px rgba(var(--secondary-color-rgb), 0.2);
//   }

//   &::placeholder {
//     color: var(--primary-color);
//   }

//   @media (max-width: 1000px) {
//     width: 95%;
//   }
// `;

export default Ats_resume;
