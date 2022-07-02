import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
import { loginAction } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const dispatch = useDispatch();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  // const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const getUser = localStorage.getItem("persist:root");
  const userInfo = JSON.parse(getUser);
  const userDetails = JSON.parse(userInfo?.user);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await loginAction(dispatch, { credentials });
      if (currentUser?.isAdmin) {
        navigate("/");
      } else {
      }
    } catch (err) {}
  };
  // useEffect(() => {
  //   if (currentUser?.isAdmin) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [currentUser]);

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={isFetching} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
