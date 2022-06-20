import React from "react";
import { Box, Heading, Icon, Text, Stack, Image } from "@chakra-ui/react";

import { FaBed } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import { MdOutlineAttractions } from "react-icons/md";
import Namste from "../assets/namaste.gif";

const Banner = () => {
  return (
    <>
      <Box className="hotels_list">
        <Stack direction="row" align="center" padding="50px 30px">
          <Stack
            direction="row"
            align="center"
            width="80px"
            cursor="pointer"
            borderRadius={"20px"}
            border="1px solid #fff"
          >
            <Icon as={FaBed} marginLeft="6px" color="#fff" w={6} h={6} />
            <Text fontSize="md" fontWeight={600} color="#fff">
              Stay
            </Text>
          </Stack>

          <Stack direction="row" align="center" cursor="pointer">
            <Icon as={IoAirplane} marginLeft="4px" color="#fff" w={6} h={6} />
            <Text fontSize="md" fontWeight={600} color="#fff">
              Stay
            </Text>
          </Stack>
          <Stack direction="row" align="center" cursor="pointer">
            <Icon as={AiFillCar} marginLeft="4px" color="#fff" w={6} h={6} />
            <Text fontSize="md" fontWeight={600} color="#fff">
              Car rentals
            </Text>
          </Stack>
          <Stack direction="row" align="center" cursor="pointer">
            <Icon
              as={MdOutlineAttractions}
              marginLeft="4px"
              color="#fff"
              w={5}
              h={5}
            />
            <Text fontSize="md" fontWeight={600} color="#fff">
              Attractions
            </Text>
          </Stack>
          <Stack direction="row" align="center" cursor="pointer">
            <Icon as={FaTaxi} marginLeft="4px" color="#fff" w={5} h={5} />
            <Text fontSize="md" fontWeight={600} color="#fff">
              Airport taxis
            </Text>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          cursor="pointer"
          paddingLeft={"30px"}
        >
          <Heading as={"h3"} color="#fff">
            WelCome To Booking Site{" "}
          </Heading>
          <Image
            width={"100px"}
            height="100px"
            marginBottom={"-30px"}
            src={Namste}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Banner;
