import { useState } from "react"


export default function Slider({imagesList}){

  const [HoverValue, setHoverValue] = useState(false)

  const style={
    width: (imagesList.length * 100).toString()+'%',
    animation: HoverValue ? "bannermove " + (imagesList.length * 5).toString() + "s linear infinite paused" : "bannermove " + (imagesList.length * 5).toString() + "s linear infinite",
    display:'flex'
  }
  // HoverValue ? "animate-[bannermove_" + (imagesList.length * 5).toString() + "s_linear_infinite_paused]" : "animate-[bannermove_" + (imagesList.length * 5).toString() + "s_linear_infinite] !important"

  return(
    <div style={style}  onMouseEnter={()=>{setHoverValue(true)}} onMouseLeave={()=>{setHoverValue(false)}}>


      <div className="flex w-1/2">
        {imagesList.map((item) => (
          <div className="m-2 object-cover w-1/2 h-[30vw] overflow-hidden"><img src={item} alt="" className="h-full w-full"/></div>
        ))}
      </div>

      

      <div className="flex w-1/2">
        {imagesList.map((item) => (
          <div className="object-cover m-2 w-1/2 h-[30vw] overflow-hidden">
            <img src={item} alt=""  className="h-full w-full"/>
            </div>
        ))}
      </div>
      
    </div>
    
  )
}