

import React, { useContext, useState, useEffect } from 'react'
import gsap from 'gsap'
import ThemeContext from '../Contexts/ThemeContext'
import Popup from 'reactjs-popup'
import cut_btn from '../assets/designs/competitions_cut_btn.svg'
import arrow from '../assets/designs/competitions_arrow.svg'

const vase = 'https://ik.imagekit.io/sarvesh/Elan/more_assets/litfest_vase_jn4wbk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672127201851'
const mushroom = 'https://ik.imagekit.io/sarvesh/Elan/more_assets/litfest_mushroom_jt9txv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672129181806'
const vase_lg = 'https://ik.imagekit.io/sarvesh/Elan/more_assets/litfest_vase_desktop_qxj85o.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672127202136'
const hands = 'https://ik.imagekit.io/sarvesh/Elan/more_assets/litfest_hands_uoojkg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672127202436'
import LitfestSlider from '../Components/litfest/litfestslider'
import { litfestdata } from '../Components/litfest/litfestdata'
// import "reactjs-popup/dist/index.css";
import "../styles/competitions.css";



const style = {
  textshadow: '5px 5px'
}
const popupnav = ['Intro', 'Rules', 'Date', 'Judging']

function ShowDetails({ item }) {

  const [popupNavValue, setpopupNavValue] = useState(1)

  console.log(!item.reglink)
  return (
    <div>
      <Popup trigger={
        <button className="bg-golden text-black rounded-md text-sm xl:text-md px-1 font-century m-1 leading-loose">Learn more</button>
      } position="center center">
        {close => (
          <div className='bg-blue w-full h-full px-5 vs:px-10 overflow-auto z-5 relative bg-[url("assets/designs/competitions_popup_2.svg"),url("assets/designs/competitions_popup_3.svg"),url("assets/designs/competitions_popup_4.svg"),url("assets/designs/competitions_popup_1.svg"),url("assets/designs/competitions_popup_5.svg")] bg-no-repeat bg-[position:left_top,left_bottom,right_bottom,left_center,right_center] bg-[length:150px,100px,50px,100px,200px] rounded-xl'>
            <div className='text-4xl vvs:text-5xl text-golden font-cinzel mt-10 relative lg:text-6xl z-10 font-semibold mb-5'>{item.name}</div>
            <img src={cut_btn} alt="" className='block fixed right-5 top-5 w-6 hover:cursor-pointer' onClick={close} />
            <div className='flex flex-row  justify-evenly mb-5 flex-wrap'>
              {popupnav.map((item, index) => (
                <button onClick={() => { setpopupNavValue(index + 1) }} className={'block text-xl px-2 m-2 leading-normal rounded ' + (popupNavValue == (index + 1) ? 'text-blue bg-golden' : 'text-golden bg-blue ')}>{item}</button>
              ))}
            </div>
            <div className={'flex relative flex-col-reverse md:flex-row ' + (popupNavValue == 1 ? 'block' : 'hidden')}>
              {item.description.length != 0 ? <><div className='w-full md:w-3/5 flex-col justify-evenly text-golden mx-1'>
                <div className='text-xl mb-5  whitespace-pre-wrap'>{item.description}</div>
                <a className={'w-full bg-golden text-black rounded-md text-2xl px-3 py-1 font-century  relative hover:cursor-pointer font-semibold ' + (!item.reglink ? ' hidden' : ' inline')} href={item.reglink}>Register</a>
              </div>
                <img src={item.img} className='w-full md:w-2/5 mx-1 md:object-contain object-contain p-5 xs:p-10 md:p-5 md:p-0 overflow-hidden' alt="" /></> : <img src={item.img} className='w-full mx-1 md:object-contain object-contain p-5 xs:p-10 md:p-5 md:p-0 overflow-hidden' alt="" />}
            </div>

            <div className='m-5'>
              {popupnav.slice(1).map((item, index) => (
                <div className={'font-berkshire text-golden text-3xl lg:text-5xl  bg-[url("assets/designs/competitions_popup_1.svg")] bg-no-repeat mb-5 ' + (popupNavValue == (index + 2) ? ' block' : 'hidden')}>{item}</div>
              ))}


              <ul className={(popupNavValue == 2 ? ' block ' : 'hidden ') + 'list-disc'}>{item.rules.map((rules_item) => (
                <li className='text-golden mt-5 lg:text-xl whitespace-pre-wrap'>{rules_item}</li>
              ))}
              </ul>

              <div className={'text-golden text-2xl' + (popupNavValue == 3 ? ' block' : ' hidden')}>{item.date}</div>

              <ul className={(popupNavValue == 4 ? ' block ' : ' hidden ') + 'list-disc'}>
                {item.judging.map((judging_item) => (
                  <li className='text-golden text-xl mt-3 whitespace-pre-wrap'>{judging_item}</li>
                ))}
              </ul>

            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

function Hii({ data, sliderValue }) {



  return (

    data.map((item, index) => (
      <div className={'my-10 w-full ' + (sliderValue == index ? "block" : "hidden") + " lg:block lg:w-1/4 "}>
        <div className='m-2 lg:bg-blue lg:rounded-tl-2xl rounded-br-2xl overflow-hidden'>
          <img src={item.img} className=' object-cover m-auto lg:h-[20vw] h-[60vw] lg:w-full mb-5 hidden lg:block' alt="" />
          <div className='font-cinzel text-[10vw] vvs:text-4xl md:text-5xl lg:text-3xl xl:text-4xl text-golden text-center font-bold mb-5'>{item.name}</div>


          <div className='text-xl text-golden text-thin font-century lg:hidden mx-5'>{item.more}
          </div>
          <div className='flex justify-evenly py-5'>
            <a className={"bg-golden text-black rounded-md text-sm xl:text-md px-1 font-century m-1 leading-loose " + (item.reglink ? ' inline' : ' hidden')} href={item.reglink}>Register Now</a>
            <ShowDetails item={item} />

          </div>
        </div>

      </div>
    ))

  )
}

function Navigate() {
  const [sliderValue, setSliderValue] = useState(0)
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  const imagesList = litfestdata.map((item) => item.img)
  const last = litfestdata.length - 1

  const itemstyle = {
    position: 'relative',
    margin: '5px',
    width: (100 / imagesList.length).toString() + '%',
    height: (100 * 4 / 10).toString() + 'vw',
  }

  React.useEffect(() => {
    document.getElementById('scrolldiv').addEventListener('scroll', () => {

      var i
      for (i = 0; i <= last; i++) {
        var id_no = document.getElementById("img" + i.toString())
        var rect = id_no.getBoundingClientRect();
        if ((rect.right > width / 2) && (rect.left < width / 2)) {
          console.log(i)
          setSliderValue(i)
          break
        }
      }

    })
  })

  return (
    <div className='z-0'>

      <div className='lg:hidden overflow-x-scroll  w-[100%]' id='scrolldiv'>
        <div className='w-[700%] flex relative px-[35vw]' id='hii'>
          {imagesList.map((item, index) => (
            <div style={itemstyle} id={'img' + index.toString()}><img src={item} alt="" className="h-full w-full object-cover" /></div>
          ))}
        </div>

      </div>
      {/* <div className='lg:hidden'>
        <LitfestSlider imagesList={litfestdata.map((item) => item.img)} size={width >= 500 ? 3 : 2} />
      </div> */}
      <img src={arrow} alt="arrow" className='m-auto my-10 w-11/12 block relative lg:hidden' />
      <input type="range" min={0} max={litfestdata.length - 1} defaultValue={0} id="slider" value={sliderValue} onChange={(e) => {
        setSliderValue(e.target.value)
      }} className="w-10/12  top-[-55px] right-0  block m-auto relative lg:hidden" />


      <div className={("flex flex-wrap justify-evenly relative z-10")}>
        <Hii data={litfestdata} sliderValue={sliderValue} />
      </div>
    </div>
  )
}

function Litfest() {
  useEffect(() => {
    const ctx = gsap.context(() => {

    })
    gsap.set(
      document.querySelector("header"),
      { opacity: 1, }
    );

    return () => { ctx.revert(); }
  }, [])

  const context = useContext(ThemeContext)

  return (
    <div className={"mt-[76px] lg:mt-0 overflow-hidden bg-black bg-no-repeat p-3 vs:p-10 relative"}>
      <h1 className='font-berkshire text-7xl py-8 md:py-8  vvs:text-8xl vs:text-9xl  z-10 relative text-golden'>Litfest</h1>
      <div className='relative z-5'>
        <Navigate />
      </div>


      <div className='block lg:hidden absolute right-0 top-[0] h-[150px] vs:h-[200px]'><img className='h-full' src={vase}></img></div>
      <div className='absolute bottom-0 left-0 h-[18vh] lg:h-[26vh]'><img className='h-full' src={mushroom}></img></div>
      <div className='absolute right-0 top-[30px] h-[20vw]  hidden lg:block'><img className='h-full' src={vase_lg}></img></div>
      <div className='hidden lg:block absolute right-0 bottom-0 h-[25vh]'><img className='h-full' src={hands}></img></div>
    </div>
  )
}

export default Litfest