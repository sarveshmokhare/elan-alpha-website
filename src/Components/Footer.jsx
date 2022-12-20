import React from 'react'
import { BsInstagram, BsYoutube, BsLinkedin, BsFacebook, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import logo from '../assets/logo_white.png'
import mail_icon from '../assets/mail_icon.svg'

function Footer() {

    function scrollTop() {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <footer>
            <div className='w-full bg-red text-white relative'>
                <div className='flex flex-col lg:flex-row lg:justify-between items-center pt-5 pb-3 lg:pb-8 lg:px-20'>
                    <div className='flex flex-col w-full lg:w-[40vw] items-center lg:py-20'>
                        {/* elan logo */}
                        <div onClick={scrollTop}><Link to='/'><img src={logo} className='h-[11.5vh] lg:mb-10'></img></Link></div>
                        {/* social media icons */}
                        <div className='flex lg:w-2/3 justify-center text-golden my-5 lg:mb-10 text-4xl lg:text-[2.5rem]'>
                            <a className='px-3 md:px-4 lg:px-4.5' href='https://www.instagram.com/elan_nvision.iith/' target="_blank"><BsInstagram /></a>
                            <a className='px-3 md:px-4 lg:px-4.5' href='https://www.youtube.com/user/ElanIITHyderabad' target="_blank"><BsYoutube /></a>
                            <a className='px-3 md:px-4 lg:px-4.5' href='https://www.linkedin.com/company/elan-nvision-iith/' target="_blank"><BsLinkedin /></a>
                            <a className='px-3 md:px-4 lg:px-4.5' href='https://www.facebook.com/elannvision.iithyderabad' target="_blank"><BsFacebook /></a>
                            <a className='px-3 md:px-4 lg:px-4.5' href='https://twitter.com/elan_nvision' target="_blank"><BsTwitter /></a>
                        </div>
                    </div>

                    {/* contact us */}
                    <div className='flex items-start flex-col lg:pr-[10%]'>
                        <div className='pb-3 lg:py-5 text-golden text-4xl lg:text-5xl font-berkshire'><h1>Contact Us</h1></div>
                        <div className='flex flex-col items-center lg:items-start pb-1.5 lg:pb-8'>
                            <h2 className='text-xl lg:text-xl'>Swapnish Sahare</h2>
                            <h3 className='text-golden text-base lg:text-md'>Overall Head</h3>
                            <h3 className='text-base lg:text-md'><a href='tel:+917821825892'>(+91) 78218 25892</a></h3>
                        </div>
                        <div className='flex flex-col items-center lg:items-start pb-5'>
                            <h2 className='text-xl lg:text-xl'>KN Vardhan</h2>
                            <h3 className='text-golden text-base lg:text-md'>Head of Public Relations</h3>
                            <h3 className='text-base lg:text-md'><a href='tel:+919652793113'>(+91) 96527 93113</a></h3>
                        </div>
                    </div>

                    {/* mail and all rights reserved for mobiles */}
                    <div className='flex lg:hidden flex-col items-center'>
                        <div>
                            <a href='mailto:elan@iith.ac.in' className='flex flex-col'>
                                <img src={mail_icon} className='h-7 mb-1' ></img>
                                <h3>elan@iith.ac.in</h3>
                            </a>
                        </div>
                        <div><h5 className='text-xs opacity-80 pt-4'>Elan and nVision 2023. All Rights Reserved.</h5></div>
                    </div>

                </div>

                {/* mail and all rights reserved for desktops*/}
                <div className='hidden lg:flex flex-col items-center py-2 absolute bottom-[0] inset-x-0 lg:text-base'>
                    <div>
                        <a href='mailto:elan@iith.ac.in' className='flex flex-col'>
                            <img src={mail_icon} className='h-[3.5vh] mb-1' ></img>
                            <h3>elan@iith.ac.in</h3>
                        </a>
                    </div>
                    <div><h5 className='text-xs opacity-80 pt-2 '>Elan and ηVision 2023. All Rights Reserved.</h5></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer