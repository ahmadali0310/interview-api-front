import React, { useEffect, useState } from "react";
import axios from "axios";
import { reset } from "../store/reducers/authReducer.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dash() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setToken("");
    dispatch(reset());
    navigate("/login");
  };

  useEffect(() => {
    let refresh = async () => {
      var config = {
        method: "post",
        url: "http://127.0.0.1:8000/api/auth/refresh",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      let token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : null;
      if (token) {
        try {
          const result = await axios(config);
          const data = await result.data;
          if (data.access_token) {
            if (localStorage.getItem("token")) {
              localStorage.removeItem("token");
            }
            localStorage.setItem("token", data.access_token);
            setToken(data.access_token);
          }
        } catch {
          return "error";
        }
      }
    };

    setInterval(() => {
      refresh();
    }, 20000);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
      <h1>dash</h1>
      <p>{token}</p>
    </div>
  );
}

export default Dash;
