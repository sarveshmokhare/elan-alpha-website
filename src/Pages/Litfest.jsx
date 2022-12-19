import React,{useState} from 'react'

import line_terror from '../assets/litfest/2line_terror.png'
import crossword from '../assets/litfest/crosswords.png'
import flash from '../assets/litfest/flash_fiction.png'
import haiku from '../assets/litfest/haiku.png'
import inked from '../assets/litfest/Inked_Verses.jpg'
import its2032 from '../assets/litfest/Its_2032.png'
import shipwreck from '../assets/litfest/shipwreck.png'
import meant from '../assets/litfest/thats_what_they_meant.png'
import whatif from '../assets/litfest/what_if.png'
import word_games from '../assets/litfest/word_games.png'


import vase from '../assets/litfest_vase.svg'
import mushroom from '../assets/litfest_mushroom.svg'
import vase_lg from '../assets/litfest_vase_desktop.svg'
import hands from '../assets/litfest_hands.svg'
import LitfestSlider from '../Components/litfest/litfestslider'

const sliderimages=[line_terror,crossword,flash,haiku,inked,its2032,shipwreck,meant,whatif,word_games]



function Litfest() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));
  return (
    <div className='mt-[76px] lg:mt-0 relative overflow-hidden'>
      <div className='p-5  pb-40 xs:m-10 md:pb-30 text-golden overflow-visible z-10'>
        <h1 className='font-berkshire text-7xl py-14 md:py-8  vvs:text-8xl z-10 relative'>Litfest</h1>
        <div className='relative z-10'>
        <LitfestSlider imagesList={sliderimages} size={width >= 800 ? 5 : 3} />
        </div>
        <p className='pt-10 z-10 relative text-xl'>Take a break from the grind and witness amazing shows brought to you at home for free! Fun and Enjoyment has no end! Register for an exhilarating experience now!</p>

        <div className='flex justify-center z-10 relative mt-5'>
          <button className="bg-golden text-black text-xl rounded-lg px-3 py-2 ">Learn More</button>
        </div>

      </div>
        {/* bg images */}
        
      <div className='block lg:hidden absolute right-0 top-[0] h-[100px] xs:h-[200px] '><img className='h-full' src={vase}></img></div>
      <div className='absolute bottom-0 left-0 h-[24vh]'><img className='h-full' src={mushroom}></img></div>
      <div className='absolute right-0 top-[30px] h-[35vh] hidden lg:block'><img className='h-full' src={vase_lg}></img></div>
      <div className='hidden lg:block absolute right-0 bottom-0 h-[25vh]'><img className='h-full' src={hands}></img></div>
      </div>
      

  )
}

export default Litfest