import React, { useContext, useState } from 'react'
import ThemeContext from '../Contexts/ThemeContext'
import arrow from '../assets/designs/competitions_arrow.svg'
import cut_btn from '../assets/designs/competitions_cut_btn.svg'
import { cultidata } from '../Components/competitions/Cultidata'
import { techydata } from '../Components/competitions/TechyData'
import Popup from 'reactjs-popup'
import appdev from "../assets/competitions/appdev.jpg"
import arduino from "../assets/competitions/arduino.jpg"
import Slider from '../Components/imageslider'
// import "reactjs-popup/dist/index.css";
import "../styles/competitions.css";

const image = [appdev, arduino]





function ShowDetails({ item }) {

  const contentStyle = {
    position: "fixed",
    zindex:'999',
    top:"0",
    right:"0",
    // height: "100px",
    backgroundColor: "red"
  };
  // bg - [position: left_top_ - 5rem_, _right_bottom_ - 4.5rem]
  return (
    <div>
      <Popup  trigger={
        <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1  ">Learn more</button>
      } position="center center">
        {close=>(
          <div className='bg-blue w-full h-full px-10 overflow-auto z-5 relative bg-[url("assets/designs/competitions_popup_2.svg"),url("assets/designs/competitions_popup_3.svg"),url("assets/designs/competitions_popup_4.svg"),url("assets/designs/competitions_popup_1.svg"),url("assets/designs/competitions_popup_5.svg")] bg-no-repeat bg-[position:left_top,left_bottom,right_bottom,left_center,right_center] bg-[length:150px,100px,50px,100px,200px] rounded-xl'>
            <div className='text-5xl text-golden font-cinzel mt-10 relative z-10'>{item.name}</div>
            <img src={cut_btn} alt="" className='block fixed right-5 top-5 w-7 hover:cursor-pointer' onClick={close}/>
            <div className='flex relative'>
              <div className='w-2/3 flex-col justify-evenly text-golden mx-1'>
                <div>{item.details}</div>
                <button className="bg-golden text-black rounded-lg px-3 font-century m-1 relative">Register</button>
              </div>
              <img src={item.img} className='w-1/3 mx-1 object-cover' alt="" />
            </div>
            <div className='relative'></div>
            {/* <img src={popup1} alt="" className='w-40 top-0 ' />             */}
            <div className='font-berkshire text-golden text-3xl  bg-[url("assets/designs/competitions_popup_1.svg")] bg-no-repeat'>Rules</div>

            <div>foshfoisjiofeiotgejg</div>
          </div>
        )}
      </Popup>
    </div>
  )
}

function Hii({data,sliderValue}){
  
    

    return(
        
    data.map((item, index) => (
        <div className={'my-10 w-full ' + (sliderValue == index ? "block" : "hidden") + " lg:block lg:w-1/3 "}>
          <div className='m-2 lg:bg-blue lg:rounded-tl-2xl rounded-br-2xl overflow-hidden'>
            <img src={item.img} className=' object-cover m-auto lg:h-[20vw] h-[60vw] lg:w-full mb-5 hidden lg:block' alt="" />
            <div className='font-cinzel text-3xl text-golden text-center font-bold mb-5'>{item.name}</div>


            <div className='text-xs text-golden text-thin font-century lg:hidden mx-5'>{item.details}
            </div>
            <div className='flex justify-evenly py-5'>
              <button className="bg-golden text-black rounded-lg h-10 px-3 font-century m-1">Register Now</button>
              <ShowDetails item={item} />

            </div>
          </div>

        </div>
        ))
    
    )
}

function Navigate() {
  const [Navigatevalue, setNavigateValue] = useState(1)
  const [sliderValue, setSliderValue] = useState(1)

  return (
    <div className='z-0'>
      <div className='flex lg:justify-center justify-evenly pb-10'>
        <button onClick={() => setNavigateValue(0)} className={"rounded px-8 m-5 lg:leading-normal lg:text-4xl " + (Navigatevalue == 0 ? "bg-golden text-black" : "bg-blue text-golden")} >Techy</button>
        <button onClick={() => setNavigateValue(1)} className={"rounded px-8 m-5 lg:leading-normal lg:text-4xl " + (Navigatevalue == 1 ? "bg-golden text-black" : "bg-blue text-golden")}>Culti</button>
      </div>

      <div className='lg:hidden'>
        <Slider imagesList={image} />
      </div>
      <img src={arrow} alt="arrow" className='m-auto mb-10 w-11/12 block relative lg:hidden' />
      <input type="range" min={0} max={Navigatevalue == 1 ? 10 : 12} defaultValue={0} id="slider" onChange={(e) => {
        setSliderValue(e.target.value)
      }} className="w-10/12  top-[-55px] right-0 bg-golden block m-auto relative lg:hidden" />

      
      <div className={("flex flex-wrap justify-evenly")}>
        <Hii data={Navigatevalue==1?cultidata:techydata} sliderValue={sliderValue}/>
      </div>
    </div>
  )
}

function Competitions() {
  const context = useContext(ThemeContext)

  return (
    <div className={context.theme + " bg-black bg-no-repeat p-10 bg-[position:left_top_-5rem_,_right_bottom_-4.5rem] bg-[url('./assets/designs/competitions_mobile_1.svg'),url('./assets/designs/competitions_mobile_2.svg')] lg:bg-[url('./assets/designs/competitions_desktop_1.svg')] lg:bg-[right_top] lg:bg-[length:100px]"}>
      <h1 className='heading font-berkshire text-8xl text-center text-golden pt-16 relative z-10 md:text-9xl'>
        Competitions
      </h1>
      {<Navigate />}
    </div>
  )
}

export default Competitions