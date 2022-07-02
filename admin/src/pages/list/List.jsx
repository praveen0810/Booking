import React, { useState, useEffect } from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { getHotelsAction } from "../../redux/hotelsAction";
import { useDispatch, useSelector } from "react-redux";

const List = ({ columns }) => {
  const [hotels, setHotels] = useState([]);
  const { hotelsList } = useSelector((state) => state.hotels);
  const dispatch = useDispatch();

  useEffect(() => {
    getHotelsAction(dispatch);
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable hotelsList={hotelsList} />
      </div>
    </div>
  );
};

export default List;
