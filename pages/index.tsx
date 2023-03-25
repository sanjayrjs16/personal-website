import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Experience from "../src/components/experience";
import Header from "../src/components/Header";
import Projects from "../src/components/Projects";
import Link from "next/link";
import { Heading, Box, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sanjay Rajesh</title>
        <meta
          name="description"
          content="Personal portfolio of Sanjay Rajesh - frontend developer, web3 dev, Hobbyist digital artist making in love with NFTs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Projects />

        {/* <Experience /> */}
      </main>
      <footer className={styles.footer}>
        <Box>
          <Text fontSize="2xl" textAlign={"center"}>
            I am also a hobbyist digital artist. While you&#x27;re here, check
            out a few of my works :)
          </Text>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={"https://www.instagram.com/sanjay.rjs/"}
          >
            <>
              <Box
                className={styles.sliderThumb}
                bg="url('./avatar.png')"
                bgSize={"contain"}
              ></Box>
            </>
          </a>
        </Box>
      </footer>
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
