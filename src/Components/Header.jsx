import React, { useContext, useState } from 'react'

import ThemeContext from '../Contexts/ThemeContext'
import '../styles/header.css'
import logo from '../assets/logo_white.png'
import menuIcon from '../assets/menu_icon.png'
import Menu from './Menu'

function Header() {
    const context = useContext(ThemeContext)
    const [menuOpen, setMenuOpen] = useState(false)
    function toggleMenu() {
        setMenuOpen(currState => (currState === false ? true : false))
    }
    
    return (
        <div id={context.theme}>
            <div className='header'>
                <a href='/'><img src={logo} alt='logo' style={{ height: "50px" }}></img></a>

                <div className='menu-toggler' onClick={toggleMenu}>
                    <img src={menuIcon} alt='menu'></img>
                    <h1>Menu</h1>
                </div>
            </div>


            {menuOpen && <Menu toggleMenu={toggleMenu} />}
        </div>
    )
}

export default Header