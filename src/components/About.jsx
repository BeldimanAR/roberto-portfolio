import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SectionWrapper } from "../hoc";
import Cube from "./Cube";
import { motion } from "framer-motion";
import { textVariant } from "../constants/motion.js";
import { useViewport } from "../hooks";

const Section = styled.div`
  /* height: 100vh; */
  /* scroll-snap-align: center; */
  /* display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  } */
`;

const Container = styled.div`
  /* height: 100%; */
  /* scroll-snap-align: center; */
  /* width: 1400px; */
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled(motion.div)``;

const Title = styled.h1`
  font-size: 74px;
  line-height: 1.2;
  color: white;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }

  @media (min-width: 640px) {
    font-size: 50px;
  }

  @media (min-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 639px) {
    font-size: 40px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  font-size: 14px;
  color: #aaa6c3;
  text-transform: uppercase;
  letter-spacing: wider;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    text-align: center;
  }
  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.a`
  background-color: #915eff;
  color: white;
  font-weight: 500;
  width: fit-content;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const CanvasDiv = styled(motion.div)`
  height: 300px;
  margin-top: 70px;
  @media (min-width: 1280px) {
    height: auto;
    flex: 1 1 0%;
  }
  @media (min-width: 768px) {
    height: 550px;
    margin-top: 0;
  }1
`;

const About = () => {
  const { viewport } = useViewport();
  const width = viewport?.width;
  const isMobile = width <= 768;
  const fov = isMobile ? 14 : 18;
  return (
    <>
      <Left variants={textVariant()}>
        <Title>Thinking outside the box</Title>
        <Subtitle>Who I Am</Subtitle>
        <Right>
          <Desc>
            I am a skilled frontend developer with experience in Next.js,
            React.js, GraphQL, Redux Toolkit, and NodeJS. I specialize in
            creating user-friendly interfaces and delivering high-quality
            software.
          </Desc>
          <Button href="#work">See my Experience</Button>
        </Right>
      </Left>
      <CanvasDiv variants={textVariant()}>
        <Canvas camera={{ position: [5, 5, 5], fov: fov }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </CanvasDiv>
    </>
  );
};

export default SectionWrapper(About, "about");
