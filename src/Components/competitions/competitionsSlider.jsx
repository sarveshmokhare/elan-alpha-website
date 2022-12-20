import { useState } from "react"
import "../../styles/slider.css";
import React from "react";


 function CompetitionsSlider({ imagesList, size }) {

  const [focusNum,setfocusNum]=useState(0)
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  React.useEffect(() => {
    document.getElementById('hello').addEventListener('scroll', () => {
      var element = document.getElementById("img" + focusNum.toString())
      var rect = element.getBoundingClientRect();


      if (rect.left > width) {
        setfocusNum(focusNum - 1)
        console.log(focusNum)
      }
      if (rect.right < width) {
        setfocusNum(focusNum + 1)
        console.log(focusNum)
      }

    })
  })

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
      // animation: HoverValue ? "bannermove " + (length * 5).toString() + "s linear infinite paused" : "bannermove " + (imagesList.length * 5).toString() + "s linear infinite",
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
      // animation: HoverValue ? "bannermove " + (length * 5).toString() + "s linear infinite paused" : "bannermove " + (length * 5).toString() + "s linear infinite",
      display: 'flex'
    }
  }

  return (
    <div style={style}  onMouseEnter={() => { setHoverValue(true) }} onMouseLeave={() => { setHoverValue(false) }}>

      {/* {repetition.map(() => (
        <div style={insidestyle}> */}
          {imagesList.map((item,index) => (
            <div style={itemstyle} id={'img'+index.toString()}><img src={item} alt="" className="h-full w-full" /></div>
          ))}
        {/* </div>
      ))} */}
    </div>

  )
}

export default CompetitionsSlider
export var focusNum