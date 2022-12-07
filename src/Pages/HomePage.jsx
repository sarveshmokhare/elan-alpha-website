import React, { useContext } from 'react'

import ThemeContext from '../Contexts/ThemeContext'
import '../styles/homepage.css'

function HomePage() {
  const context = useContext(ThemeContext)

  return (
    <div id={context.theme}>
      <div className='homepage'>
        HomePage

      </div>
    </div>
  )
}

export default HomePage