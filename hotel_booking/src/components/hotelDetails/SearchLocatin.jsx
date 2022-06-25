import React, { useState } from "react";
import {
  Input,
  Button,
  Box,
  Grid,
  List,
  ListItem,
  Text,
  Icon,
  ListIcon,
} from "@chakra-ui/react";
import LocationIcon from "../../assets/location.png";
import { MdLocationOn } from "react-icons/md";
const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

const SearchLocatin = (props) => {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  return (
    <>
      <Box display="flex" flexDirection="column">
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Input
              placeholder="Search Location.."
              style={{
                width: "100%",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                border: "2px solid #319795",
                paddingBottom: "10px",
              }}
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0px 0px",
            }}
          >
            <Button
              colorScheme="teal"
              size="md"
              borderTopLeftRadius="0px"
              borderBottomLeftRadius="0px"
              onClick={() => {
                // Search
                const params = {
                  q: searchText,
                  format: "json",
                  addressdetails: 1,
                  polygon_geojson: 0,
                };
                const queryString = new URLSearchParams(params).toString();
                const requestOptions = {
                  method: "GET",
                  redirect: "follow",
                };
                fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                  .then((response) => response.text())
                  .then((result) => {
                    console.log(JSON.parse(result));
                    setListPlace(JSON.parse(result));
                  })
                  .catch((err) => console.log("err: ", err));
              }}
            >
              Search
            </Button>
          </div>
        </div>
        <div>
          {listPlace.length > 0 && (
            <List
              max-heght="100px"
              height="110px"
              overflowY={"scroll"}
              background="#fff"
            >
              {listPlace.map((item) => {
                return (
                  <div key={item?.place_id}>
                    <ListItem
                      display={"flex"}
                      button
                      onClick={() => {
                        setSelectPosition(item);
                        setListPlace([]);
                      }}
                    >
                      <ListIcon as={MdLocationOn} />

                      <Text> {item?.display_name}</Text>
                    </ListItem>
                  </div>
                );
              })}
            </List>
          )}
        </div>
      </Box>
    </>
  );
};

export default SearchLocatin;
