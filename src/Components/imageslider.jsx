import { useState } from "react"


export default function Slider({imagesList}){

  const [HoverValue, setHoverValue] = useState(false)


  return(
    <div className={" flex w-[200%] " + (HoverValue ? "animate-[bannermove_10s_linear_infinite_paused]" :"animate-[bannermove_10s_linear_infinite]")}  onMouseEnter={()=>{setHoverValue(true)}} onMouseLeave={()=>{setHoverValue(false)}}>


      <div className="flex w-1/2">
        {imagesList.map((item) => (
          <div className="m-2 object-cover w-1/2"><img src={item} alt="" /></div>
        ))}
      </div>

      <div className="flex w-1/2">
        {imagesList.map((item) => (
          <div className="m-2 w-1/2"><img src={item} alt="" /></div>
        ))}
      </div>
      
    </div>
    
  )
}