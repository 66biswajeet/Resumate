import React, { useState } from "react";
import styled from "styled-components";
import Navbtn from "../components/Navbtn";

import { Link } from "react-router-dom";

// icon imports

import { IoDocumentTextSharp } from "react-icons/io5";
import { IoBarChart } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Ats_resume = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activePage, setActivePage] = useState("Resume");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
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
        <Title>Applicant Tracking System</Title>
        <Subtitle>
          Are you not getting enough interview calls? Check your Resume's ATS
          compatibility & get your GAP Report in just 3 minutes. This is your
          chance to get 2X more interview calls.
        </Subtitle>

        <UploadButton onClick={handleUploadClick}>Upload</UploadButton>

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
                <SupportedFormats>Supported format: PNG, JPG</SupportedFormats>
                <OrDivider>OR</OrDivider>
                <BrowseButton htmlFor="fileInput">Browse</BrowseButton>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                {selectedFile && <p> {selectedFile.name}</p>} 
              </UploadArea>
              <ModalFooter>
                <CancelButton onClick={() => setIsUploadOpen(false)}>
                  Cancel
                </CancelButton>
                <UploadButton>Upload</UploadButton>
              </ModalFooter>
            </ModalContent>
          </UploadModal>
        )}
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 80vh;
  font-family: Arial, sans-serif;
  justify-content: center;
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

const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 20px;
  max-width: 80vw;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    max-width: 100%;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  color: var(--primary-color);
  font-weight: 900;
  @media (max-width: 1200px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.p`
  color: var(--third-color);
  max-width: 70%;
  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;

const UploadModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
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
`;

const UploadButton = styled(Button)`
  background-color: var(--primary-color);
  color: white;
  margin-top: 20px;
`;

export default Ats_resume;
