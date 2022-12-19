import React, { useContext,useState } from 'react'
import ThemeContext from '../Contexts/ThemeContext'
import appdev from "../assets/competitions/appdev.jpg"
import arduino from "../assets/competitions/arduino.jpg"
import { eventsdata } from '../Components/events/eventsdata'
// import '../styles/events.css'
import EventSlider from '../Components/events/eventsslider'


const navoptions = ['Workshops','Pronites','Informals','']

function Navigate(){
  const [value,setValue]=useState(0)
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return(
    <div>
      <div id="options" className='flex justify-evenly pb-10'>
        {eventsdata.map((nav_item,index)=>(
          <button onClick={() => setValue(index)} className={"pronites_btn rounded text-sm vvs:text-xl vs:text-2xl leading-normal p-1 text-lg vs:px-3 vs:m-1 flex-wrap " + (value == index ? "bg-golden text-black" : "bg-blue text-golden")} >{nav_item.name}</button>
        ))}

      </div>

      <div id="content">
        {eventsdata.map((item,index)=>(
          <div className={"sub_content pronites " + (value == index ? "block" : "hidden")}>
            <div className='sub_heading font-cinzel text-4xl vs:text-6xl text-golden font-bold' >
              {item.name}
            </div>
            <div className='mb-10'>
              {item.img.length>0?
                <EventSlider imagesList={item.img} size={width >= 850 ? 4 : 2} />:undefined}
              
            </div>
            <div className='text-golden text-xl'>{item.description}</div>
            <ul className='mt-5'>
              {item.examples.map((examples_item)=>(
               <li>
                  <div className='text-golden bold-normal text-lg list-disc'>{examples_item.name}</div>
                  <div className='text-golden ml-5 mb-5'>{examples_item.description}</div>
               </li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    </div>
  )
}

function Events() {
  const context = useContext(ThemeContext)



  return (
    <div className=" overflow-hidden bg-black bg-no-repeat bg-[position:left_top_-4rem,right_bottom_-.8rem] p-10 bg-[url('./assets/designs/events_mobile_1.svg'),url('./assets/designs/events_mobile_2.svg')] max-[360px]:bg-[length:90vw] lg:bg-[url('./assets/designs/competitions_desktop_1.svg')] lg:bg-[right_top] lg:bg-[length:100px]">
      <h1 className='heading font-berkshire text-7xl vs:text-8xl text-golden pt-16 lg:pt-0 lg:text-[10rem]'>
        Events
      </h1>
      {<Navigate/>}
    </div>
  )
}


export default Events