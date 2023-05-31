import React, { Suspense } from "react";
import styled from "styled-components";
import Image from "next/image";
import Navbar2 from "./Navbar2";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useViewport } from "../hooks";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { textVariant } from "../constants/motion.js";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url("/herobg.png");

  @media only screen and (max-width: 768px) {
    height: 150vh;
  }
`;

const Container = styled.div`
  height: 100%;
  /* scroll-snap-align: center; */
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1450px) {
    width: 1100px;
  }
  @media (max-width: 1100px) {
    width: 800px;
  }

  @media only screen and (max-width: 908px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
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

const Title = styled.h1`
  font-size: 74px;

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
  width: fit-content;
  background-color: #915eff;
  color: white;
  font-weight: 500;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c1a1ff;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.div`
  /* width: 600px; */
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  @media (max-width: 768px) {
    width: 100%;
    height: 225px;
    /* margin: 0 auto; */
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Span = styled.span`
  color: #915eff;
`;

const CanvasDiv = styled(motion.div)`
flex: 0.5;
position: relative;
display:flex;
justify-content:center;
align-items: center;
  /* height: 300px; */
  /* margin-top: 70px; */
  @media (min-width: 1280px) {
    flex: 1;
    width: 100%;z
  }
  @media (min-width: 768px) {
    /* height: 550px; */
    margin-top: 0;
  }1
`;

const Hero = () => {
  const viewport = useViewport();

  const isMobile = viewport.width <= 768;
  const scale = isMobile ? 2.2 : 2.4;

  return (
    <Section>
      <Navbar2 />
      <Container>
        <Left>
          <Title>
            Hi, I'm <Span>Roberto</Span>
          </Title>
          <WhatWeDo>
            {/* <Line src="/line.png" /> */}
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>
            I do frontend development, creating cutting-edge, logic-driven
            solutions.
          </Desc>

          <Button href="#about">Learn More About Me</Button>
        </Left>
        <CanvasDiv variants={textVariant()}>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1.5} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={scale}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={1.5}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img>
            <Image
              src="/moon3.png"
              layout="fill"
              objectFit="cover"
              alt="moon"
              draggable={false}
            />
          </Img>
        </CanvasDiv>
      </Container>
    </Section>
  );
};

export default Hero;
