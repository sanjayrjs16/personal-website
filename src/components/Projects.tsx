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

const Projects = () => {
  return (
    <>
      <Heading mb={4} textAlign={"center"}>
        Projects
      </Heading>

      <Flex
        justifyContent={"space-around"}
        flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
        alignItems={"stretch"}
      >
        <Project
          title="Picturama"
          description="Financing independent cinema through defi"
          image={"./picturama.png"}
          gitLink="https://github.com/picturama-defi"
          ytLink="https://www.youtube.com/watch?v=mnrl5tAp7eE"
          devPostLink="https://devpost.com/software/picturama-defi-financing-independent-cinema"
          techUsed={["solidity", "node-express", "Next"]}
        />

        <Project
          title="CoronaSafe Chatbot"
          description="Chatbot for Coronasafe Network"
          image={"./Coronasafe-logo.png"}
          gitLink="https://github.com/coronasafe/bot"
          ytLink="https://www.youtube.com/watch?v=A81YflXaZKQ"
          techUsed={["Rasa", "Heroku", "Docker", "Github actions"]}
        />

        <Project
          title="SpaceX dashboard"
          description="Dashboard for spaceX stats"
          image={"./spaceX.jpg"}
          gitLink="https://github.com/sanjayrjs16/spaceX-dashboard-react"
          projectLink="https://thespacexdashboard.netlify.app/launches"
          techUsed={["React-query", "Baseweb-UI"]}
        />

        <Project
          title="Solana Faucet"
          description="Faucet to recieve Solana airdrops on BlockChain test/devnet"
          image={"./Solana_logo.png"}
          gitLink="https://github.com/sanjayrjs16/solana-dev-faucet"
          projectLink="https://stardust-solana-faucet.vercel.app/"
          ytLink="https://www.youtube.com/watch?v=SNEyD8Kn9Xk"
          techUsed={["Phantom", "Next", "web3js"]}
        />
      </Flex>
    </>
  );
};

export default Projects;
