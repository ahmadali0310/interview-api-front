import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/reducers/authReducer.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const { is_auth, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    console.log();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(login(data));
  };

  useEffect(() => {
    if (is_auth) {
      navigate("/dash-board");
    }
  }, [is_auth, navigate]);

  return (
    <div>
      <form action="" method="post" onSubmit={handleClick}>
        <label>Email</label>
        <input type="email" name="email" />
        <br></br>
        <label htmlFor="">Password</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
