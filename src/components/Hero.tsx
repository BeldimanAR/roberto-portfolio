import React, { Suspense } from "react";
import styled from "styled-components";
import Image from "next/image";
import Navbar2 from "./Navbar2";
import { useViewport } from "../hooks";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url("/herobg.png");

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  /* scroll-snap-align: center; */
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
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
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #915eff;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
  width: 600px;
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
  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 265px;
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

const Hero = () => {
  const viewport = useViewport();

  const isMobile = viewport.width <= 768;
  const scale = isMobile ? 1.5 : 2.4;

  return (
    <Section>
      <Navbar2 />
      <Container>
        <Left>
          <Title>
            Hi, I'm <Span>Roberto</Span>
          </Title>
          <WhatWeDo>
            <Line src="/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>
            I do frontend development, creating cutting-edge, logic-driven
            solutions.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
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
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
