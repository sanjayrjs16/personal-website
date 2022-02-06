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
        <Box marginLeft={"4rem"}>
          <Heading mb={4}>
            Hi, I`&aposm<span className={styles.animateCharcter}> Sanjay</span>
          </Heading>

          <Text fontSize="4xl">
            I`&aposm a web developer building with React & Node.
          </Text>
          <Text fontSize="3xl">
            Currently exploring web3 world esp NFTs & De-Fi.
          </Text>
          <Text fontSize="3xl">
            I`&aposm trying to do my part in building the &quotInternet of
            value&quot
          </Text>
        </Box>
      </Flex>
      <Flex color="white">
        <Box borderRadius={"100%"}>
          <Img
            borderRadius="full"
            boxSize="350px"
            src={"./sanjay.jpeg"}
            alt="Dan Abramov"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
