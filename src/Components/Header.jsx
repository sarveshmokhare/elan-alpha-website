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
        <header className={context.theme}>

            {menuOpen ? <Menu toggleMenu={toggleMenu} /> :
                <div className='w-full bg-white dark:bg-black h-[13vh] border-b dark:border-golden flex items-center justify-between px-6 dark:text-white'>
                    <Link to='/'>
                        <div className='h-[7.5vh]'>
                            <img src={logo} alt='logo' className='h-full' />
                        </div>
                    </Link>

                    <div className='flex items-center'>
                        <div className='h-8 bg-red p-1 mr-8' onClick={context.toggleTheme}>Switch theme</div>
                        <div className='flex flex-col items-center cursor-pointer h-[7vh] lg:mb-2' onClick={toggleMenu}>
                            <div className='h-[80%]'>
                                <img className='h-full' src={menuIcon} alt='menu'></img>
                            </div>
                            <h1 className='text-md'>Menu</h1>
                        </div>
                    </div>

                </div>
            }
        </header>
    )
}

export default Header