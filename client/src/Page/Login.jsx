// import { Box, Button, Input, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    axios.post("http://localhost:3035/users/login", formData).then((res) => localStorage.setItem('token', JSON.stringify(res.data.token))).catch((err) => console.log(err));
  };

  return (
    <div width="30%" margin="auto">
      <input placeholder="Enter Email" onChange={handleChange} name="email" />
      <input
        placeholder="Enter Password"
        onChange={handleChange}
        name="password"
      />
      <button variant="contained" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}

export default Login;
