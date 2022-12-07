import React, { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext'

import '../styles/events.css'

function Events() {
  const context = useContext(ThemeContext)

  return (
    <div id={context.theme}>
      <h1 className='heading text-purple-700 text-sm'>
        Events
      </h1>
    </div>
  )
}

export default Events