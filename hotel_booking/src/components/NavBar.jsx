import React from "react";
import { Box, Stack, Text, Flex, Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box padding={"10px 100px"}>
      <Flex justifyContent={"space-between"} width="full">
        <Heading as="h4" size="md">
          Hotel Booking
        </Heading>
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="teal">Login</Button>
          <Button colorScheme="teal">Register</Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default NavBar;
