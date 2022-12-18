import { useState } from "react"
import "../../styles/slider.css";


export default function CompetitionsSlider({ imagesList, size }) {

  const [HoverValue, setHoverValue] = useState(false)
  const length = imagesList.length
  var style, itemstyle, insidestyle, repetition;
  const num = Math.ceil(size * 2 / imagesList.length)
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
      width: (length * num * 100 / size).toString() + '%',
      animation: HoverValue ? "bannermove " + (length * 5).toString() + "s linear infinite paused" : "bannermove " + (imagesList.length * 5).toString() + "s linear infinite",
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
    <div style={style} onMouseEnter={() => { setHoverValue(true) }} onMouseLeave={() => { setHoverValue(false) }}>

      {repetition.map(() => (
        <div style={insidestyle}>
          {imagesList.map((item) => (
            <div style={itemstyle}><img src={item} alt="" className="h-full w-full" /></div>
          ))}
        </div>
      ))}
    </div>

  )
}