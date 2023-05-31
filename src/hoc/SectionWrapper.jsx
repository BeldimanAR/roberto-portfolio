import { motion } from "framer-motion";
import { staggerContainer } from "../constants/motion.js";
import styled from "styled-components";

const MotionSection = styled(motion.section)`
  padding: 40px 24px;
  @media (min-width: 640px) {
    padding: 64px;
  }
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 0;
`;

const Paragraph = styled.p`
  margin-top: -100px;
  padding-bottom: 100px;
  display: block;
`;

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <MotionSection
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Paragraph id={idName}>&nbsp;</Paragraph>

        <Component />
      </MotionSection>
    );
  };

export default StarWrapper;
