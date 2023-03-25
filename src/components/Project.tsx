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
          bg={useColorModeValue("white", "gray.900")}
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

          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {description}
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            {gitLink && (
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <a target={"_blank"} rel="noreferrer" href={gitLink}>
                  <Github />
                </a>
              </Badge>
            )}
            {ytLink && (
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <a target={"_blank"} rel="noreferrer" href={ytLink}>
                  <YouTube />
                </a>
              </Badge>
            )}
            {projectLink && (
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                <a target={"_blank"} rel="noreferrer" href={projectLink}>
                  {" "}
                  {/* <Img
                    borderRadius="full"
                    boxSize="50px"
                    src={"./link.png"}
                    alt={title}
                    margin={"0.1rem"}
                  /> */}
                  <LinkIcon />
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
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
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
