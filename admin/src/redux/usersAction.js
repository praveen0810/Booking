import { actionStart, fetchUsers, fetchError } from "./users";
import { getUsersQuery } from "../database/users";

export const getUsersAction = async (dispatch) => {
  dispatch(actionStart);
  try {
    const res = await getUsersQuery();
    dispatch(fetchUsers(res.data));
  } catch (err) {
    dispatch(fetchError(err));
  }
};
