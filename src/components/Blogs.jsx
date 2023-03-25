import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Link,
  Flex,
} from "@chakra-ui/react";

function StatsCard({ title, stat }) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={"black.500"}
      rounded={"lg"}
      alignItems={"center"}
      alignContent={"stretch"}
      alignSelf={"stretch"}
    >
      <StatLabel fontSize={"lg"} fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"} maxW={"300px"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Blogs() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Blogs
      </chakra.h1>
      <Flex justifyContent={"space-evenly"} alignItems={"stretch"}>
        <Link href="https://medium.com/@sanjayrjs16">
          <StatsCard
            title={"Medium"}
            stat={"Cashing In on Caching as a Frontend Engineer"}
          />
        </Link>
        <Link href="https://dev.to/sanjayrjs16">
          <StatsCard
            title={"Dev.to"}
            stat={"Is Proof of Stake (PoS) a game changer ?"}
          />
        </Link>
        <Link href="https://hashnode.com/@sanjayrjs">
          <StatsCard
            title={"Hashnode"}
            stat={"Custom solana faucet usingnextjs"}
          />
        </Link>
      </Flex>
    </Box>
  );
}
