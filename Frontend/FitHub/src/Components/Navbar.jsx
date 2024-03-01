import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./../assets/FitHubLogo.png";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <div>
      <Flex py={5} px={20}>
        <Image src={Logo} alt="logo" width={"90px"} height={"50px"}/>
        <Box
          m={"auto"}
          color={Theme.colors.primary[100]}
          fontFamily="pages"
          fontSize="md"
          display={{ base: "none", md: "block" }}
          mt={1}
        >
          <Link href={"/"} mr="5">
            HOME
          </Link>
          <Link href={"/about"} mr="5">
            ABOUT US
          </Link>
          <Link href={"/contact"} mr="5">
            CONTACT US
          </Link>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="text-base">
              FEATURES
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Calories Tracker</a>
              </li>
              <li>
                <a>Personalised Dashboard</a>
              </li>
              <li>
                <a>Fitness Goals</a>
              </li>
              <li>
                <a>Activity Logger</a>
              </li>
            </ul>
          </div>
        </Box>
        {/* Login button */}
        <Button
          color="white"
          bg={Theme.colors.primary[100]}
          borderWidth="2px"
          borderColor={Theme.colors.primary[100]}
          borderRadius="4px"
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
          LOGIN
        </Button>
      </Flex>
    </div>
  );
};

export default Navbar;
