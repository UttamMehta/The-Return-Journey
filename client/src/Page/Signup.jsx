// import { Button, Input, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";

const initialState = {
  name:"",
  email:"",
  password:"",
  phoneno:"",
  otp:"",
  showotp:false,
};

function Signup() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    if(!formData.otp){
  let res=await axios.post("http://localhost:3035/users/otp", formData).
  then((res)=>{console.log(res.message||res.error);
    setFormData((prev)=>({...prev,showotp:true}));
    alert(res.message||res.error);
  return res.message;
  })
    .catch((err) =>{console.log(err)
      alert("error occured");
    return err;}
    );

  }

  else{
    let res=await axios.post("http://localhost:3035/users/register", formData).
    then((res)=>{console.log(res.message||res.error);
      alert(res.message||res.error);
    return res.message;
    })
      .catch((err) =>{console.log(err)
      return err;}
      );
    }
}

  return (
    <div>
      <input placeholder="Enter Name" onChange={handleChange} name="name" /><br />
      <input placeholder="Enter Email" onChange={handleChange} name="email" type="email"/><br />
      <input placeholder="Enter Password" onChange={handleChange} name="password" type="password" /><br />
      <input placeholder="Enter Phone No" onChange={handleChange} name="phoneno" /><br />
      <>{formData.showotp?<input placeholder="Enter Otp" onChange={handleChange} name="otp" type="text" />:""}<br /></>
      <button variant="contained" onClick={handleSubmit}>
       {/* {formData.showotp ? {formData.otp.length===6?`Register`:`Resend Otp`}:"Generate Otp"} */}
       {formData.showotp?<>{formData.otp.length===6?"Register":"Resend Otp"}</>:"Generate Otp"}
      </button >
    </div>
  );
}

export default Signup;
