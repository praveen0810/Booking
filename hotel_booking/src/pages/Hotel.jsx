import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import { Flex, Box, Grid, Heading, Text } from "@chakra-ui/react";
import HotelLeft from "../components/hotelDetails/HotelLeft";

const Hotel = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Box
        // maxW={"400px"}
        w={"full"}
        padding="10px 100px"
        //   bg={useColorModeValue("gray.800")}

        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Flex gap={2} pb="3">
          <Box flex="0.8">
            <HotelLeft />
          </Box>
          <Box>
            <Heading flex="1" bg="blue">
              Details Right
            </Heading>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Hotel;
