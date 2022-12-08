import React, { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext'

import '../styles/competitions.css'

function Competitions() {
  const context = useContext(ThemeContext)
  return (
    <div id={context.theme}>
      <h1 className='heading'>
        Competitions
      </h1>
      <div id="options">
        <button className="pronites active" onClick={click}>Techy</button>
        <button onClick={click} className="workshops">Culti</button>
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

export default Competitions