import React from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import WorkingManSide from "./../assets/WorkingManSide.png";
import VectorImage from "./../assets/VectorImageHome.png";

import Theme from "./Theme";
import Navbar from "./Navbar";
import About from "./About";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Flex gap={0} bg={Theme.colors.primary[100]} pt={5}>
        <Box ml={"180px"}>
          <Text
            // alignSelf="flex-start"
            mt={100}
            // color={Theme.colors.primary[100]}
            color={"white"}
            fontSize={"5xl"}
            width={"420px"}
            textAlign={"left"}
            fontFamily={'explore'}
          >
            The only hub for your total fitness !!
          </Text>
          <Button
            color={Theme.colors.primary[100]}
            bg="white"
            borderWidth="2px"
            borderColor={Theme.colors.primary[100]}
            borderRadius="4px"
            mt={10}
            _hover={{
              color: "white",
              bg: Theme.colors.primary[100],
              borderColor: Theme.colors.primary[100],
              boxShadow: useColorModeValue(
                "0px 0.25rem 0.75rem 0px rgb((203,155,133) / 26%)",
                "0px 0.25rem 0.75rem 0px rgb((203,155,133) / 26%)"
              ),
            }}
          >
            Explore Now
          </Button>
        </Box>
        <Image src={VectorImage} width={600} height={500}/>
      </Flex>
      <About />
    </Box>
  );
};


export default Home;
