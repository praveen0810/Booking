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

export default function HighRated() {
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
        <Center py={6}>
          <Box
            maxW={"345px"}
            w={"full"}
            position="relative"
            bg={useColorModeValue("white", "gray.900")}
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
              <Image
                src={
                  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              />
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
                  New York City{" "}
                </Heading>

                <Icon as={BsEye} h="8" w="8" color="#fff" cursor={"pointer"} />
              </Flex>
            </Stack>
            <Heading as={"h5"} size="md" color={"#FF6D79"}>
              $2949493.0
            </Heading>
            <Stack direction={"row"} spacing={20} align={"center"}>
              <Box w="400px">
                <Text fontSize="sm" fontWeight={"bold"}>
                  Booking ID: 928482838
                </Text>
                <Text fontSize={"sm"}>Palo Alto </Text>
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

        <Center py={6}>
          <Box
            maxW={"345px"}
            w={"full"}
            position="relative"
            bg={useColorModeValue("white", "gray.900")}
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
              <Image
                src={
                  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              />
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
                  New York City{" "}
                </Heading>

                <Icon as={BsEye} h="8" w="8" color="#fff" cursor={"pointer"} />
              </Flex>
            </Stack>
            <Heading as={"h5"} size="md" color={"#FF6D79"}>
              $2949493.0
            </Heading>
            <Stack direction={"row"} spacing={20} align={"center"}>
              <Box w="400px">
                <Text fontSize="sm" fontWeight={"bold"}>
                  Booking ID: 928482838
                </Text>
                <Text fontSize={"sm"}>Palo Alto </Text>
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
        <Center py={6}>
          <Box
            maxW={"345px"}
            w={"full"}
            position="relative"
            bg={useColorModeValue("white", "gray.900")}
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
              <Image
                src={
                  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              />
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
                  New York City{" "}
                </Heading>

                <Icon as={BsEye} h="8" w="8" color="#fff" cursor={"pointer"} />
              </Flex>
            </Stack>
            <Heading as={"h5"} size="md" color={"#FF6D79"}>
              $2949493.0
            </Heading>
            <Stack direction={"row"} spacing={20} align={"center"}>
              <Box w="400px">
                <Text fontSize="sm" fontWeight={"bold"}>
                  Booking ID: 928482838
                </Text>
                <Text fontSize={"sm"}>Palo Alto </Text>
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
        <Center py={6}>
          <Box
            maxW={"345px"}
            w={"full"}
            position="relative"
            bg={useColorModeValue("white", "gray.900")}
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
              <Image
                src={
                  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              />
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
                  New York City{" "}
                </Heading>

                <Icon as={BsEye} h="8" w="8" color="#fff" cursor={"pointer"} />
              </Flex>
            </Stack>
            <Heading as={"h5"} size="md" color={"#FF6D79"}>
              $2949493.0
            </Heading>
            <Stack direction={"row"} spacing={20} align={"center"}>
              <Box w="400px">
                <Text fontSize="sm" fontWeight={"bold"}>
                  Booking ID: 928482838
                </Text>
                <Text fontSize={"sm"}>Palo Alto </Text>
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
        <Center py={6}>
          <Box
            maxW={"345px"}
            w={"full"}
            position="relative"
            bg={useColorModeValue("white", "gray.900")}
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
              <Image
                src={
                  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              />
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
                  New York City{" "}
                </Heading>

                <Icon as={BsEye} h="8" w="8" color="#fff" cursor={"pointer"} />
              </Flex>
            </Stack>
            <Heading as={"h5"} size="md" color={"#FF6D79"}>
              $2949493.0
            </Heading>
            <Stack direction={"row"} spacing={20} align={"center"}>
              <Box w="400px">
                <Text fontSize="sm" fontWeight={"bold"}>
                  Booking ID: 928482838
                </Text>
                <Text fontSize={"sm"}>Palo Alto </Text>
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
        <Center py={6}>
          <Box
            maxW={"345px"}
            w={"full"}
            position="relative"
            bg={useColorModeValue("white", "gray.900")}
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
              <Image
                src={
                  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              />
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
                  New York City{" "}
                </Heading>

                <Icon as={BsEye} h="8" w="8" color="#fff" cursor={"pointer"} />
              </Flex>
            </Stack>
            <Heading as={"h5"} size="md" color={"#FF6D79"}>
              $2949493.0
            </Heading>
            <Stack direction={"row"} spacing={20} align={"center"}>
              <Box w="400px">
                <Text fontSize="sm" fontWeight={"bold"}>
                  Booking ID: 928482838
                </Text>
                <Text fontSize={"sm"}>Palo Alto </Text>
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
      </Grid>
    </>
  );
}
