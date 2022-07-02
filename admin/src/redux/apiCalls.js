import { loginStart, loginFailure, loginSuccess } from "./auth";
import { doLoginQuery } from "../database/auth";

export const loginAction = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await doLoginQuery(user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
