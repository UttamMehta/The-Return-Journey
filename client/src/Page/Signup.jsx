// import { Button, Input, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";

const initialState = {
  phoneno:"",
  ipaddress:"",
  otp:"",
  showotp:false,
};

function Signup() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {

    if(!formData.showotp){
  let res=await axios.post("http://localhost:3035/users/register", formData).
  then((res)=>{console.log(res.message);
    setFormData((prev)=>({...prev,showotp:true}));
  return res.message;
  })
    .catch((err) =>{console.log(err)
    return err;}
    );
  }
  
  else{
    console.log("sfg");
  }
}

  return (
    <div width="30%" margin="auto">
      <input placeholder="Enter Phone No" onChange={handleChange} name="phoneno" />
      <input placeholder="Enter Ipaddress" onChange={handleChange} name="ipaddress" />
      <button variant="contained" onClick={handleSubmit}>
        Register
      </button >
      {}
    </div>
  );
}

export default Signup;
