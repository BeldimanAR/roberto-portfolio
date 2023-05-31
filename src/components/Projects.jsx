"use client";
import React from "react";
import { Tilt } from "react-tilt";
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

const StyledTilt = styled(Tilt)`
  background-color: #151030;
  padding: 20px;
  border-radius: 1rem;
  width: 100%;

  @media (min-width: 640px) {
    width: 360px;
  }
`;
const ProjectCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem; /* Note: replace '2xl' with the appropriate value in pixels or rem */
`;
const CardInfoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  margin: 12px;
  /* Add your additional styles for 'card-img_hover' here */
`;

const GithubImgWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const GithubImg = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;
const TitleDescriptionWrapper = styled.div`
  margin-top: 20px;
`;
const TitleCard = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;
const ParagraphCard = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #aaa6c3;
`;
const TagsWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const ParagraphTag = styled.p`
  font-size: 14px;
`;
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <StyledTilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <ProjectCardWrapper>
          <ProjectImage src={image} alt="project_image" />

          <CardInfoWrapper>
            <GithubImgWrapper
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <GithubImg src="/github.png" alt="source code" />
            </GithubImgWrapper>
          </CardInfoWrapper>
        </ProjectCardWrapper>

        <TitleDescriptionWrapper>
          <TitleCard>{name}</TitleCard>
          <ParagraphCard>{description}</ParagraphCard>
        </TitleDescriptionWrapper>

        <TagsWrapper>
          {tags.map((tag) => (
            <ParagraphTag
              key={`${name}-${tag.name}`}
              className={`${tag.color}`}
            >
              #{tag.name}
            </ParagraphTag>
          ))}
        </TagsWrapper>
      </StyledTilt>
    </motion.div>
  );
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
