import React from "react";

import styles from "../../styles/Home.module.css";
import { Center, HStack, useTheme } from "@chakra-ui/react";

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
  Button,
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

const Header = () => {
  const theme = useTheme();
  function downloadResume() {
    const a = document.createElement("a");
    const url = "./Sanjay_Rajesh_Resume_2023_.pdf";
    a.href = url;
    // @ts-ignore
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
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
            wrap={"wrap"}
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
            <Link
              href="https://www.linkedin.com/in/sanjay-rajesh/"
              target={"_blank"}
            >
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
          <Center>
            <Button onClick={downloadResume}>Download resume</Button>
          </Center>
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
              alt={"Sanjay Rajesh Image"}
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
