import {
  Box,
  Center,
  Heading,
  Text,
  Image,
  Icon,
  Spacer,
  Stack,
  Flex,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsEye } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";
import Threedots from "react-three-dots";

export default function HighRated({ hotels }) {
  console.log("hotels", hotels);
  return (
    <>
      <Heading
        as="h3"
        size="lg"
        marginLeft={"143px"}
        paddingBottom="10px"
        marginTop={"10px"}
      >
        Top Fetaured
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={2} padding="0px 100px">
        {hotels.length &&
          hotels?.map((item) => (
            <Center py={6}>
              <Box
                maxW={"345px"}
                w={"full"}
                position="relative"
                // bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
              >
                <Box
                  h={"210px"}
                  bg={"gray.100"}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  objectFit="cover"
                  overflow={"hidden"}
                  pos={"relative"}
                >
                  <Image src={item?.photos[0]} />
                </Box>

                <Stack>
                  <Flex
                    position={"absolute"}
                    top="10px"
                    alignItems={"center"}
                    width="90%"
                    justifyContent="space-between"
                  >
                    <Heading as="h5" size="md" color={"#fff"}>
                      {item?.title}
                    </Heading>

                    <Icon
                      as={BsEye}
                      h="8"
                      w="8"
                      color="#fff"
                      cursor={"pointer"}
                    />
                  </Flex>
                </Stack>
                <Heading as={"h5"} size="md" color={"#FF6D79"}>
                  ${item?.cheapestPrice}
                </Heading>
                <Stack direction={"row"} spacing={20} align={"center"}>
                  <Box w="400px">
                    <Text
                      fontSize="sm"
                      fontWeight={"bold"}
                      ellipsizeMode="middle"
                      numberOfLines={2}
                    >
                      Booking ID: {Threedots(item?._id, 9)}
                    </Text>
                    <Text fontSize={"sm"}>{item?.address}</Text>
                  </Box>
                  <Stack direction={"row"} spacing={10} fontSize={"sm"}>
                    <Box
                      borderRadius={"50%"}
                      border="1px solid #319795"
                      alignItems="center"
                      width="50px"
                      textAlign={"center"}
                      background="#d8f3f2"
                    >
                      <Icon as={IoLogoReact} w="10" h="10" color="#319795" />
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Center>
          ))}
      </Grid>
    </>
  );
}
