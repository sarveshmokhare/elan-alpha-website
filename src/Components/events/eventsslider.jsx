import { useState } from "react"
import "../../styles/slider.css";


export default function EventsSlider({ imagesList, size,imgheight, typeList }) {

  const [HoverValue, setHoverValue] = useState(false)
  const length = imagesList.length
  var style, itemstyle, insidestyle, repetition;
  const num=Math.ceil(size * 2 / imagesList.length)
  itemstyle = {
    margin: '5px',
    width: (100 / length).toString() + '%',
    height: (100 / size * imgheight).toString() + 'vw',
  }

  if (length < 2 * size) {
    repetition = new Array(num).fill(1)

    insidestyle = {
      width: (100 / num).toString() + '%',
      display: 'flex'
    }

    style = {
      width: (length * num *100 / size).toString() + 'vw',
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
      width: (length * 200 / size).toString() + 'vw',
      animation: HoverValue ? "bannermove " + (length * 5).toString() + "s linear infinite paused" : "bannermove " + (length * 5).toString() + "s linear infinite",
      display: 'flex'
    }
  }

  return (
    <div style={style} onMouseEnter={() => { setHoverValue(true) }} onMouseLeave={() => { setHoverValue(false) }}>

      {repetition.map(() => (
        <div style={insidestyle} className="h-[50vw] dm:h-[25vw]" >
          {imagesList.map((item,index) => (
            // <div style={itemstyle}><img src={item} alt="" className="h-full w-full object-cover" /></div>
            <div style={itemstyle}>
              {typeList[index] == 0 ?
                <img src={item} alt="" className="h-full w-full object-cover" /> :
                <video className="h-full w-full object-cover" controls>
                  <source src={item} type="video/mp4" />
                </video>
              }

            </div>
          ))}
        </div>
      ))}
    </div>

  )
}