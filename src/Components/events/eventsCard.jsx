import { useState } from "react";
import Popup from "reactjs-popup";

const cut_btn = 'https://ik.imagekit.io/himanshukumargupta/Elan/designs/competitions_cut_btn_ybw3n9.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876194858'


const popupnav = ['Intro', 'Rules', 'Timeline', 'Judging', 'Prizes', 'Contact']

function ShowDetails({ item, type }) {

  const [popupNavValue, setpopupNavValue] = useState(1)


  const contentStyle = {
    position: "fixed",
    zindex: '999',
    top: "0",
    right: "0",
    // height: "100px",
    backgroundColor: "red"
  };
  return (
    <div>
      <Popup trigger={
        <button className="bg-golden text-black rounded-md text-sm xl:text-md px-1 font-century m-1 leading-loose">Learn more</button>
      } position="center center">
        {close => (
          <div className='bg-blue w-full h-full px-5 vs:px-10 overflow-auto z-5 relative bg-[url("https://ik.imagekit.io/himanshukumargupta/Elan/designs/competitions_popup_2_hnuc9j.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876198898"),url("https://ik.imagekit.io/himanshukumargupta/Elan/designs/competitions_popup_3_vxn8rk.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876197366"),url("https://ik.imagekit.io/himanshukumargupta/Elan/designs/competitions_popup_4_gjif8z.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876196900"),url("https://ik.imagekit.io/himanshukumargupta/Elan/designs/competitions_popup_1_d6iegp.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876198633"),url("https://ik.imagekit.io/himanshukumargupta/Elan/designs/competitions_popup_5_secscd.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673876199503")] bg-no-repeat bg-[position:left_top,left_bottom,right_bottom,left_center,right_center] bg-[length:150px,100px,50px,100px,200px] rounded-xl'>
            <div className='text-4xl vvs:text-5xl text-golden font-cinzel mt-10 relative lg:text-6xl z-10 font-semibold'>{item.name}</div>
            <img src={cut_btn} alt="" className='block fixed right-5 top-5 w-6 hover:cursor-pointer' onClick={close} />
            <div className='flex flex-row  justify-evenly mb-5 flex-wrap'>
              {popupnav.map((nav_item, index) => (
                <button onClick={() => { setpopupNavValue(index + 1) }} className={'block text-xl px-2 m-2 leading-normal rounded ' + (popupNavValue == (index + 1) ? 'text-blue bg-golden' : 'text-golden bg-blue ')}>{nav_item}</button>
              ))}
            </div>
            <div className={'flex relative flex-col-reverse md:flex-row ' + (popupNavValue == 1 ? 'block' : 'hidden')}>
              <div className='w-full md:w-3/5 flex-col justify-evenly text-golden mx-1'>
                <div className='text-xl'>{item.details}</div>
                <button className="bg-golden text-black rounded-md text-2xl px-3 font-century mt-5 relative font-semibold">Register</button>
              </div>
              <img src={item.img} className='w-full md:w-2/5 mx-1 object-cover md:p-5 md:p-0 overflow-hidden' alt="" />
            </div>

            <div className='m-2 sm:m-5'>
              {popupnav.slice(1).map((item, index) => (
                <div className={'font-berkshire text-golden text-3xl lg:text-5xl  bg-[url("assets/designs/competitions_popup_1.svg")] bg-no-repeat mb-5 ' + (popupNavValue == (index + 2) ? ' block' : 'hidden')}>{item}</div>
              ))}


              <ul className={(popupNavValue == 2 ? ' block' : 'hidden') + ' list-disc'}>{item.rules.map((rules_item) => (
                <li className='text-golden mt-5 lg:text-xl whitespace-pre-wrap'>{rules_item}</li>
              ))}
              </ul>

              <div className={(popupNavValue == 3 ? ' block' : 'hidden')}>
                <ul className={type == 1 ? 'block' : 'hidden'}>
                  <li className='flex flex-col sm:flex-row'>
                    <div className='text-golden text-2xl  w-full sm:w-1/2'>Poster Release:</div>
                    <div className='text-golden text-lg vvs:text-xl font-berkshire w-full sm:w-1/2 text-right sm:text-left'>{item.timeline.poster}</div>
                  </li>
                  <li className='flex flex-col sm:flex-row'>
                    <div className='text-golden text-2xl w-full sm:w-1/2'>Event date:</div>
                    <div className='text-golden text-lg vvs:text-xl font-berkshire w-full sm:w-1/2 text-right sm:text-left'>{item.timeline.event}</div>
                  </li>
                </ul>
                <ul className={type == 0 ? 'block' : 'hidden'}>
                  <li className='flex flex-col sm:flex-row'>
                    <div className='text-golden text-xl w-full sm:w-1/2'>Registration Start Date:</div>
                    <div className='text-golden text-lg vvs:text-xl font-berkshire w-full sm:w-1/2 text-right sm:text-left'>{item.timeline.regstart}</div>
                  </li>
                  <li className='flex flex-col sm:flex-row'>
                    <div className='text-golden text-xl w-full sm:w-1/2'>Registration End Date:</div>
                    <div className='text-golden text-lg vvs:text-xl font-berkshire w-full sm:w-1/2 text-right sm:text-left'>{item.timeline.regend}</div>
                  </li>
                  <li className='flex flex-col sm:flex-row'>
                    <div className='text-golden text-xl w-full sm:w-1/2'>Event Date & Time:</div>
                    <div className='text-golden text-lg vvs:text-xl font-berkshire w-full sm:w-1/2 text-right sm:text-left whitespace-pre-wrap'>{item.timeline.event}</div>
                  </li>
                </ul>

              </div>

              <ul className={(popupNavValue == 4 ? ' block' : ' hidden') + ' list-disc'}>
                {item.judging.map((judging_item) => (
                  <li className='text-golden text-xl mt-3 whitespace-pre-wrap'>{judging_item}</li>
                ))}
              </ul>
              <ul className={(popupNavValue == 5 ? ' block' : ' hidden') + ' list-disc'}>
                {item.prizes.map((prizes_item) => (
                  <li className='text-golden text-xl mt-5  whitespace-pre-wrap'>{prizes_item}</li>
                ))}
              </ul>
              <ul className={'list-disc text-golden' + (popupNavValue == 6 ? ' block' : ' hidden')}>
                {item.contact.map((contact_item) => (
                  <li className='text-golden text-xl flex mt-5 flex-col vs:flex-row'>
                    <div className=' w-full vs:w-1/2'>{contact_item.name}</div>
                    <div className=' w-full vs:w-1/2 text-right vs:text-left'>{contact_item.contact}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default function Hii({ data, sliderValue, type }) {



  return (

    data.map((item, index) => (
      
      <div className={"my-10 block w-full xs:w-1/2 lg:w-1/4"}>
        <div className='m-2 bg-blue rounded-tl-2xl rounded-br-2xl overflow-hidden'>
          <img src={item.img} className='mt-5 xs:mt-0 object-cover m-auto lg:h-[15vw] h-[30vw] lg:w-full mb-5 lg:block' alt="" />
          <div className='font-cinzel text-[10vw] vvs:text-4xl md:text-5xl lg:text-2xl xl:text-3xl text-golden text-center font-bold mb-5'>{item.name}</div>


          {/* <div className='text-xl text-golden text-thin font-century lg:hidden mx-5'>{item.details}
          </div> */}
          <div className='flex justify-evenly py-5'>
            <a href={item.reglink}>
              <button className="bg-golden text-black rounded-md text-sm xl:text-md px-1 font-century m-1 leading-loose">Register Now</button></a>
            <ShowDetails item={item} type={type} />

          </div>
        </div>

      </div>
    ))

  )
}

