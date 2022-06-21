import React from "react";
import {
  Grid,
  Center,
  Box,
  useColorModeValue,
  Flex,
  Badge,
  Text,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";

const HotelList = () => {
  return (
    <>
      <Center py={6}>
        <Box
          // maxW={"400px"}
          w={"full"}
          //   bg={useColorModeValue("gray.800")}

          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Flex gap={2}>
            <Box flex="0.5">
              <Image
                src="https://www.princehotels.com/wp-content/uploads/2019/04/aboutslider2-1.jpg"
                alt=""
                width="300px"
                height="200px"
              />
            </Box>
            <Box flex="1" p="2">
              <Flex justifyContent={"space-between"}>
                <Box>
                  <Heading as="h3" size="md" pb="1" color={"#319795"}>
                    Tower Street Apartments
                  </Heading>
                  <Text fontSize="small" mb="1" pl="0.5">
                    {" "}
                    500m from center
                  </Text>
                  <Badge
                    rounded="full"
                    px="2"
                    fontSize="0.8em"
                    color="#fff"
                    mb="2"
                    bg="#009933"
                  >
                    Free AirPort Taxi
                  </Badge>
                  <Text fontSize={"sm"} fontWeight="500">
                    Studio, Apartmentwith Air conditioning
                  </Text>
                </Box>

                <Text fontSize="md" fontWeight={"500"}>
                  {" "}
                  Excellent
                </Text>
                <Box
                  bg="#319795"
                  width={"40px"}
                  height="30px"
                  borderRadius={"5px"}
                  textAlign={"center"}
                  color="#fff"
                >
                  <Text mt={1}>9.7</Text>
                </Box>
              </Flex>

              <Flex>
                <Box flex="1.5">
                  <Text fontSize={"small"} pb={"2"}>
                    Entire studio • 1 bathroom • 21m² 1 full bed
                  </Text>
                  <Text color="#009933" fontSize={"sm"} fontWeight="500">
                    Free cancellation
                  </Text>
                  <Text color="#00cc44">
                    You can cancel later, so lock in this great price today!
                  </Text>
                </Box>
                <Box flex="0.5" mt={-4}>
                  <Text textAlign={"end"} fontSize="lg">
                    $112
                  </Text>
                  <Text fontSize="sm" color="gray.600" pb="2">
                    Includes taxes and fees
                  </Text>
                  <Button colorScheme="teal" size="sm" marginLeft={"24px"}>
                    See availability
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default HotelList;
