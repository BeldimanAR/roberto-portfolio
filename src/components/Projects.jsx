"use client";
import React from "react";
import Tilt from "react-tilt";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../constants/motion.js";
import { SectionWrapper } from "../hoc";

const ProjectsParagraph = styled.p`
  font-size: 14px;
  color: #aaa6c3;
  text-transform: uppercase;
  letter-spacing: wider;

  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

const ProjectsHeading = styled.h2`
  font-size: 30px;
  color: white;
  font-weight: 900;

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
const MotionCardWrapper = styled(motion.div)`
  margin-top: 0.75rem;
  color: var(--text-secondary);
  font-size: 17px;
  max-width: 48rem;
  line-height: 30px;
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const CardsWholeWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem;
`;

const StyledTilt = styled.div`
  background-color: var(--color-tertiary);
  padding: 20px;
  border-radius: 2rem;
  width: 100%;

  @media (min-width: 640px) {
    width: 360px;
  }
`;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return <h1>hey</h1>;
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <ProjectsParagraph>My work</ProjectsParagraph>
        <ProjectsHeading>Projects.</ProjectsHeading>
      </motion.div>

      <CardsWrapper>
        <MotionCardWrapper variants={fadeIn("", "", 0.1, 1)}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </MotionCardWrapper>
      </CardsWrapper>

      <CardsWholeWrapper>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </CardsWholeWrapper>
    </>
  );
};

export default SectionWrapper(Projects, "");
