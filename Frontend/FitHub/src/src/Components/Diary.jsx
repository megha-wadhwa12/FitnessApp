import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import { UserContext } from "../Context";
import foodjson from "./../data.json";
import userData from "./../user.json";

const Diary = () => {
  const username = "spjyotiranjan";
  const [user, setUser] = useState({});
  const [activity, setactivity] = useState({});
  const [UserUpdated, setUserUpdated] = useState(false);
  const setDetails = (user, foodData) => {
    let details = {
      protein: 67,
      fat: 23,
      carbs: 80,
      calGained: 875,
      calLosed: 134,
      stepCount: 5503,
    };
    console.log(user);
    // console.log(user);
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
    setactivity(details);
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
    setUserUpdated(true);
  }, [user]);
  return (
    <Flex
      direction={"column"}
      w={"100vw"}
      // h={"100vh"}
      padding={"3vw"}
    >
      <Flex padding={"1vw"} w={"100%"} h={"50vh"}>
        <Flex
          borderRadius={"lg"}
          border={"1px solid white"}
          w={"32%"}
          p={"1vw"}
          mr={"1%"}
          boxShadow={"0 0 1vw #00000025"}
        >
          <Flex
            direction={"column"}
            h={"100%"}
            w={"100%"}
            justify={"space-between"}
          >
            <Flex direction={"column"} align={"start"}>
              <Heading textAlign={"left"}>Calories</Heading>
              <Text>Remaining = Goal - Food + Exercise</Text>
            </Flex>
            <Flex w={"100%"} justify={"space-between"} align={"center"}>
              <CircularProgress
                capIsRound
                value={
                  ((user.Goal - (activity.calGained + activity.calLosed)) /
                    user.Goal) *
                  100
                }
                size={"14vw"}
              >
                <CircularProgressLabel>
                  <Text fontSize={"3vw"}>
                    {user.Goal - (activity.calGained + activity.calLosed)}{" "}
                    <Text mt={"-0.5vw"} fontSize={"1.2vw"}>
                      kcal
                    </Text>
                  </Text>
                  <Text fontSize={"1.5vw"}>Remaining</Text>
                </CircularProgressLabel>
              </CircularProgress>
              <Flex direction={"column"} align={"start"}>
                <Flex direction={"column"} mb={"0.5vw"}>
                  <Text fontWeight={"bold"} fontSize={"1.5vw"}>
                    Goal Calories
                  </Text>
                  <Text fontSize={"1.2vw"}>{user.Goal} kcal</Text>
                </Flex>
                <Flex direction={"column"} mb={"0.5vw"}>
                  <Text fontWeight={"bold"} fontSize={"1.5vw"}>
                    Calories Intake
                  </Text>
                  <Text fontSize={"1.2vw"}>{activity.calGained} kcal</Text>
                </Flex>
                <Flex direction={"column"} mb={"0.5vw"}>
                  <Text fontWeight={"bold"} fontSize={"1.5vw"}>
                    Physical Activities
                  </Text>
                  <Text fontSize={"1.2vw"}>{activity.calLosed} kcal</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          borderRadius={"lg"}
          border={"1px solid white"}
          w={"33%"}
          p={"1vw"}
          mr={"1%"}
          boxShadow={"0 0 1vw #00000025"}
        >
          <Flex direction={"column"} justify={"space-between"}>
            <Flex direction={"column"} align={"left"} w={"100%"}>
              <Heading mb={"1.7vw"}>Macros</Heading>
              <Flex justify={"space-between"}>
                <Text fontSize={"1.5vw"} fontWeight={"bold"} mb={"0.5vw"}>
                  Protein
                </Text>
                {UserUpdated && (
                  <Text>
                    {activity.protein}g/{user.MacrosGoal.protein}g
                  </Text>
                )}
              </Flex>
              {UserUpdated && (
                <Progress
                  inlineSize={"28vw"}
                  borderRadius={"1vw"}
                  value={(activity.protein / user.MacrosGoal.protein) * 100}
                />
              )}
            </Flex>
            <Flex direction={"column"} align={"left"} w={"100%"}>
              <Flex justify={"space-between"}>
                <Text fontSize={"1.5vw"} fontWeight={"bold"} mb={"0.5vw"}>
                  Fats
                </Text>
                {UserUpdated && (
                  <Text>
                    {activity.fat}g/{user.MacrosGoal.fat}g
                  </Text>
                )}
              </Flex>
              {UserUpdated && (
                <Progress
                  inlineSize={"28vw"}
                  borderRadius={"1vw"}
                  value={(activity.protein / user.MacrosGoal.fat) * 100}
                />
              )}
            </Flex>
            <Flex direction={"column"} align={"left"} w={"100%"}>
              <Flex justify={"space-between"}>
                <Text fontSize={"1.5vw"} fontWeight={"bold"} mb={"0.5vw"}>
                  Carbohydrate
                </Text>
                {UserUpdated && (
                  <Text>
                    {activity.carbs}g/{user.MacrosGoal.carbs}g
                  </Text>
                )}
              </Flex>
              {UserUpdated && (
                <Progress
                  inlineSize={"28vw"}
                  borderRadius={"1vw"}
                  value={(activity.protein / user.MacrosGoal.carbs) * 100}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          borderRadius={"lg"}
          border={"1px solid white"}
          direction={"column"}
          w={"33%"}
          p={"1vw"}
          boxShadow={"0 0 1vw #00000025"}
        >
          <Heading mb={"1.7vw"}>Steps</Heading>
          <Flex>
            <CircularProgress
              capIsRound
              value={(activity.stepCount / user.stepGoal) * 100}
              size={"14vw"}
              mr={"2vw"}
            >
              <CircularProgressLabel>
                <Text fontSize={"3vw"}>
                  {user.stepGoal - activity.stepCount}
                </Text>
                <Text fontSize={"1.5vw"}>Remaining</Text>
              </CircularProgressLabel>
            </CircularProgress>
            <Flex direction={"column"} justify={"space-between"} align={"left"}>
              <Flex direction={"column"}>
                <Text fontSize={"1.5vw"} fontWeight={"bold"}>
                  Steps
                </Text>
                <Text fontSize={"1.2vw"}>{activity.stepCount} steps</Text>
              </Flex>
              <Flex direction={"column"}>
                <Text fontSize={"1.5vw"} fontWeight={"bold"}>
                  Total Distance
                </Text>
                <Text fontSize={"1.2vw"}>
                  {(activity.stepCount * 0.0008).toFixed(2)} Kms
                </Text>
              </Flex>
              <Flex direction={"column"}>
                <Text fontSize={"1.5vw"} fontWeight={"bold"}>
                  Goal
                </Text>
                <Text fontSize={"1.2vw"}>{user.stepGoal} steps</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex w={"100% - 3vw"} h={"20vh"} my={'2vw'} mx={'1vw'} borderRadius={'lg'} boxShadow={'0 0 1vw #00000025'}></Flex>
    </Flex>
  );
};

export default Diary;
