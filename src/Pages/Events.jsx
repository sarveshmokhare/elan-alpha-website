import React, { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext'

import '../styles/events.css'

function Events() {
  const context = useContext(ThemeContext)



  return (
    <div id={context.theme}>
      <h1 className='heading'>
        Events
      </h1>
      <div id="options">
        <button className="pronites active" onClick={click}>Pronites</button>
        <button onClick={click} className="workshops">Workshops</button>
        <button onClick={click} className="informals" >Informals</button>
      </div>
      <div id="content">
        <div id="pronites" className="sub_content pronites active">
          <div className='sub_heading' >
            PRONITES
          </div>
        </div>
        <div className="sub_content workshops">
          <div className='sub_heading'>
            WORKSHOPS
          </div>
        </div>
        <div className="sub_content informals">
          <div className='sub-heading' >
            INFORMALS
          </div>
        </div>
      </div>
    </div>
  )
}

function click(event){

  var classname=event.target.className

  console.log(classname)

  document.getElementById("options").getElementsByClassName("active")[0].classList.remove("active")

  event.target.classList.add("active")

  document.getElementById("content").getElementsByClassName("active")[0].classList.remove("active")

  document.getElementById("content").getElementsByClassName(classname)[0].classList.add("active")
  
}


export default Events