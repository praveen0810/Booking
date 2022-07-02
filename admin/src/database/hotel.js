import { apiBaseUrl, Apis } from "../config/Api";
import axios from "axios";

export const getHotelsQuery = () => {
  return axios
    .get(`${apiBaseUrl}${Apis.GET_HOTELS}`)
    .then((response) => response)
    .catch((err) => err.response);
};
