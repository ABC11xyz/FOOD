import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Welcome to Tomato.com, the premier destination for delicious, freshly prepared meals delivered right to your doorstep. Our mission is to bring the joy of gourmet dining into the comfort of your home with just a few clicks. We offer a diverse menu that caters to all tastes and dietary preferences, featuring high-quality ingredients sourced from trusted local providers. With an emphasis on convenience, affordability, and exceptional customer service, Tomato.com is dedicated to transforming the way you experience food. Bon appétit!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>OWENED BY -@
              <a href="https://abes.ac.in/">ABESEC</a> STUDENT</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Privacy policy</li>
                
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
