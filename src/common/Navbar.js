/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/Logo-new.png';

const Navbar = () => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('');

  return (
    <div className="landing-page">
      <div className="header">
        <div className="header-left w-1/3">
          <div className="font-script">Ur</div>
          <img src={Logo} className="img-fit h-img-w" />
          <div className="font-script">eLibrary</div>
          <input
            className="form-control ml-3 input-height fs-small"
            type="text"
            placeholder="Search by title, author, or ISBN..."
          />
        </div>
        <div className="header-right">
          <div onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active-tab' : ''}>HOME</div>
          <div onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active-tab' : ''}>ABOUT US</div>
          <div onClick={() => setActiveTab('books')} className={activeTab === 'books' ? 'active-tab' : ''}>BOOKS</div>
          <div onClick={() => setActiveTab('rules')} className={activeTab === 'rules' ? 'active-tab' : ''}>RULES</div>
          <div onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'active-tab' : ''}>CONTACT</div>
          <button
            type="button"
            className="button-login"
            onClick={() => {
              navigate('/login');
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
