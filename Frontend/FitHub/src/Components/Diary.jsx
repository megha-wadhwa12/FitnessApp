import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { UserContext } from "../Context";
import foodjson from "./../data.json";
import userData from "./../user.json";

const Diary = () => {
  const username = "spjyotiranjan";
  const [user, setUser] = useState({});
  const [macros, setMacros] = useState({});
  const setDetails = (user, foodData) => {
    let details = {
      protein: 67,
      fat: 23,
      carbs: 56,
      calGained: 875,
      calLosed: 134,
    };
    console.log(user.Exercises);
    // const calLosed = user.Exercises.reduce((total,num)=>total + num,0)

    // user.foodIntake.forEach((item) => {
    //   foodjson.map((e) => {
    //     if (e.name === item) {
    //       details = {
    //         fat: fat + e.fat,
    //         protein: protein + e.protein,
    //         carbs: carbs + e.carbs,
    //         calLosed: calLosed,
    //         calGained: calGained + e.calories
    //       };
    //     }
    //   });
    // });
    // console.log(details);
    setMacros(details);
  };
  useEffect(() => {
    console.log(userData);
    userData.forEach((e) => {
      if (e.Username === username) {
        setUser(e);
      }
    });
  }, []);
  useEffect(() => {
    setDetails(user, foodjson);
  }, [user]);
  return (
    <Box
      width={"90vw"}
      height={"90vh"}
      bgColor={"teal"}
      border={"2px solid grey"}
      m={"auto"}
      borderRadius={"lg"}
      p={"2vw"}
    >
      <VStack spacing={'1vw'}>
        <VStack>
          <Heading color={"white"} fontSize={"2vw"} mb={"1vw"}>
            Calories Remaining
          </Heading>
          <Flex
            justify={"space-between"}
            w={"90%"}
            margin={"auto"}
            border={"1px solid grey"}
            p={"0.5vw"}
            borderRadius={"lg"}
          >
            <Flex direction={"column"} align={"center"}>
              <Text color={"white"} fontSize={"1.2vw"}>
                {user.Goal}
              </Text>
              <Text color={"#00000095"}>Goal</Text>
            </Flex>
            <Text color={"white"} fontSize={"1.5vw"}>
              {" "}
              -{" "}
            </Text>
            <Flex direction={"column"} align={"center"}>
              <Text color={"white"} fontSize={"1.2vw"}>
                {macros.calGained}
              </Text>
              <Text color={"#00000095"}>Food</Text>
            </Flex>
            <Text color={"white"} fontSize={"1.5vw"}>
              {" "}
              +{" "}
            </Text>
            <Flex direction={"column"} align={"center"}>
              <Text color={"white"} fontSize={"1.2vw"}>
                {macros.calLosed}
              </Text>
              <Text color={"#00000095"}>Exercise</Text>
            </Flex>
            <Text color={"white"} fontSize={"1.5vw"}>
              {" "}
              ={" "}
            </Text>
            <Flex direction={"column"} align={"center"}>
              <Text color={"white"} fontSize={"1.2vw"} fontWeight={"bold"}>
                {user.Goal - macros.calGained + macros.calLosed}
              </Text>
              <Text color={"#00000095"}>Remaining</Text>
            </Flex>
          </Flex>
        </VStack>
      </VStack>
      <VStack>

      </VStack>
    </Box>
  );
};

export default Diary;
