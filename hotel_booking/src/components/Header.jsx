import React from "react";
import {
  Heading,
  Stack,
  Icon,
  Grid,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { FaBed } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import { TbHotelService } from "react-icons/tb";

const Header = () => {
  return (
    <div className="header">
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
          <Icon as={FaTaxi} marginLeft="4px" color="#fff" w={5} h={5} />
          <Text fontSize="md" fontWeight={600} color="#fff">
            FaBed
          </Text>
        </Stack>
        <Stack direction="row" align="center" cursor="pointer">
          <Icon as={FaTaxi} marginLeft="4px" color="#fff" w={5} h={5} />
          <Text fontSize="md" fontWeight={600} color="#fff">
            Airport taxis
          </Text>
        </Stack>
      </Stack>
      <Box>
        <Heading as="h3" size="lg" paddingLeft=" 30px" color="#fff">
          A lifetime of discounts? It's Genius.
        </Heading>
        <Text width={"40%"} color="#fff" padding={"10px 30px"} fontSize="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa error
          cupiditate sequi eveniet enim nihil ratione, consectetur a, provident
          recusandae modi mollitia qui! Cumque quaerat maiores consectetur sint
          pariatur delectus.
        </Text>
        <Stack
          flexDirection="row"
          alignItems="center"
          marginTop="40px"
          marginLeft="20px"
        >
          <Icon
            as={TbHotelService}
            w="10"
            h="10"
            color="#fff"
            borderRadius="50%"
            border="1px solid #fff"
          />
          <Text
            color="green.700"
            marginLeft="20px"
            fontWeight="600"
            fontSize="lg"
          >
            Warwick Hotels & Resorts
          </Text>
        </Stack>
      </Box>
      <Button colorScheme="whiteAlpha" margin="30px 20px">
        SignIn/Register
      </Button>
    </div>
  );
};

export default Header;
