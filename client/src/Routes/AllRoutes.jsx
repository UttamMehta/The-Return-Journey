import { Route, Routes } from "react-router-dom";
import Signup from "../Page/Signup";
import Home from "../Page/Home";
import Login from "../Page/Login";


function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup"element={<Signup />} />
      </Routes>

    </div>
  );
}

export default AllRoutes;
