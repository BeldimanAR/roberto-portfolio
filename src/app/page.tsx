"use client";
import styled from "styled-components";
import Contact from "../components/Contact";
import Hero from "@/components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Works from "../components/Works";
import StarsCanvas from "../components/Stars";
import Image from "next/image";
import styles from "./page.module.css";
import bgImg from "../../public/bg.jpeg";

const Container = styled.div`
  /* height: 100vh; */
  /* scroll-snap-type: y mandatory;*/
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background-color: #050816;
  &::-webkit-scrollbar {
    display: none;
  }
  /* color: white; */
  /* background-image: url("/bg.jpeg"); */
  @media (max-width: 640px) {
    scroll-snap-type: none;
  }
`;
const ContactWrapper = styled.div`
  position: relative;
  z-index: 0;
`;

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Works />
      <Projects />
      <ContactWrapper>
        <Contact />
        <StarsCanvas />
      </ContactWrapper>
    </Container>
  );
}
