import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { Flex, Spacer, Text, Center, Square, Box } from "@chakra-ui/react";

import {
  Github,
  Instagram,
  Twitter,
  Email,
} from "../assets/socials/socialMediaIcons";
const Experience = () => {
  return (
    <Box mb={"2rem"}>
      <Heading textAlign={"center"} mb="2rem" mt={"5rem"}>
        {" "}
        Work Experience
      </Heading>
      <Flex
        color="black"
        direction={"column"}
        justifyContent={"space-around"}
        alignContent={"center"}
        alignItems={"center"}
        justifyItems={"stretch"}
      >
        <Flex
          maxW={"30rem"}
          borderRadius={"10px"}
          padding={"2rem"}
          display="flex"
          flexDirection={"column"}
          backgroundColor="white"
          justifyContent={"space-between"}
          alignContent="center"
          mb={"2rem"}
        >
          <Heading as="h3" fontSize="2xl" mb={"0.8rem"}>
            🏢 Tata Consultancy Services
          </Heading>
          <Text
            fontSize="md"
            color={"brand.grey1"}
            textAlign="center"
            mb={"0.8rem"}
          >
            📅 July, 2019 - May, 2021
          </Text>
          <Heading as="h5" fontSize="md" color={"black"} mb={"0.8rem"}>
            👔Assistant Systems Engineer (Frontend & automation)
          </Heading>
          <ul>
            <li>
              <Text fontSize="lg" textAlign={"left"}>
                Build UI of insurance and banking applications for US clients
                Aon Plc. & USbank.
              </Text>
            </li>
            <li>
              <Text fontSize="lg" textAlign={"left"}>
                Build automation frameworks to test and validate UI and APIs
              </Text>
            </li>
          </ul>
        </Flex>

        <Flex
          maxW={"30rem"}
          borderRadius={"10px"}
          padding={"2rem"}
          display="flex"
          flexDirection={"column"}
          backgroundColor="white"
          justifyContent={"space-between"}
          alignContent="center"
          mb={"2rem"}
        >
          <Heading as="h3" fontSize="2xl" textAlign={"center"} mb={"0.8rem"}>
            🏢 Engati Technologies Pvt. Ltd.
          </Heading>
          <Text
            fontSize="md"
            color={"brand.grey1"}
            textAlign="center"
            mb={"0.8rem"}
          >
            📅 May, 2021 - Dec, 2021
          </Text>
          <Heading
            as="h5"
            fontSize="md"
            color={"black"}
            textAlign={"center"}
            mb={"0.8rem"}
          >
            👔 Frontend Developer
          </Heading>
          <ul>
            <li>
              <Text fontSize="lg" textAlign={"left"}>
                Migrate one of the projects from legacy react to Next.js
              </Text>
            </li>
            <li>
              <Text fontSize="lg" textAlign={"left"}>
                Build our features to portal
              </Text>
            </li>
            <li>
              <Text fontSize="lg" textAlign={"left"}>
                Optimise website speed & performance
              </Text>
            </li>
          </ul>
        </Flex>

        <Flex
          maxW={"30rem"}
          borderRadius={"10px"}
          padding={"2rem"}
          display="flex"
          flexDirection={"column"}
          backgroundColor="white"
          justifyContent={"space-between"}
          alignContent="center"
          mb={"2rem"}
        >
          <Heading as="h3" fontSize="2xl" textAlign="center" mb={"0.8rem"}>
            🏢 Fingent Global Solutions
          </Heading>
          <Text
            fontSize="md"
            color={"brand.grey1"}
            textAlign="center"
            mb={"0.8rem"}
          >
            📅 Jan, 2022 - present
          </Text>
          <Heading
            as="h5"
            fontSize="md"
            color={"black"}
            textAlign="center"
            mb={"0.8rem"}
          >
            👔 Frontend developer
          </Heading>
          <ul>
            <li>
              <Text fontSize="lg" textAlign={"left"}>
                Working on a print on demand ecommerce application
              </Text>
            </li>
          </ul>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Experience;
