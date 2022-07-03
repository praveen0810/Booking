import { apiBaseUrl, Apis } from "../config/Api";
import axios from "axios";

export const getHotelsQuery = () => {
  return axios
    .get(`${apiBaseUrl}${Apis.GET_HOTELS}`)
    .then((response) => response)
    .catch((err) => err.response);
};

export const addHotel = (data) => {
  return axios
    .post(`${apiBaseUrl}${Apis.ADD_HOTELS}`, data)
    .then((response) => response)
    .catch((err) => err.response);
};

export const getRoomsQuery = () => {
  return axios
    .get(`${apiBaseUrl}${Apis.FETCH_ROOMS}`)
    .then((response) => response)
    .catch((err) => err.response);
};
