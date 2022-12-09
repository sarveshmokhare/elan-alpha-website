import React, { useContext, useRef } from 'react'

import ThemeContext from '../Contexts/ThemeContext'
import '../styles/homepage.css'
import logo from '../assets/logo_white.png'
import caPortalIcon from '../assets/ca_portal_icon.svg'
import valenrowIcon from '../assets/valenrow_icon.svg'
import moon from '../assets/moon.svg'
import line from '../assets/line.svg'
import rings from '../assets/rings.svg'
import book from '../assets/book.svg'
import aboutLeft from '../assets/about_left.svg'
import aboutRight from '../assets/about_right.svg'
import valenrowLogo from '../assets/valenrow_logo.svg'

function HomePage() {
  const context = useContext(ThemeContext)

  const myRef = useRef(null)

  return (
    <div className={context.theme}>
      {/* Intro */}
      <div className='dark:bg-black flex flex-col items-center dark:text-white font-cinzel font-bold pt-14 pb-8'>
        <div><img src={logo} className='h-16' /></div>

        <div className='py-6'>
          <img alt='valenrow_logo' src={valenrowLogo} />
        </div>

        <div className='flex flex-col items-center'>
          <a className='bg-red text-golden py-4 px-8 rounded-md my-4'>Merch</a>
          <a href='https://ca.elan.org.in' target='_blank' className='bg-green py-2.5 px-2.5 rounded-md flex items-center my-4'>
            <img src={caPortalIcon} className='h-8 pr-2.5' alt='icon' />
            <div>CA Portal</div>
          </a>
          <div className='flex items-center text-center bg-yellow py-5 px-3.5 rounded-lg h-16 w-44 my-4 relative' style={{ borderRadius: '40px' }}>
            <img src={valenrowIcon} className='h-24 absolute -top-2' alt='icon' />
            <div className='absolute left-12 text-sm' ref={myRef} onClick={() => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Explore Valenrow</div>
          </div>
        </div>

        <div className='flex w-full justify-around items-center pt-5'>
          <img src={moon} alt='graphic' />
          <div className='w-60 h-0.5 bg-golden rounded-full'></div>
          <img src={rings} alt='graphic' />
        </div>
      </div>

      {/* About Us */}
      <div className='dark:bg-black text-golden py-8'>
        <div className='flex justify-evenly'>
          <img className='h-5' alt='graphic' src={aboutLeft} />
          <h1 className='text-3xl font-cinzel font-bold'>About Us</h1>
          <img className='h-5' alt='graphic' src={aboutRight} />
        </div>

        <div className='flex p-6 pb-0 items-start'>
          <p>Elan and ηVision is the annual techno-cultural fest of IIT Hyderabad and is one of the largest fests in South India. It is entirely organized by IITH students.</p>
          <img className='h-24 pl-5' alt='book' src={book} />
        </div>
        <p className='p-6 pt-0'>Elan refers to the cultural part and ηVision cites the technological part of the fest.This festival features several professional and semi-professional crowd-pulling events and promises to be a grand event showcasing the best of cultural performances, technical solutions, and student community advances</p>
      </div>

      {/* Timeline */}
      <div className='dark:bg-black text-golden p-10 box-content'>
        <h1 className='font-berkshire text-5xl'>Timeline</h1>
      </div>

      {/* Explore */}
      <div className='dark:bg-black text-golden p-10 box-content'>
        <h1 className='font-berkshire text-5xl'>Explore</h1>

      </div>

      {/* Gallery */}
      <div className='dark:bg-black text-golden p-10 box-content'>
        <h1 className='font-berkshire text-5xl'>Gallery</h1>

      </div>

      {/* Stats */}
      <div className='dark:bg-black text-golden p-10 box-content'>
        <h1 className='font-berkshire text-5xl'>Stats</h1>

      </div>
    </div>
  )
}

export default HomePage