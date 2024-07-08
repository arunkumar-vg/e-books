/* eslint-disable */
import React, { useState } from 'react';
import { IoMdHome } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const Navbar = (props) => {

  const { darkMode, setDarkMode } = props;

  const [activeColor, setActiveColor] = useState('');


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      setActiveColor("#bf7b00");
    } else {
      setActiveColor("#2e2e2e");
    }
  };

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <div onClick={() => { }} className="cursor-pointer">
            <IoMdHome fontSize={30} color={activeColor} />
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
