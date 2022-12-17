import React, { useContext,useState } from 'react'
import ThemeContext from '../Contexts/ThemeContext'
import appdev from "../assets/competitions/appdev.jpg"
import arduino from "../assets/competitions/arduino.jpg"
import Slider from '../Components/imageslider'
import { eventsdata } from '../Components/events/eventsdata'
// import '../styles/events.css'
import EventSlider from '../Components/events/eventsslider'

const image = [appdev, arduino]

const navoptions=['Pronites','Workshops','Informals']

function Navigate(){
  const [value,setValue]=useState(0)

  return(
    <div>
      <div id="options" className='flex justify-evenly pb-10'>
        {navoptions.map((nav_item,index)=>(
          <button onClick={() => setValue(index)} className={"pronites_btn rounded text-2xl leading-loose px-3 m-1 " + (value == index ? "bg-golden text-black" : "bg-blue text-golden")} >{nav_item}</button>
        ))}

      </div>

      <div id="content">
        {eventsdata.map((item,index)=>(
          <div className={"sub_content pronites " + (value == index ? "block" : "hidden")}>
            <div className='sub_heading font-cinzel text-6xl text-golden font-bold' >
              {item.name}
            </div>
            <div className=''>
              <EventSlider imagesList={item.img} />
            </div>
            <div className='text-golden text-xl'>{item.description}</div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

function Events() {
  const context = useContext(ThemeContext)



  return (
    <div id={context.theme} className="bg-black bg-no-repeat bg-[position:left_top_-4rem,right_bottom_-.8rem] p-10 bg-[url('./assets/designs/events_mobile_
    1.svg'),url('./assets/designs/events_mobile_2.svg')] lg:bg-[url('./assets/designs/competitions_desktop_1.svg')] lg:bg-[right_top] lg:bg-[length:100px]">
      <h1 className='heading font-berkshire text-8xl text-golden pt-16 lg:text-[12rem]'>
        Events
      </h1>
      {<Navigate/>}
    </div>
  )
}


export default Events