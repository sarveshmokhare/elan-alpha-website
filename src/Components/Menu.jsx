import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import caPortalIcon from '../assets/ca_portal_icon.svg'
import valenrowLogo from '../assets/valenrow_icon.svg'
import eventsCard from '../assets/events_card.svg'
import litfestCard from '../assets/litfest_card.svg'
import menuRing from '../assets/menu_ring.svg'
import competitionsCard from '../assets/competitions_card.svg'
import teamCard from '../assets/team_card.svg'

function Menu(props) {
    const toggleMenu = props.toggleMenu;
    const eventsData = {
        route: '/events',
        card: eventsCard,
        subtitles: ['Pronites', 'Infi', 'Workshops'],
    }
    const competitionsData = {
        route: '/competitions',
        card: competitionsCard,
        subtitles: ['Culti', 'Techy'],
    }
    const litfestData = {
        route: '/litfest',
        card: litfestCard,
        subtitles: ['Inked Verse', 'What if?', 'Any many more...'],
    }
    const teamData = {
        route: '/teams',
        card: teamCard,
        subtitles: [],
    }

    const [hoveredTitle, setHoveredTitle] = useState(eventsData)
    function eventsHoverHandler() {
        hoveredTitle !== eventsData ? setHoveredTitle(eventsData) : setHoveredTitle(eventsData)
    }
    function competitionsHoverHandler() {
        hoveredTitle !== competitionsData ? setHoveredTitle(competitionsData) : setHoveredTitle(eventsData)
    }
    function litfestHoverHandler() {
        hoveredTitle !== litfestData ? setHoveredTitle(litfestData) : setHoveredTitle(eventsData)
    }
    function teamHoverHandler() {
        hoveredTitle !== teamData ? setHoveredTitle(teamData) : setHoveredTitle(eventsData)
    }

    return (
        <div className='h-screen w-screen overflow-y-scroll dark:bg-black fixed z-50 dark:text-white'>
            {/* menu and close wala div */}
            <div className='flex justify-between px-10 sm:px-8 py-5 text-lg'>
                <Link className='flex items-center' to='/' onClick={toggleMenu}>
                    <img className='h-4 pr-2 hidden sm:block' src={menuRing} alt='icon' />
                    <h3>Home</h3>
                </Link>
                <h3 className='dark:text-golden cursor-pointer' onClick={props.toggleMenu}>Close</h3>
            </div>

            {/* main div */}
            <div className='flex pl-6 sm:pr-8 items-center justify-around sm:justify-evenly text-2xl sm:text-3xl'>
                {/* links div */}
                <div className='flex flex-col w-1/3 lg:w-1/5'>
                    <div className='flex flex-col'>
                        <Link onMouseEnter={eventsHoverHandler} className='py-4' onClick={toggleMenu} to='/events'>Events</Link>
                        <Link onMouseEnter={competitionsHoverHandler} className='py-4' onClick={toggleMenu} to='/competitions' >Competitions</Link>
                        <Link onMouseEnter={litfestHoverHandler} className='py-4' onClick={toggleMenu} to='/litfest'>LitFest</Link>
                        <Link className='py-4' onClick={toggleMenu} to='/'>Social Cause</Link>
                        <Link className='py-4' onClick={toggleMenu} to='/sponsors'>Sponsors</Link>
                        <Link onMouseEnter={teamHoverHandler} className='py-4' onClick={toggleMenu} to='/team'>Team</Link>
                        <Link className='py-4 sm:hidden' onClick={toggleMenu} to='/'>Schedule</Link>
                        <Link className='py-4 sm:hidden' onClick={toggleMenu} to='/'>Contact us</Link>
                    </div>
                </div>


                {/* card and buttons div */}
                <div className='w-1/2 sm:w-3/4 lg:w-1/2 flex flex-col'>
                    {/* card div */}
                    <div className='hidden sm:flex justify-center'>
                        <Link onClick={toggleMenu} to={hoveredTitle.route}>
                            <img className='h-52 lg:h-64' alt='card' src={hoveredTitle.card} />

                            <div className='flex justify-evenly text-golden text-xl my-6'>
                                {hoveredTitle.subtitles.map((title, ind) => {
                                    return (
                                        <p key={ind}>{title}</p>
                                    )
                                })}
                            </div>
                        </Link>
                    </div>

                    {/* buttons div */}
                    <div className='font-cinzel font-bold text-base flex flex-col sm:flex-row w-full items-center justify-between'>
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
            </div>

            {/* last div */}
            <div className=''>
                <div className='hidden sm:flex justify-around text-lg w-1/3 sm:w-5/12'>
                    <Link className='p-8' onClick={toggleMenu} to='/'>Schedule</Link>
                    <Link className='p-8' onClick={toggleMenu} to='/'>Contact us</Link>
                </div>

                {/* buttons div */}
                {/* <div className='font-cinzel font-bold text-base hidden sm:flex flex-col sm:flex-row w-full items-center justify-between w-3/5'>
                    <a className='bg-red text-golden py-4 px-8 rounded-md my-4'>Merch</a>
                    <a className='bg-green py-2.5 px-2.5 rounded-md flex items-center my-4' href='https://ca.elan.org.in' target='_blank'>
                        <img src={caPortalIcon} className='h-8 pr-2.5' alt='icon' />
                        <div>CA Portal</div>
                    </a>
                    <Link className='flex items-center text-center bg-yellow py-5 px-3.5 rounded-lg h-16 w-44 my-4 relative' style={{ borderRadius: '40px' }} to='/' onClick={props.toggleMenu}>
                        <img src={valenrowLogo} className='h-24 absolute -top-2' alt='icon' />
                        <div className='absolute left-12 text-sm'>Explore Valenrow</div>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Menu