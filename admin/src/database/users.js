import { apiBaseUrl, Apis } from "../config/Api";
import axios from "axios";
import { getCookie } from "./cookie";

export const getUsersQuery = () => {
  const currentUser = getCookie();
  const params = {
    isAdmin: true,
  };
  return axios
    .get(`${apiBaseUrl}${Apis.GET_USERS}`, {
      //   withCredentials: true,
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Content-Type": "application/json",
      //   },
      //   headers: {
      //     "Content-Type": "application/json",
      //     Set_Cookie: `${`access_token=${currentUser.access_token}`}` || "",
      //     isAdmin: true,
      //   },
    })
    .then((response) => response)
    .catch((err) => err.response);
};
