import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Flex,
  Image as Img,
} from "@chakra-ui/react";

import { LinkIcon } from "@chakra-ui/icons";
import styles from "../../styles/Home.module.css";
import { Github, YouTube } from "../assets/socials/socialMediaIcons";
import {
  BsGithub,
  BsLinkedin,
  BsPerson,
  BsStackOverflow,
  BsTwitter,
  BsYoutube,
  BsLink,
} from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

interface ProjectProps {
  title: string;
  description: string;
  gitLink: string;
  image?: string;
  ytLink?: string;
  projectLink?: string;
  devPostLink?: string;
  techUsed?: string[];
}
const Project = ({
  title,
  gitLink,
  ytLink,
  description,
  projectLink,
  image,
  devPostLink,
  techUsed,
}: ProjectProps) => {
  return (
    <>
      <Center py={6}>
        <Flex
          maxW={"330px"}
          minW={"320px"}
          w={"full"}
          bg={"white"}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          alignContent={"stretch"}
          alignSelf={"stretch"}
        >
          <Avatar
            size={"xl"}
            src={image}
            // @ts-ignore
            alt={"Project image"}
            mb={4}
            pos={"relative"}
            // _after={{
            //   content: '""',
            //   w: 4,
            //   h: 4,
            //   bg: "green.300",
            //   border: "2px solid white",
            //   rounded: "full",
            //   pos: "absolute",
            //   bottom: 0,
            //   right: 3,
            // }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {title}
          </Heading>

          <Text textAlign={"center"} color={"gray.700"} px={3}>
            {description}
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            {gitLink && (
              <Badge px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
                <a target={"_blank"} rel="noreferrer" href={gitLink}>
                  <BsGithub size="32px" />
                </a>
              </Badge>
            )}
            {ytLink && (
              <Badge px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
                <a target={"_blank"} rel="noreferrer" href={ytLink}>
                  <BsYoutube size="32px" />
                </a>
              </Badge>
            )}
            {projectLink && (
              <Badge px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
                <a target={"_blank"} rel="noreferrer" href={projectLink}>
                  <BsLink size="32px" />
                </a>
              </Badge>
            )}
          </Stack>
          <Stack
            mt={8}
            direction={"row"}
            spacing={4}
            wrap={"wrap"}
            justifyContent={"flex-start"}
          >
            {techUsed?.map((item: string) => {
              return (
                <Badge
                  key={item}
                  px={2}
                  py={1}
                  bg={"gray.50"}
                  fontWeight={"400"}
                >
                  {item}
                </Badge>
              );
            })}
          </Stack>
        </Flex>
      </Center>
    </>
  );
};

export default Project;
