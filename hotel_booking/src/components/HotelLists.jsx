import React from "react";
import { Flex, Box, Grid } from "@chakra-ui/react";
import ListLeftSide from "./ListLeftSIde";
import HotelList from "./HotelList";

const HotelLists = () => {
  return (
    <>
      <Flex padding={"0px 80px"} marginTop="20px">
        <Box flex="0.5">
          <ListLeftSide />
        </Box>
        <Box flex="1">
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
          <HotelList />
        </Box>
      </Flex>
    </>
  );
};

export default HotelLists;
