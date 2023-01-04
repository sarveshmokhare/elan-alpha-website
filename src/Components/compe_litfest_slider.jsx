import { useState } from "react";
import React from "react"


export default function Comp_lit_slider({imagesList,setvalue}){

  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  const last = imagesList.length - 1

  React.useEffect(() => {
    document.getElementById('scrolldiv').addEventListener('scroll', () => {

      var i
      for (i = 0; i <= last; i++) {
        var id_no = document.getElementById("img" + i.toString())
        var rect = id_no.getBoundingClientRect();
        if ((rect.right > width / 2) && (rect.left < width / 2)) {
          console.log(i)
          setvalue(i)
          break
        }
      }

    })
  })

  const itemstyle = {
    position: 'relative',
    margin: '5px',
    width: (100 / imagesList.length).toString() + '%',
    height: (100 * 3 / 10).toString() + 'vw',
  }
  return(
    <div className='lg:hidden overflow-x-scroll  w-[100%]' id='scrolldiv'>
      <div className='w-[700%] flex relative px-[17vw]' id='hii'>
        {imagesList.map((item, index) => (
          <div style={itemstyle} id={'img' + index.toString()}><img src={item} alt="" className="h-full w-full" /></div>
        ))}
      </div>
    </div>
  )
}