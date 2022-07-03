import React, { useState, useEffect } from "react";
import "./users.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/UsersDataTable";
import { getHotelsAction } from "../../redux/hotelsAction";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../../redux/usersAction";

const List = ({ columns }) => {
  const [users, setUsers] = useState([]);
  const { usersList } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsersAction(dispatch);
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable usersList={usersList} />
      </div>
    </div>
  );
};

export default List;
