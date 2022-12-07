import React from 'react'

import '../styles/menu.css'

function Menu(props) {
    return (
        <div className='menu'>
            <div className='menu-header'>
                <a href='/'><h3>Home</h3></a>
                <h3 style={{color: "#FED395", cursor: "pointer"}} onClick={props.toggleMenu}>Close</h3>
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
                <div>
                    <a></a>
                    <a></a>
                    <a></a>
                </div>
            </div>


        </div>
    )
}

export default Menu