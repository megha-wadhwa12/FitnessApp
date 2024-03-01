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
// import WorkingWomanSide from "./../assets/WorkingWomanSide.png";
import WorkingManSide from "./../assets/WorkingManSide.png";

import Theme from "./Theme";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Flex gap={10} mt={10}>
        <Box mx={40}>
          <Text
            alignSelf="flex-start"
            mt={100}
            color={Theme.colors.primary[100]}
            fontSize={"5xl"}
            width={"380px"}
            textAlign={"left"}
          >
            The only hub for your total fitness !!
          </Text>
          <Button
          color="white"
          bg={Theme.colors.primary[100]}
          borderWidth="2px"
          borderColor={Theme.colors.primary[100]}
          borderRadius="4px"
          mt={10}
          _hover={{
            color: "white",
            bg:Theme.colors.primary[100],
            borderColor: Theme.colors.primary[100],
            boxShadow: useColorModeValue(
              "0px 0.25rem 0.75rem 0px rgb((203,155,133) / 26%)",
              "0px 0.25rem 0.75rem 0px rgb((203,155,133) / 26%)"
            ),
          }}
        >
            Explore...
        </Button>        </Box>
        <Image src={WorkingManSide} width={430}/>
      </Flex>

    </Box>
  );
};

export default Home;
