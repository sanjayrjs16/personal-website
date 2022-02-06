import {
  Box,
  Heading,
  Text,
  Icon,
  Flex,
  Square,
  Circle,
  Img,
} from "@chakra-ui/react";
import React from "react";
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
}
const Project = ({
  title,
  gitLink,
  ytLink,
  description,
  projectLink,
  image,
  devPostLink,
}: ProjectProps) => {
  return (
    <Box className={styles.sliderThumb}>
      <Flex
        direction={"column"}
        alignContent={"center"}
        alignItems={"center"}
        pb={"9rem"}
      >
        <Img borderRadius="full" boxSize="100px" src={image} alt={title} />
        <Heading mb={4}>{title}</Heading>
        <Text fontSize="xl">{description}</Text>

        <Flex justifyContent={"space-between"}>
          {ytLink && (
            <Circle bg="white" size="50px" margin={"0.1rem"}>
              <a target={"_blank"} rel="noreferrer" href={ytLink}>
                <YouTube />
              </a>
            </Circle>
          )}
          {gitLink != "" && (
            <Circle bg="white" size="50px" margin={"0.1rem"}>
              <a target={"_blank"} rel="noreferrer" href={gitLink}>
                <Github />
              </a>
            </Circle>
          )}
          {projectLink && (
            <a target={"_blank"} rel="noreferrer" href={projectLink}>
              {" "}
              <Img
                borderRadius="full"
                boxSize="50px"
                src={"./link.png"}
                alt={title}
                margin={"0.1rem"}
              />
            </a>
          )}
          {devPostLink && (
            <a target={"_blank"} rel="noreferrer" href={devPostLink}>
              {" "}
              <Img
                borderRadius="full"
                boxSize="50px"
                src={"./devpost.jpg"}
                alt={title}
                margin={"0.1rem"}
              />
            </a>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Project;
