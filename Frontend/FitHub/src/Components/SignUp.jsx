import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    VStack,
    Image,
    Text,
    Heading,
} from '@chakra-ui/react';

const SignUp = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState:{errors}
    } = useForm();

    return (
        <Box id='signup'>
            <Flex align="center" justify="between" h="100vh">
                <Image src="https://img.freepik.com/free-photo/group-young-people-training-gym-indoors-maintaining-sportive-lifestyle_155003-45877.jpg?t=st=1709232838~exp=1709236438~hmac=d90624c2cd9abba27b17e847c2c467f599eca7862af4dadc6bfdf5d4d02453a6&w=1060" height="100vh" width="65vw" />
                <Box rounded="md" w="50vw" p="0 60px">

                    <Box>
                        <Heading fontWeight="700" fontSize="40px" pb="10px" color="rgb(52, 91, 96)">Create your Account</Heading>
                        <Text pb="30px">Fill in the form</Text>
                        <form onReset={reset}>
                            <VStack spacing={4} align="flex-start">
                                <FormControl >
                                    <FormLabel htmlFor="Name">Name</FormLabel>
                                    <Input {...register("Name", { required: 'Name is required' })} placeholder="Enter your First Name" textAlign="left" type="text" variant="filled" />
                                    <FormErrorMessage>{errors.Name?.message}</FormErrorMessage>
                                    
                                </FormControl>
                                <FormControl >
                                    <FormLabel htmlFor="Username">Username</FormLabel>
                                    <Input {...register("Username", { required: 'Username is required' })} placeholder="Enter your Username" textAlign="left" type="text" variant="filled" />
                                    <FormErrorMessage>{errors.Username?.message}</FormErrorMessage>
                                </FormControl>
                                <FormControl >
                                    <FormLabel htmlFor="Email_id">Email Id</FormLabel>
                                    <Input {...register("Email_id", { required: 'Email id is required' })} placeholder="Enter your Email id" textAlign="left" type="email" variant="filled" />
                                    <FormErrorMessage>{errors.Email_id?.message}</FormErrorMessage>
                                </FormControl>
                                <FormControl >
                                    <FormLabel htmlFor="Password">Password</FormLabel>
                                    <Input
                                        {...register("Password", {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must contain at least 6 characters',
                                            },pattern:{
                                                value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/,
                                                message:"Password must contain atleast 1 lowercase letter, 1 uppercase letter , 1 digit and 1 special character"
                                            }
                                        })}
                                        placeholder="Enter your Password" textAlign="left" type="password"
                                        
                                        variant="filled"
                                        autoComplete='off'
                                        />
                                      <FormErrorMessage>{errors.Password?.message}</FormErrorMessage>
                                </FormControl>
                                <Button textAlign="left" type="submit" backgroundColor="rgb(84, 152, 161)" color="white" width="full">
                                    Sign Up
                                </Button>
                                <Button textAlign="left" type="reset" colorScheme="gray" width="full">
                                    Reset
                                </Button>
                            </VStack>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default SignUp;
