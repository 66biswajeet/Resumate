import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;

  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 2rem;
  text-align: center;
  margin: auto;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: var(--secondary-color);

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  align-self: center;
  margin-left: 23%;
  &:hover {
    background-color: var(--secondary-color);
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    align-self: flex-start;
  }
`;

const ModelSection = styled.div`
  flex: 1;
  height: 50vh;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

// 3D Model components
const EarthModel = () => {
  const { scene } = useGLTF("./File.glb");
  return <primitive object={scene} scale={28} position={[0, -5, 0]} />;
};

const ThreeScene = () => (
  <Canvas camera={{ position: [-8, 6, 12], fov: 45, near: 0.1, far: 1000 }}>
    <ambientLight intensity={0.5} />
    <directionalLight
      position={[5, 5, 5]}
      intensity={1}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />
    <OrbitControls
      //   autoRotate
      enableZoom={false}
      enablePan={true}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
    <EarthModel />
  </Canvas>
);

// Main component
const ExploreToolsPage = () => {
  return (
    <Container>
      <ContentSection>
        <Title>Explore Our Tools</Title>
        <Subtitle>Discover the best tools to build your dream resume.</Subtitle>
        <Button>Get Started</Button>
      </ContentSection>
      <ModelSection>
        <ThreeScene />
      </ModelSection>
    </Container>
  );
};

export default ExploreToolsPage;
