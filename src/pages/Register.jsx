import React from "react";
import { register } from "../store/reducers/authReducer.js";
import { useDispatch } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(data);
    dispatch(register(data));
  };

  return (
    <div>
      <form action="" onSubmit={handleClick}>
        <label htmlFor="">Name</label>
        <input type="text" required name="name" />
        <label>Email</label>
        <input type="email" name="email" required />
        <br></br>
        <label>Password</label>
        <input type="password" name="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
