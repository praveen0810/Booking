import { actionStart, getHotels, hotelsError } from "./hotels";
import { getHotelsQuery } from "../database/hotel";

export const getHotelsAction = async (dispatch) => {
  dispatch(actionStart);
  try {
    const res = await getHotelsQuery();
    dispatch(getHotels(res.data));
  } catch (err) {
    dispatch(hotelsError(err));
  }
};
