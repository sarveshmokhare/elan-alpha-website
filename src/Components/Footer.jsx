import React, { useContext } from 'react'
import { BsInstagram, BsYoutube, BsLinkedin, BsFacebook, BsTwitter } from 'react-icons/bs'

import ThemeContext from '../Contexts/ThemeContext'
import logo from '../assets/logo_white.png'
import mail_icon from '../assets/mail_icon.png'

function Footer() {
    const context = useContext(ThemeContext)

    return (
        <div className={context.theme}>
            <div className='w-full dark:bg-red py-18 text-white'>
                <div className='flex flex-col items-center pt-8 pb-3'>
                    <div><a href='/'><img src={logo} className='h-20'></img></a></div>
                    <div className='flex w-4/5 justify-around text-3xl dark:text-golden mt-6'>
                        <a href='https://www.instagram.com/elan_nvision.iith/' target="_blank"><BsInstagram /></a>
                        <a href='https://www.youtube.com/user/ElanIITHyderabad' target="_blank"><BsYoutube /></a>
                        <a href='https://www.linkedin.com/company/elan-nvision-iith/' target="_blank"><BsLinkedin /></a>
                        <a href='https://www.facebook.com/elan.iithyderabad' target="_blank"><BsFacebook /></a>
                        <a href='https://twitter.com/elan_nvision' target="_blank"><BsTwitter /></a>
                    </div>
                    <div className='pt-5 pb-3 dark:text-golden text-4xl font-berkshire'><h1>Contact Us</h1></div>
                    <div className='flex flex-col items-center pb-1.5'>
                        <h2 className='text-xl'>Swapnish Sahare</h2>
                        <h3 className='dark:text-golden text-base'>Overall Coordinator</h3>
                        <h3 className='text-base'>(+91) 78218 25892</h3>
                    </div>
                    <div className='flex flex-col items-center pb-5'>
                        <h2 className='text-xl'>KN Vardhan</h2>
                        <h3 className='dark:text-golden text-base'>Head of Public Relations</h3>
                        <h3 className='text-base'>(+91) 96527 93113</h3>
                    </div>
                    <div style={{ textAlign: "-webkit-center" }}>
                        <a href='mailto:elan@iith.ac.in'>
                            <img src={mail_icon} ></img>
                            <h3>elan@iith.ac.in</h3>
                        </a>
                    </div>
                    <div><h5 className='text-xs opacity-80 pt-4'>Elan and nVision 2023. All Rights Reserved.</h5></div>
                </div>
            </div>
        </div>
    )
}

export default Footer