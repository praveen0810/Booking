import React, { useState, useEffect } from "react";
import "../list/list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/RoomTable";
import { getRoomsAction } from "../../redux/hotelsAction";
import { useDispatch, useSelector } from "react-redux";

const List = ({ columns }) => {
  const [hotels, setHotels] = useState([]);
  const { roomsList } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();

  useEffect(() => {
    getRoomsAction(dispatch);
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable roomsList={roomsList} />
      </div>
    </div>
  );
};

export default List;
