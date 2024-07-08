/* eslint-disable */
import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import ListingPage from './ListingPage';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ListingPage />
    </div>
  );
};

export default LandingPage;
