import React, { useState } from "react";
import { Flex, Box, Grid } from "@chakra-ui/react";
import ListLeftSide from "./ListLeftSIde";
import HotelList from "./HotelList";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
const HotelLists = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );
  const handleClick = () => {
    reFetch();
  };
  return (
    <>
      <Flex padding={"0px 80px"} marginTop="20px">
        <Box flex="0.5">
          <ListLeftSide />
        </Box>
        <Box flex="1">
          {data &&
            data?.map((item) => <HotelList key={item?.id} hotels={item} />)}
        </Box>
      </Flex>
    </>
  );
};

export default HotelLists;
