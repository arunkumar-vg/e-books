/* eslint-disable */
import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const Navbar = (props) => {

  const { darkMode, setDarkMode } = props;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <div onClick={() => { window.location.href = '/'; }} className="cursor-pointer">
            <IoMdHome fontSize={30} color="#2e2e2e" />
          </div>
        </div>
      <div className="d-flex justify-content-center align-items-center ml-auto cursor-pointer" onClick={toggleDarkMode}>
        {darkMode ? <GoSun fontSize={26} /> : <FaMoon fontSize={26} />}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
