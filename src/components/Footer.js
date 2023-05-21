import React from 'react';
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import etsy from '../img/etsy.png'

const Footer = () => {
    return (
      <div id='footer'>
        <a href="https://www.facebook.com/jbibbyphotography/"><img src={facebook}/></a>
        <a href="https://www.instagram.com/jbibbyphotography/"><img src={instagram}/></a>
        <a href="https://www.linkedin.com/in/joseph-bibby-367bb9139/"><img src={linkedin}/></a>
        <a href="https://www.etsy.com/uk/shop/JBibbyPhotography"><img src={etsy}/></a>
      </div>
    );
  };
  
  export default Footer