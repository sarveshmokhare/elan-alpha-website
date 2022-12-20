import { useState } from "react"
import "../styles/slider.css";


export default function GallerySlider({ imagesList, size }) {

  const [HoverValue, setHoverValue] = useState(false)
  const length = imagesList.length
  var style, itemstyle, insidestyle, repetition;
  const num=Math.ceil(size * 2 / imagesList.length)
  itemstyle = {
    margin: '5px',
    width: (100 / length).toString() + '%',
    height: (100 / size * 3 / 5).toString() + 'vw',
  }

  if (length < 2 * size) {
    repetition = new Array(num).fill(1)

    insidestyle = {
      width: (100 / num).toString() + '%',
      display: 'flex'
    }

    style = {
      width: (length * num *100 / size).toString() + '%',
      animation: HoverValue ? "bannermove " + (imagesList.length * 5).toString() + "s linear infinite paused" : "bannermove " + (imagesList.length * 5).toString() + "s linear infinite",
      display: 'flex'
    }
  }
  else {
    repetition = new Array(2).fill(1)
    insidestyle = {
      width: '50%',
      display: 'flex'
    }
    
    style = {
      width: (length * 200 / size).toString() + '%',
      animation: HoverValue ? "bannermove " + (length * 5).toString() + "s linear infinite paused" : "bannermove " + (length * 5).toString() + "s linear infinite",
      display: 'flex'
    }
  }

  return (
    <div style={style} onMouseEnter={() => { setHoverValue(true) }} onMouseLeave={() => { setHoverValue(false) }} className='z-10 relative p-5'>

      {repetition.map(() => (
        <div style={insidestyle}>
          {imagesList.map((item) => (
            <div style={itemstyle} className='relative lg:h-[26rem] lg:w-[16rem]'>
              <img src={item} alt="" className="h-full w-full" />
              <div className="bottom-0 h-[100%] w-full absolute bg-gradient-to-t from-[rgba(4,0,15,0.9)] via-[rgba(11,4,33,0.35)] to-transparent"></div>
            </div>
          ))}
        </div>
      ))}
    </div>

  )
}