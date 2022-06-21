import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
// import { useLocation } from "react-router-dom";

export default function ListLeftSide() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState("");

  return (
    <Center py={6}>
      <Box
        maxW={"400px"}
        w={"full"}
        bg={useColorModeValue("#319795", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box p="2">
          <Box pb={"2"}>
            <Text color={"#fff"}>Description</Text>
            <Input placeholder="Desc..." size="md" bg={"#fff"} />
          </Box>

          <Box>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
          </Box>

          <Box>
            <Text fontSize={"sm"} color="#fff">
              Options
            </Text>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <Text fontSize={"sm"} color="#fff">
                  Min price <small>per night</small>
                </Text>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <Text fontSize={"sm"} color="#fff">
                  Max price <small>per night</small>
                </Text>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <Text fontSize={"sm"} color="#fff">
                  {" "}
                  Adult
                </Text>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem">
                <Text color="#fff" fontSize={"#fff"}>
                  Children
                </Text>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <Text fontSize={"sm"} color="#fff">
                  Room
                </Text>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.room}
                />
              </div>
            </div>
          </Box>
          <Box display="flex" justifyContent={"center"}>
            <Button color="#2b7070" size="sm" width="150px">
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}
