import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../constants/motion.js";
import styled from "styled-components";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  overflow: hidden;
  align-items: center;
  /* max-height: 95vh; */
  @media (min-width: 1280px) {
    margin-top: 48px;
    flex-direction: row;
  }
`;
const CustomMotionDiv = styled(motion.div)`
  flex: 0.75;
  padding: 32px;
  border-radius: 16px;
  --tw-bg-opacity: 1;
  background-color: rgb(16 13 37 / var(--tw-bg-opacity));
`;
const CustomParagraph = styled.p`
  font-size: 18px;
  @media (max-width: 640px) {
    font-size: 14px;
  }
  color: #aaa6c3;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;
const CustomHeading = styled.h3`
  color: #ffffff;
  font-weight: 900;
  font-size: 30px;
  @media (min-width: 640px) {
    font-size: 40px;
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 1024px) {
    font-size: 60px;
  }
`;
const StyledForm = styled.form`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const FlexColumnLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
const WhiteMediumText = styled.span`
  color: white;
  font-weight: medium;
  margin-bottom: 16px;
`;
const StyledInput = styled.input`
  --tw-bg-opacity: 1;
  background-color: rgb(21 16 48 / var(--tw-bg-opacity));
  padding: 1rem 1.5rem;
  color: white;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  font-weight: 500;

  ::placeholder {
    --tw-text-opacity: 1;
    color: rgb(170 166 195 / var(--tw-text-opacity));
  }
`;
const StyledTextArea = styled.textarea`
  --tw-bg-opacity: 1;
  background-color: rgb(21 16 48 / var(--tw-bg-opacity));
  padding: 1rem 1.5rem;
  color: white;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  font-weight: 500;
  ::placeholder {
    --tw-text-opacity: 1;
    color: rgb(170 166 195 / var(--tw-text-opacity));
  }
`;
const StyledButton = styled.button`
  background-color: #151030;
  padding: 12px 32px;
  border-radius: 12px;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: #050816;
  }
`;

const AnimatedDiv = styled(motion.div)`
  height: 350px;
  @media (min-width: 1280px) {
    height: auto;
    flex: 1 1 0%;
  }
  @media (min-width: 768px) {
    height: 550px;
  }
`;

const Contact = () => {
  //template_6rh04x7
  //service_0ak70hc
  //5xCpKbFVT4iLbIkUJ
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0ak70hc",
        "template_6rh04x7",
        {
          from_name: form.name,
          to_name: "Roberto Beldiman",
          from_email: form.email,
          to_email: "roberto.beldiman10@gmail.com",
          message: form.message,
        },
        "5xCpKbFVT4iLbIkUJ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <ContactWrapper>
      <CustomMotionDiv variants={slideIn("left", "tween", 0.2, 1)}>
        <CustomParagraph>Get in touch</CustomParagraph>
        <CustomHeading className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </CustomHeading>

        <StyledForm ref={formRef} onSubmit={handleSubmit}>
          <FlexColumnLabel>
            <WhiteMediumText>Your Name</WhiteMediumText>
            <StyledInput
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
            />
          </FlexColumnLabel>
          <FlexColumnLabel>
            <WhiteMediumText>Your email</WhiteMediumText>
            <StyledInput
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
            />
          </FlexColumnLabel>
          <FlexColumnLabel>
            <WhiteMediumText>Your Message</WhiteMediumText>
            <StyledTextArea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
            />
          </FlexColumnLabel>

          <StyledButton type="submit">
            {loading ? "Sending..." : "Send"}
          </StyledButton>
        </StyledForm>
      </CustomMotionDiv>

      <AnimatedDiv variants={slideIn("right", "tween", 0.2, 1)}>
        <EarthCanvas />
      </AnimatedDiv>
    </ContactWrapper>
  );
};

export default SectionWrapper(Contact, "contact");
