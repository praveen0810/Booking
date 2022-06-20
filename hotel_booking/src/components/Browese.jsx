import React from "react";
import { Stack, Box, Heading, Text, Image } from "@chakra-ui/react";

const Browese = () => {
  return (
    <>
      <Stack spacing={8} direaction={"row"}>
        <Box p={3} shadow="md" borderWidth="1px solid #fff">
          <Image
            src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
            alt="cdef"
          />
          <Text mt={4}>diaei</Text>
        </Box>
      </Stack>
    </>
  );
};

export default Browese;
