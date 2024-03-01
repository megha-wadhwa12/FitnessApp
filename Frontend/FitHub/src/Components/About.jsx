import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import Theme from "./Theme";

const About = () => {
  return (
    <>
      <Box>
        {/* Title */}
        <Center
          mt={20}
          textAlign="center"
          fontSize={"3xl"}
          color={Theme.colors.primary[200]}
          as={"b"}
        >
          Introducing FitHub !!
        </Center>
        {/* Description */}
        <Text textAlign="center" mx={40} mb={50} mt={10}>
        FitHub stands out as a groundbreaking prototype, dedicated to fostering a culture of wellness and enabling users to meticulously monitor their fitness endeavors, free from the constraints of conventional beauty ideals. Emphasizing holistic well-being, the platform inspires individuals to pursue long-term health goals, prioritizing overall wellness above fleeting physical appearances.
        </Text>
      </Box>
    </>
  );
};

export default About;
