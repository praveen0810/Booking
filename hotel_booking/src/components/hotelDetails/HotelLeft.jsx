import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Stack,
  Grid,
  Image,
  ModalOverlay,
  Modal,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalContent,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";

const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  },
];

const HotelLeft = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <Box>
      <Heading fontSize={"xl"} color="#319795">
        Tower Street Apartments
      </Heading>
      <Stack direction={"row"} alignItems="center">
        <Icon as={GoLocation} />
        <Text fontSize={"sm"} pb="2">
          Elton St 125 New york
        </Text>
      </Stack>
      <Text fontSize={"sm"} color="#319795" pb="3">
        Excellent location – 500m from center
      </Text>
      <Text fontSize="small" color="#00b300">
        Book a stay over $114 at this property and get a free airport taxi
      </Text>

      {/* {open && (
        <div className="slider">
          <Icon
            as={AiOutlineClose}
            className="close"
            onClick={() => setOpen(false)}
          />
          <Icon
            as={AiOutlineArrowLeft}
            className="arrow"
            onClick={() => handleMove("l")}
          />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <Icon
            as={AiOutlineRightCircle}
            className="arrow"
            onClick={() => handleMove("r")}
          />
        </div>
      )} */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="slider">
              <Icon
                as={AiOutlineArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={photos[slideNumber].src}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <Icon
                as={AiOutlineArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {photos.map((photo, i) => (
            <Box key={i}>
              <Image
                onClick={onOpen}
                src={photo.src}
                alt=""
                className="hotelImg"
                width="400px"
              />
            </Box>
          ))}
        </Grid>
      </Box>
      <Text pt="3" fontSize="small">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
        maiores veritatis perspiciatis consectetur quaerat dolore dolor magnam
        reiciendis eaque doloremque aliquam perferendis laboriosam aliquid,
        expedita rem cupiditate quis exercitationem commodi. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Voluptatibus maiores veritatis
        perspiciatis consectetur quaerat dolore dolor magnam reiciendis eaque
        doloremque aliquam perferendis laboriosam aliquid, expedita rem
        cupiditate quis exercitationem commodi.
      </Text>
    </Box>
  );
};

export default HotelLeft;
