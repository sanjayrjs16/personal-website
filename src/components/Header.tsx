import React from "react";
// import Image from "next/image";
import profilePic from "../../public/sanjay.jpeg";
import avatar from "../../public/avatar.png";
import styles from "../../styles/Home.module.css";
import { HStack, useTheme } from "@chakra-ui/react";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Image,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import {
  BsGithub,
  BsLinkedin,
  BsPerson,
  BsStackOverflow,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

import {
  Github,
  Instagram,
  Twitter,
  Email,
  LinkedIn,
  YouTube,
  StackOverFlow,
} from "../assets/socials/socialMediaIcons";

const Header = () => {
  const theme = useTheme();
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Box marginLeft={["1rem", "2rem", "3rem", "5rem"]}>
              <Heading size="lg">Hi, I&#x27;m</Heading>
              <Heading mb={2} fontSize={["1rem", "2rem", "3rem", "5rem"]}>
                <span className={styles.animateCharcter}> Sanjay</span>
              </Heading>
              <Text fontSize="3xl" fontFamily={"Caveat"}>
                a software engineer who specialises in frontend engineering. I
                love exploring new tech, mostly by tinkering hobby projects or
                OpenSource work. Beyond software, I make art, travel, am a
                (*budding) chef and enjoy a game of football.
              </Text>
            </Box>
          </Heading>
          <Stack
            align="center"
            justify="space-around"
            direction={{ base: "row", md: "row" }}
          >
            <Link href="mailto:sanjay.rajesh1@outlook.com">
              <IconButton
                aria-label="email"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<MdEmail />}
                _hover={{
                  bg: "blue.500",
                  color: useColorModeValue("white", "gray.700"),
                }}
                // onClick={onCopy}
                isRound
              />
            </Link>

            <Link href="https://github.com/sanjayrjs16">
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<BsGithub />}
                _hover={{
                  bg: "blue.500",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>
            <Link href="https://stackoverflow.com/users/11468488/sanjay">
              <IconButton
                aria-label="stackoverflow"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<BsStackOverflow />}
                _hover={{
                  bg: "blue.500",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>
            <Link href="https://www.youtube.com/@sanjayrjs">
              <IconButton
                aria-label="youtube"
                variant="ghost"
                size="lg"
                icon={<BsYoutube size="28px" />}
                _hover={{
                  bg: "blue.500",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>
            <Link href="https://www.linkedin.com/in/sanjay-rajesh/">
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                icon={<BsLinkedin size="28px" />}
                _hover={{
                  bg: "blue.500",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>
            <Link href="https://www.twitter.com/sanjayrjs">
              <IconButton
                aria-label="twitter"
                variant="ghost"
                size="lg"
                icon={<BsTwitter size="28px" />}
                _hover={{
                  bg: "blue.500",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>
          </Stack>

          {/* <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
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
                href="https://stackoverflow.com/users/11468488/sanjay"
              >
                <StackOverFlow />
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
            <Square bg="white" size="50px" borderRadius={"60px"}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/sanjayrjs"
              >
                <Twitter />
              </a>
            </Square>

            <Square bg="white" size="50px" borderRadius={"60px"}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/sanjay.rjs/"
              >
                <Instagram />
              </a>
            </Square>
          </Stack> */}
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            // width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"contain"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"./sanjay.jpeg"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Header;
