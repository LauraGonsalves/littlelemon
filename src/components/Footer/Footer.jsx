import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from "../../Assests/9.png"

const Footer = () => {
    return (
        <footer>
            
            <div className='contact-info pt-3 ps-2'>
            <img src={logo} style={{height:"100px"}} alt="logo"/>
                <div className='about-info pt-3 ps-5'>
                    <ul>
                        <li>About Us</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>

                    <p className='ps-3'>&copy; 2023 @littlelemon. All rights reserved.</p>
                </div>

                <div className="social-media  pt-3 ps-5"><ul>
                <li>Contact Us</li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} />Instagram</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} />Twitter</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} />Facebook</a></li>
                </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
