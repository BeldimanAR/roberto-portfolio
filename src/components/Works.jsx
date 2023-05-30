import React from "react";
//@ts-ignore
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import styled from "styled-components";
import { experiences } from "../constants";
import { textVariant } from "../constants/motion.js";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ImageCardContainer = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
`;
const CardHeading = styled.h3`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;
const CardPargh = styled.p`
  color: #aaa6c3;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;
const CardUL = styled.ul`
  margin-top: 20px;
  list-style-type: disc;
  margin-left: 20px;
  & > li {
    margin-top: 10px;
  }
`;
const CardLi = styled.li`
  color: #ffffff;
  font-size: 14px;
  padding-left: 4px;
  letter-spacing: 1px;
`;
const Paragraph = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  color: #aaa6c3;
  @media (min-width: 640px) {
    font-size: 18px;
  }
`;
const Heading = styled.h2`
  color: #ffffff;
  font-weight: 900;
  font-size: 30px;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 50px;
  }

  @media (min-width: 768px) {
    font-size: 60px;
  }
`;
const WorksContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <CardContainer>
          <ImageCardContainer
            src={experience.icon}
            alt={experience.company_name}
          />
        </CardContainer>
      }
    >
      <div>
        <CardHeading>{experience.title}</CardHeading>
        <CardPargh>{experience.company_name}</CardPargh>
      </div>

      <CardUL>
        {experience.points.map((point, index) => (
          <CardLi key={`experience-point-${index}`}>{point}</CardLi>
        ))}
      </CardUL>
    </VerticalTimelineElement>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <Paragraph>What I have done so far</Paragraph>
        <Heading>Work Experience.</Heading>
      </motion.div>

      <WorksContainer>
        <VerticalTimeline className="line">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </WorksContainer>
    </>
  );
};

export default Works;
