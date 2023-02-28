import React from 'react';
import hamburger from '../img/hamburger.png'

const Header = (props) => {
    return (
      <div id='header'>
        <img src={props.logo} alt="J.Bibby Photography Logo" class="logo"/>
        <h1>J.Bibby Photography</h1>
        <img src={hamburger} alt="menu" class="menu"/>
      </div>
    );
  };
  
  export default Header