import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import ThemeContext from '../Contexts/ThemeContext'
import logo from '../assets/logo_white.png'
import menuIcon from '../assets/menu_icon.svg'
import Menu from './Menu'

function Header() {
    const context = useContext(ThemeContext)
    const [menuOpen, setMenuOpen] = useState(false)
    function toggleMenu() {
        setMenuOpen(currState => (currState === false ? true : false))
    }

    return (
        <div className={context.theme}>
        
            {menuOpen ? <Menu toggleMenu={toggleMenu} /> :
                <div className='w-full bg-black h-24 border-b dark:border-golden flex items-center justify-between px-6 dark:text-white'>
                    <Link to='/'><img src={logo} alt='logo' className='h-12' /></Link>

                    <div className='flex flex-col items-center cursor-pointer' onClick={toggleMenu}>
                        <img src={menuIcon} alt='menu'></img>
                        <h1 className='m-0 text-lg'>Menu</h1>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header