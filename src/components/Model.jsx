import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Container = styled.div`
  background-color: #f5f5f5;
  color: #333;
  font-family: Arial, sans-serif;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #8a2be2;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9f3ed5;
    transform: scale(1.05);
  }
`;

const ModelContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  z-index: 1; /* Adjusted z-index */

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    top: auto;
    bottom: 0;
  }
`;

const EarthModel = ({ scrollProgress }) => {
  const { scene } = useGLTF("/File.glb"); // Adjusted the path to be relative to the public folder
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = scrollProgress * Math.PI;
    }
  });

  return (
    <primitive ref={modelRef} object={scene} scale={25} position={[0, -4, 0]} />
  );
};

const ThreeScene = ({ scrollProgress }) => (
  <Canvas camera={{ position: [-8, 6, 12], fov: 45, near: 0.1, far: 1000 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    <EarthModel scrollProgress={scrollProgress} />
  </Canvas>
);

const ExploreToolsPage = () => {
  const containerRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = containerRef.current.scrollHeight;
      const maxScroll = fullHeight - windowHeight;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container ref={containerRef}>
      <ModelContainer>
        <ThreeScene scrollProgress={scrollProgress} />
      </ModelContainer>
      <Section>
        <Title>Resume Builder</Title>
        <Description>
          Create a professional resume effortlessly with our easy-to-use Resume
          Builder tool.
        </Description>
        <Button>Resume Builder</Button>
      </Section>
      <Section>
        <Title>ATS Score Checker</Title>
        <Description>
          Ensure your resume is ATS-compatible by using our ATS Score Checker
          tool. Get instant feedback on how well your resume will perform with
          Applicant Tracking Systems.
        </Description>
        <Button>Check Your Score</Button>
      </Section>
      <Section>
        <Title>Resume Parser</Title>
        <Description>
          Our Resume Parser tool helps you extract essential information from
          resumes quickly and efficiently. Save time and streamline your hiring
          process.
        </Description>
        <Button>Parse Your Resume</Button>
      </Section>
    </Container>
  );
};

export default ExploreToolsPage;
