import React from 'react';
import logo from '../assets/logo.png';
import '../style/Header.css';
import '../style/CommonSecMedia.css'

export default function Header({ setHome, setFindClg, setTutorial, setContactUs }) {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" width="200px" />
          <h2>Diploma Hunt</h2>
        </div>
        <nav>
          <ul>
            <li onClick={setHome}>
              <label htmlFor="hero_checkbox">Home</label>
              <label htmlFor="hero_checkbox">
                <i className="fa-solid fa-house"></i>
              </label>
            </li>
            <li onClick={setFindClg}>
              <label htmlFor="find_checkbox">Find College</label>
              <label htmlFor="find_checkbox">
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
            </li>
            <li onClick={setTutorial}>
              <label htmlFor="tutorial_checkbox">Tutorial</label>
              <label htmlFor="tutorial_checkbox">
                <i className="fa-solid fa-shapes"></i>
              </label>
            </li>
            <li onClick={setContactUs}>
              <label htmlFor="settings_checkbox">Email Subscribe</label>
              <label htmlFor="settings_checkbox">
                <i className="fa-solid fa-bell"></i>
              </label>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
