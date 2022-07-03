import { actionStart, getHotels, hotelsError, getRooms } from "./hotels";
import { getHotelsQuery, getRoomsQuery } from "../database/hotel";

export const getHotelsAction = async (dispatch) => {
  dispatch(actionStart);
  try {
    const res = await getHotelsQuery();
    dispatch(getHotels(res.data));
  } catch (err) {
    dispatch(hotelsError(err));
  }
};

export const getRoomsAction = async (dispatch) => {
  dispatch(actionStart);
  try {
    const res = await getRoomsQuery();

    dispatch(getRooms(res.data));
  } catch (err) {
    dispatch(hotelsError(err));
  }
};
