import React from 'react'

import vase from '../assets/litfest_vase.svg'
import mushroom from '../assets/litfest_mushroom.svg'
import vase_lg from '../assets/litfest_vase_desktop.svg'
import hands from '../assets/litfest_hands.svg'

function Litfest() {
  return (
    <div>

      <div className='p-5 pb-32 md:pb-10 text-golden relative'>
        <h1 className='font-berkshire text-8xl pt-14 md:pl-8'>Litfest</h1>

        <p className='py-5 pl-3 z-10 relative'>Take a break from the grind and witness amazing shows brought to you at home for free! Fun and Enjoyment has no end! Register for an exhilarating experience now!</p>

        <div className='flex justify-center'>
          <button className="bg-golden text-black text-xl rounded-lg px-3 py-2">Learn More</button>
        </div>

        {/* bg images */}
        <div className='block lg:hidden absolute right-0 top-[2%] h-[23vh]'><img className='h-full' src={vase}></img></div>
        <div className='absolute bottom-0 left-0 h-[24vh]'><img className='h-full' src={mushroom}></img></div>
        <div className='absolute right-0 top-[10%] h-[35vh]'><img className='h-full' src={vase_lg}></img></div>
        <div className='hidden lg:block absolute right-0 bottom-0 h-[25vh]'><img className='h-full' src={hands}></img></div>
        
      </div>
    </div>

  )
}

export default Litfest