import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import caPortalIcon from '../assets/ca_portal_icon.svg'
import valenrowLogo from '../assets/valenrow_icon.svg'
import eventsCard from '../assets/events_card.svg'
import litfestCard from '../assets/litfest_card.svg'

function Menu(props) {
    const toggleMenu = props.toggleMenu;
    const eventsData = {
        card: eventsCard,
        subtitles: ['Pronites', 'Culti', 'Techy', 'Workshops'],
    }
    const litfestData = {
        card: litfestCard,
        subtitles: ['Inked Verse', 'What if?', 'Any many more...'],
    }

    const [hoveredTitle, setHoveredTitle] = useState(eventsData)
    function eventsHoverHandler() {
        hoveredTitle !== eventsData ? setHoveredTitle(eventsData) : setHoveredTitle(eventsData)
    }
    function litfestHoverHandler() {
        hoveredTitle !== litfestData ? setHoveredTitle(litfestData) : setHoveredTitle(eventsData)
    }
    function litfestClickHandler(props) {
        toggleMenu();

        setHoveredTitle(litfestData);
    }

    return (
        <div className='h-screen overflow-y-auto overflow-x-auto w-screen dark:bg-black fixed z-10 dark:text-white'>
            <div className='flex justify-between px-10 pt-5 text-lg'>
                <Link to='/' onClick={toggleMenu}><h3>Home</h3></Link>
                <h3 className='dark:text-golden cursor-pointer' onClick={props.toggleMenu}>Close</h3>
            </div>

            <div className='flex justify-around p-5 items-center text-2xl'>
                <div className='flex flex-col'>
                    <Link onMouseEnter={eventsHoverHandler} onMouseLeave={eventsHoverHandler} className='py-4' onClick={toggleMenu} to='/events'>Events</Link>
                    <Link className='py-4' onClick={toggleMenu} to='/competitions'>Competitions</Link>
                    <NavLink onMouseEnter={litfestHoverHandler} onMouseLeave={litfestHoverHandler} className='py-4' onClick={litfestClickHandler} to='/litfest'>LitFest</NavLink>
                    <Link className='py-4' onClick={toggleMenu} to='/'>Social Cause</Link>
                    <Link className='py-4' onClick={toggleMenu} to='/sponsors'>Sponsors</Link>
                    <Link className='py-4' onClick={toggleMenu} to='/'>Team</Link>
                    <Link className='py-4' onClick={toggleMenu} to='/'>Schedule</Link>
                    <Link className='py-4' onClick={toggleMenu} to='/'>Contact us</Link>
                </div>
                <div className='font-cinzel font-bold text-base flex flex-col items-center'>
                    <a className='bg-red text-golden py-4 px-8 rounded-md my-4'>Merch</a>
                    <a className='bg-green py-2.5 px-2.5 rounded-md flex items-center my-4' href='https://ca.elan.org.in' target='_blank'>
                        <img src={caPortalIcon} className='h-8 pr-2.5' alt='icon' />
                        <div>CA Portal</div>
                    </a>
                    <Link className='flex items-center text-center bg-yellow py-5 px-3.5 rounded-lg h-16 w-44 my-4 relative' style={{ borderRadius: '40px' }} to='/' onClick={props.toggleMenu}>
                        <img src={valenrowLogo} className='h-24 absolute -top-2' alt='icon' />
                        <div className='absolute left-12 text-sm'>Explore Valenrow</div>
                    </Link>
                </div>
            </div>

            <div className='hidden sm:flex justify-center'>
                <Link onClick={toggleMenu} to='/'>
                    <img className='h-40' alt='card' src={hoveredTitle.card} />

                    <div className='flex justify-evenly text-golden'>
                        {hoveredTitle.subtitles.map((title, ind) => {
                            return (
                                <p key={ind}>{title}</p>
                            )
                        })}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Menu