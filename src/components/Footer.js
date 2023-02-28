import React from 'react';
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import etsy from '../img/etsy.png'

const Footer = () => {
    return (
      <div id='footer'>
        <img src={facebook}/>
        <img src={instagram}/>
        <img src={linkedin}/>
        <img src={etsy}/>
      </div>
    );
  };
  
  export default Footer