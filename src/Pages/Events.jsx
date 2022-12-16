import React, { useContext,useState } from 'react'
import ThemeContext from '../Contexts/ThemeContext'
import appdev from "../assets/competitions/appdev.jpg"
import arduino from "../assets/competitions/arduino.jpg"
import Slider from '../Components/imageslider'
// import '../styles/events.css'

const image = [appdev, arduino]

function Navigate(){
  const [value,setValue]=useState(0)

  return(
    <div>
      <div id="options" className='flex justify-evenly pb-10'>
        <button onClick={() => setValue(0)} className={"pronites_btn rounded text-2xl px-3 m-1 "+(value == 0 ? "bg-golden text-black" : "bg-blue text-golden")} >Pronites</button>
        <button onClick={() => setValue(1)} className={"workshops_btn rounded text-2xl px-3 m-1 "+(value == 1 ? "bg-golden text-black" : "bg-blue text-golden")}>Workshops</button>
        <button onClick={() => setValue(2)} className={"informals_btn rounded text-2xl px-3 m-1 "+(value == 2 ? "bg-golden text-black" : "bg-blue text-golden")} >Informals</button>
        <button onClick={() => setValue(3)} className={"biggies_btn rounded text-2xl px-3 m-1 " +(value == 3 ? "bg-golden text-black" : "bg-blue text-golden")} >Biggies</button>

      </div>

      <div id="content">
        <div className={"sub_content pronites "+(value == 0 ? "block" : "hidden")}>
          <div className='sub_heading font-cinzel text-6xl text-golden font-bold' >
            PRONITES
          </div>
          <div className=''>
            <Slider imagesList={image} />
          </div>
        </div>
        <div className={"sub_content workshops " + (value == 1 ? "block" : "hidden")}>
          <div className='sub_heading font-cinzel text-6xl text-golden font-bold'>
            WORKSHOPS
          </div>
          <div className=''>
            <Slider imagesList={image} />
          </div>
        </div>
        <div className={"sub_content informals " + (value == 2 ? "block" : "hidden")}>
          <div className='sub-heading font-cinzel text-6xl text-golden font-bold' >
            INFORMALS
          </div>
          <div className=''>
            <Slider imagesList={image} />
          </div>
        </div>
        <div className={"sub_content biggies " + (value == 3 ? "block" : "hidden")}>
          <div className='sub-heading font-cinzel text-6xl text-golden font-bold' >
            BIGGIES
          </div>
          <div className=''>
            <Slider imagesList={image} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Events() {
  const context = useContext(ThemeContext)



  return (
    <div id={context.theme} className="bg-black bg-no-repeat bg-[position:left_top_-4rem,right_bottom_-.8rem] p-10 bg-[url('./assets/designs/events_mobile_
    1.svg'),url('./assets/designs/events_mobile_2.svg')] lg:bg-[url('./assets/designs/competitions_desktop_1.svg')] lg:bg-[right_top] lg:bg-[length:100px]">
      <h1 className='heading font-berkshire text-8xl text-golden pt-16 lg:text-[15rem]'>
        Events
      </h1>
      {<Navigate/>}
    </div>
  )
}


export default Events