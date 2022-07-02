import { apiBaseUrl, Apis } from "../config/Api";
import axios from "axios";

export const doLoginQuery = (data) => {
  const cred = {
    username: data.credentials.username,
    password: data.credentials.password,
  };
  return axios
    .post(`${apiBaseUrl}${Apis.login}`, cred)
    .then((response) => response)
    .catch((err) => err.response);
};
