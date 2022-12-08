import React from 'react'

import '../styles/menu.css'
import caPortalIcon from '../assets/ca_portal_icon.svg'
import valenrowLogo from '../assets/valenrow_logo.svg'

function Menu(props) {
    return (
        <div className='menu'>
            <div className='menu-header'>
                <a href='/'><h3>Home</h3></a>
                <h3 style={{ color: "#FED395", cursor: "pointer" }} onClick={props.toggleMenu}>Close</h3>
            </div>

            <div className='flex-parent'>
                <div className='links-parent'>
                    <a href='/events'>Events</a>
                    <a href='/competitions'>Competitions</a>
                    <a href='/litfest'>LitFest</a>
                    <a href='/'>Social Cause</a>
                    <a href='/sponsors'>Sponsors</a>
                    <a href='/'>Team</a>
                </div>
                <div className='btns'>
                    <a className='merch-btn'>Merch</a>
                    <a className='ca-portal-btn'>
                        <img src={caPortalIcon} style={{ height: "30px", marginRight: "10px" }} alt='icon' />
                        <div>CA Portal</div>
                    </a>
                    <a className='explore-valenrow-btn'>
                        <img src={valenrowLogo} style={{ height: "100px" }} alt='icon' />
                        <div>Explore Valenrow</div>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Menu