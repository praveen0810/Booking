import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Heading,
  chakra,
  Grid,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoLogoReact } from "react-icons/io5";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal" : "teal.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function Browse() {
  return (
    <>
      <Heading as="h3" size="lg" marginLeft={"143px"} paddingBottom="10px">
        Browsing History
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={1} padding="0px 100px">
        <Flex w="full" alignItems="center" justifyContent="center">
          <Box
            bg={useColorModeValue("white", "gray.800")}
            maxW="lg"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            {data.isNew && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"
              />
            )}

            <Image
              src="https://media.cntraveler.com/photos/61d07e0d361139bfc50b29e3/master/w_3820,h_2546,c_limit/Hotel-Crescent-Court-HCC-Suite-Presidential-Living.jpg"
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
              height={"270px"}
              width="340px"
              objectFit="cover"
            />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                {data.isNew && (
                  <Badge rounded="full" px="2" fontSize="0.8em" color="#319795">
                    New
                  </Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {data.name}
                </Box>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <chakra.a href={"#"} display={"flex"}>
                    <Icon as={IoLogoReact} h={7} w={7} alignSelf={"center"} />
                  </chakra.a>
                </Tooltip>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                <Rating rating={data.rating} numReviews={data.numReviews} />
                <Box
                  fontSize="2xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    £
                  </Box>
                  {data.price.toFixed(2)}
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>

        <Flex w="full" alignItems="center" justifyContent="center">
          <Box
            bg={useColorModeValue("white", "gray.800")}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            {data.isNew && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"
              />
            )}

            <Image
              src="https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1494883514/photos/226178_original.jpg"
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
              height={"270px"}
              width="340px"
              objectFit="cover"
            />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                {data.isNew && (
                  <Badge rounded="full" px="2" fontSize="0.8em" color="#319795">
                    New
                  </Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {data.name}
                </Box>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <chakra.a href={"#"} display={"flex"}>
                    <Icon as={IoLogoReact} h={7} w={7} alignSelf={"center"} />
                  </chakra.a>
                </Tooltip>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                <Rating rating={data.rating} numReviews={data.numReviews} />
                <Box
                  fontSize="2xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    £
                  </Box>
                  {data.price.toFixed(2)}
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>

        <Flex w="full" alignItems="center" justifyContent="center">
          <Box
            bg={useColorModeValue("white", "gray.800")}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            {data.isNew && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"
              />
            )}

            <Image
              src="https://s7d2.scene7.com/is/image/ritzcarlton/rcdls_lobby_fearingst_v1?$XlargeViewport100pct$"
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
              height={"270px"}
              width="340px"
              objectFit="cover"
            />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                {data.isNew && (
                  <Badge rounded="full" px="2" fontSize="0.8em" color="#319795">
                    New
                  </Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {data.name}
                </Box>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <chakra.a href={"#"} display={"flex"}>
                    <Icon as={IoLogoReact} h={7} w={7} alignSelf={"center"} />
                  </chakra.a>
                </Tooltip>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                <Rating rating={data.rating} numReviews={data.numReviews} />
                <Box
                  fontSize="2xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    £
                  </Box>
                  {data.price.toFixed(2)}
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Grid>
    </>
  );
}

export default Browse;
