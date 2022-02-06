import React from "react";
import Image from "next/image";
import profilePic from "../../public/sanjay.jpeg";
import avatar from "../../public/avatar.png";
import styles from "../../styles/Home.module.css";
import { HStack, useTheme, Img } from "@chakra-ui/react";
import {
  Flex,
  Spacer,
  Text,
  Center,
  Square,
  Box,
  Heading,
  Circle,
  Container,
} from "@chakra-ui/react";

import {
  Github,
  Instagram,
  Twitter,
  Email,
  LinkedIn,
  YouTube,
} from "../assets/socials/socialMediaIcons";

const Header = () => {
  const theme = useTheme();
  return (
    <Flex
      background="black"
      className={styles.headerFlex}
      justifyContent={"space-around"}
      flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
    >
      <Flex justifyContent={"space-around"}>
        <Flex
          color="black"
          direction="column"
          margin={"5px"}
          justifyContent={"space-between"}
        >
          <Square bg="white" size="50px" borderRadius={"60px"}>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:sanjay.rajesh@outlook.com"
            >
              <Email />
            </a>
          </Square>
          <Square bg="white" size="50px" borderRadius={"60px"}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sanjayrjs16"
            >
              <Github />
            </a>
          </Square>
          <Square bg="white" size="50px" borderRadius={"60px"}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/san_jay.r_/"
            >
              <Instagram />
            </a>
          </Square>
          <Square bg="white" size="50px" borderRadius={"60px"}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/0xsanJ"
            >
              <Twitter />
            </a>
          </Square>
          <Square bg="white" size="50px" borderRadius={"60px"}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sanjay-rajesh/"
            >
              <LinkedIn />
            </a>
          </Square>
        </Flex>
        <Box marginLeft={["1rem", "2rem", "3rem", "5rem"]}>
          <Heading mb={4} size="xl">
            Hi, I&#x27;m
          </Heading>
          <Heading mb={4} fontSize={["1rem", "2rem", "3rem", "5rem"]}>
            <span className={styles.animateCharcter}> Sanjay</span>
          </Heading>
          <Text fontSize="4xl">
            I&#x27;m a web developer building with React & Node.
          </Text>
          <Text fontSize="3xl">
            Currently exploring web3 world esp NFTs & De-Fi.
          </Text>
          <Text fontSize="3xl">
            I&#x27;m trying to do my part in building the &quot;Internet of
            value&quot;
          </Text>
        </Box>
      </Flex>
      <Flex color="white">
        <Box borderRadius={"100%"}>
          <Img
            borderRadius="full"
            boxSize="20rem"
            src={"./sanjay.jpeg"}
            alt="Sanjay Rajesh"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
