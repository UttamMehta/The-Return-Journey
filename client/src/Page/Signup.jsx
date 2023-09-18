// import { Button, Input, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";

const initialState = {
  name:"" , email: "",
  password: "", gender:"",
  ipaddress:"",
};

function Signup() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    axios.post("http://localhost:3035/users/register", formData).then((res) => console.log(res.data)).catch((err) => console.log(err));
  };

  return (
    <div width="30%" margin="auto">
      <input placeholder="Enter Email" onChange={handleChange} name="email" />
      <input
        placeholder="Enter Password"
        onChange={handleChange}
        name="password"
      />
      <input placeholder="Enter Gender" onChange={handleChange} name="gender" />
      <input placeholder="Name" onChange={handleChange} name="name" />

      <button variant="contained" onClick={handleSubmit}>
        Register
      </button >
    </div>
  );
}

export default Signup;
