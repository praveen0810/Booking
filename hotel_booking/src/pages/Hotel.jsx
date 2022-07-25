import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import { Flex, Box, Grid, Heading, Text, Stack } from "@chakra-ui/react";
import HotelLeft from "../components/hotelDetails/HotelLeft";
import Map from "../components/hotelDetails/Map";
import SearchLocatin from "../components/hotelDetails/SearchLocatin";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const Hotel = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { data, laoding } = useFetch(`/hotels/find/${path}`);

  console.log("data", data);
  const [selectPosition, setSelectPosition] = useState(null);
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
        <Flex gap={5} pb="3">
          <Box flex="0.8">
            <HotelLeft data={data} />
          </Box>
          <Box flex="1">
            <Box
              position={"absolute"}
              top="10px"
              left="450px"
              zIndex={"1"}
              width="600px"
            >
              <SearchLocatin
                selectPosition={selectPosition}
                setSelectPosition={setSelectPosition}
              />
            </Box>

            <Map selectPosition={selectPosition} />
            <Box
              mt={4}
              mb="10px"
              alignItems="end"
              p={2}
              ml={370}
              width="350px"
              height="300px"
              background="#319795"
            >
              <Heading as="h3" fontSize={"lg"} color="#fff">
                Perfect for 9-night stay!
              </Heading>
              <Text fontSize={"sm"} color="#fff">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </Text>
              <Stack
                spacing={3}
                direction="row"
                align={"center"}
                justifyContent="flex-end"
              >
                <Heading as="h2" color="#fff" fontSize={"xl"}>
                  $945
                </Heading>
                <Text color="#fff">(9 nights)</Text>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Hotel;
