import { Flex, Heading, Text, Image, Link } from "@chakra-ui/react"; // Importing Chakra UI components
import React from "react";
import Theme from "./Theme"; // Importing custom theme
import CopyrightIcon from "./../assets/CopyrightIcon.png"; // Importing copyright icon
import GmailIcon from "./../assets/GmailIcon.png"; // Importing gmail icon
import GithubIcon from "./../assets/Github.png"; // Importing Github icon

const Footer = () => {
  return (
    <>
      {/* Footer section */}
      <Flex
        backgroundColor={"#1E1E1E"}
        // color={Theme.colors.secondary[500]}
        color={"white"}
        px={10}
        pt={"70px"}
        textAlign={"left"} // Align text to left
        fontSize={"16px"}
        gap={"140px"}
        justifyContent={"center"}
        py={20}
      >
        {/* Section: More About Weird Wardrobe */}
        <Flex flexDirection="column">
          <Heading size={"md"} mb={5} color={Theme.colors.primary[100]}>
            More About FitHub
          </Heading>
          <Text width={290}>
            FitHub is a prototype designed to promote healthy living and empower
            individuals to track their fitness journeys without conforming to
            modern beauty standards. The platform encourages users to focus on
            holistic well-being and long-term health goals rather than just
            physical appearance.
          </Text>
        </Flex>
        {/* Section: Stay Connected */}
        <Flex flexDirection="column">
          <Heading size={"md"} mb={5} textAlign={"center"} color={Theme.colors.primary[100]}>
            Stay Connected
          </Heading>
          <Flex direction={"column"} gap={5}>
            <Flex alignItems={"center"} gap={6}>
              <Image src={GmailIcon} width={"30px"} height={"30px"} />
              <Text>meghawadhwa20@gmail.com</Text>
            </Flex>{" "}
            <Flex alignItems={"center"} gap={6}>
              <Image src={GmailIcon} width={"30px"} height={"30px"} />
              <Text>myselfshivangi08@gmail.com</Text>
            </Flex>{" "}
            <Flex alignItems={"center"} gap={6}>
              <Image src={GmailIcon} width={"30px"} height={"30px"} />
              <Text>me.rajashreeguha@gmail.com</Text>
            </Flex>{" "}
            <Flex alignItems={"center"} gap={6}>
              <Image src={GmailIcon} width={"30px"} height={"30px"} />
              <Text>sp577152@gmail.com</Text>
            </Flex>
          </Flex>
        </Flex>
        {/* Section: Contact Information */}
        <Flex flexDirection="column" gap={6}>
          <Flex alignItems={"center"}>
          <Heading size={"md"} mb={5} color={Theme.colors.primary[100]}>
            Contact Us on GitHub
          </Heading>
          </Flex>
          <Flex gap={4}>
          <Image src={GithubIcon} width={"40px"} height={"40px"} />
            <Link href={"https://github.com/megha-wadhwa12"}>
              megha_wadhwa12
            </Link>
          </Flex>
          <Flex gap={4}>
          <Image src={GithubIcon} width={"40px"} height={"40px"} />
            <Link href={"https://github.com/shivangi-jain-08"}>
              shivangi-jain-08
            </Link>
          </Flex>
          <Flex gap={4}>
          <Image src={GithubIcon} width={"40px"} height={"40px"} />
            <Link href={"https://github.com/rajashree-guha"}>
              rajashree-guha
            </Link>
          </Flex>
          <Flex gap={4}>
          <Image src={GithubIcon} width={"40px"} height={"40px"} />
            <Link href={"https://github.com/spjyotiranjan"}>spjyotiranjan</Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
