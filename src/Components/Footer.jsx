import React, { useContext } from 'react'
import { BsInstagram, BsYoutube, BsLinkedin, BsFacebook, BsTwitter } from 'react-icons/bs'

import ThemeContext from '../Contexts/ThemeContext'
import '../styles/footer.css'
import logo from '../assets/logo_white.png'
import mail_icon from '../assets/mail_icon.png'

function Footer() {
    const context = useContext(ThemeContext)

    return (
        <div id={context.theme}>
            <div className='footer'>
                <div className='flex-box'>
                    <div><a href='/'><img src={logo} style={{ height: "90px" }}></img></a></div>
                    <div className='social-icons'>
                        <a href='https://www.instagram.com/elan_nvision.iith/' target="_blank"><BsInstagram /></a>
                        <a href='https://www.youtube.com/user/ElanIITHyderabad' target="_blank"><BsYoutube /></a>
                        <a href='https://www.linkedin.com/company/elan-nvision-iith/' target="_blank"><BsLinkedin /></a>
                        <a href='https://www.facebook.com/elan.iithyderabad' target="_blank"><BsFacebook /></a>
                        <a href='https://twitter.com/elan_nvision' target="_blank"><BsTwitter /></a>
                    </div>
                    <div style={{ padding: "5px" }}><h1>Contact Us</h1></div>
                    <div className='heads-info'>
                        <h2>Swapnish Sahare</h2>
                        <h3 className='head-pos'>Overall Coordinator</h3>
                        <h3>(+91) 78218 25892</h3>
                    </div>
                    <div className='heads-info'>
                        <h2>KN Vardhan</h2>
                        <h3 className='head-pos'>Head of Public Relations</h3>
                        <h3>(+91) 96527 93113</h3>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <a href='mailto:elan@iith.ac.in'>
                            <img src={mail_icon}></img>
                            <h3>elan@iith.ac.in</h3>
                        </a>
                    </div>
                    <div><h5>Elan and nVision 2023. All Rights Reserved.</h5></div>
                </div>
            </div>
        </div>
    )
}

export default Footer