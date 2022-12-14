import React, { useContext,useState } from 'react'
import ThemeContext from '../Contexts/ThemeContext'

// import '../styles/events.css'


function Navigate(){
  const [value,setValue]=useState(0)

  return(
    <div>
      <div id="options" className='flex justify-evenly pb-10'>
        <button onClick={() => setValue(0)} className={"pronites_btn rounded h-10 px-3 m-1 "+(value == 0 ? "bg-golden text-black" : "bg-blue text-golden")} >Pronites</button>
        <button onClick={() => setValue(1)} className={"workshops_btn rounded h-10 px-3 m-1 "+(value == 1 ? "bg-golden text-black" : "bg-blue text-golden")}>Workshops</button>
        <button onClick={() => setValue(2)} className={"informals_btn rounded h-10 px-3 m-1 "+(value == 2 ? "bg-golden text-black" : "bg-blue text-golden")} >Informals</button>
        <button onClick={() => setValue(3)} className={"biggies_btn rounded h-10 px-3 m-1 " +(value == 3 ? "bg-golden text-black" : "bg-blue text-golden")} >Biggies</button>

      </div>

      <div id="content">
        <div className={"sub_content pronites "+(value == 0 ? "block" : "hidden")}>
          <div className='sub_heading font-cinzel text-4xl text-golden font-bold' >
            PRONITES
          </div>

        </div>
        <div className={"sub_content workshops " + (value == 1 ? "block" : "hidden")}>
          <div className='sub_heading font-cinzel text-4xl text-golden font-bold'>
            WORKSHOPS
          </div>
        </div>
        <div className={"sub_content informals " + (value == 2 ? "block" : "hidden")}>
          <div className='sub-heading font-cinzel text-4xl text-golden font-bold' >
            INFORMALS
          </div>
        </div>
        <div className={"sub_content biggies " + (value == 3 ? "block" : "hidden")}>
          <div className='sub-heading font-cinzel text-4xl text-golden font-bold' >
            BIGGIES
          </div>
        </div>
      </div>
    </div>
  )
}

function Events() {
  const context = useContext(ThemeContext)



  return (
    <div id={context.theme} className="bg-black bg-no-repeat bg-[position:left_top_-4rem_,_right_bottom_-.8rem] p-10 bg-[url('./assets/designs/events_mobile_
    1.svg'),url('./assets/designs/events_mobile_2.svg')] ">
      <h1 className='heading font-berkshire text-6xl text-golden pt-16'>
        Events
      </h1>
      {<Navigate/>}
    </div>
  )
}


export default Events