/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Home from "./components/Home";
import Profile from "./components/User/Profile";

const Rpoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rpoutes;
