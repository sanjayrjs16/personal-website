import React from "react";
import Link from "next/link";
import {
  Circle,
  HStack,
  Box,
  Text,
  Heading,
  Flex,
  Container,
} from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import Project from "./Project";

import {
  Github,
  Instagram,
  Twitter,
  Email,
  LinkedIn,
  YouTube,
} from "../assets/socials/socialMediaIcons";
const Projects = () => {
  return (
    <>
      <Heading mb={4} textAlign={"center"}>
        Projects
      </Heading>
      <Container>
        <Flex justifyContent={"center"}>
          <Box>
            <Project
              title="Picturama"
              description="Financing independent cinema through defi"
              image={"./picturama.png"}
              gitLink="https://github.com/picturama-defi"
              ytLink="https://www.youtube.com/watch?v=mnrl5tAp7eE"
              devPostLink="https://devpost.com/software/picturama-defi-financing-independent-cinema"
            />
          </Box>
          <Box>
            <Project
              title="CoronaSafe Chatbot"
              description="Chatbot for Coronasafe Network"
              image={"./Coronasafe-logo.png"}
              gitLink="https://github.com/coronasafe/bot"
              ytLink="https://www.youtube.com/watch?v=A81YflXaZKQ"
            />
          </Box>
          <Box>
            <Project
              title="SpaceX dashboard"
              description="Dashboard for spaceX states"
              image={"./spaceX.jpg"}
              gitLink="https://github.com/sanjayrjs16/spaceX-dashboard-react"
              projectLink="https://thespacexdashboard.netlify.app/launches"
            />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Projects;
