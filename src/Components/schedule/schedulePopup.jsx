import { useState } from "react";
import Popup from "reactjs-popup";
import { ScheduleData } from "./ScheduleData";
import cut_btn from '../../assets/designs/competitions_cut_btn.svg'

export default function SchedulePopup() {

  const [popupNavValue, setpopupNavValue] = useState(1)
  // const popupnav = ['Intro', 'Rules', 'Timeline', 'Judging', 'Prizes', 'Contact']


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
        <button className="opacity-1 lg:opacity-1 bg-[#1E90FF] rounded-lg my-4 flex items-center justify-center h-16 w-48 lg:w-[16vw] lg:h-[10vh] lg:p-0 text-center"
          href="https://ca.elan.org.in"
          target="_blank"
          >
          {/* <img src={caPortalIcon} className="pr-3 h-7 md:h-5 lg:h-1/2" alt="icon" /> */}
          <p className="text-base md:text-sm lg:text-[3vh]">Schedule</p>
        </button>
        // <button className="bg-[#ADD8E6] text-black rounded-md w-[150px] h-[40px] text-lg xl:text-md px-1 font-century m-1 leading-loose">Schedule</button>
      } position="center center">
        {close => (
          <div className='bg-blue w-full h-full px-5 vs:px-10 overflow-auto z-5 relative rounded-xl pb-5'>
            {/* <div className='text-4xl vvs:text-5xl text-golden font-cinzel mt-10 relative lg:text-6xl z-10 font-semibold'>{item.name}</div> */}
            <img src={cut_btn} alt="" className='block fixed right-5 top-5 w-6 hover:cursor-pointer' onClick={close} />
            <div className='flex flex-row  justify-evenly mb-5 flex-wrap mt-5'>
              {ScheduleData.map((nav_item, index) => (
                <button onClick={() => { setpopupNavValue(index + 1) }} className={'block text-xl px-2 m-2 leading-normal rounded ' + (popupNavValue == (index + 1) ? 'text-blue bg-golden' : 'text-golden bg-blue border-[.1px] border-golden')}>{nav_item.date}</button>
              ))}
            </div>
            <div>
              {ScheduleData.map((item,index)=>(
                (popupNavValue==index+1) &&
                  
                  <div className="text-golden flex flex-col">
                    <div className="flex mb-3">
                      <div className="w-1/3 font-berkshire vs:text-3xl text-2xl">Timings</div>
                      <div className="w-1/3 font-berkshire vs:text-3xl text-2xl">Venue</div>
                      <div className="w-1/3 font-berkshire vs:text-3xl text-2xl">Event</div>
                    </div>
                    {item.events.map((events_item)=>(
                      <div className="flex ">
                        <div className="w-1/3">{events_item.time}</div>
                        <div className="w-1/3">{events_item.venue}</div>
                        <div className="w-1/3">{events_item.event}</div>
                      </div>
                    ))}
                  </div>
                
              ))}
            </div>


          </div>
        )}
      </Popup>
    </div>
  )
}