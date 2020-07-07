import React, { useState, useEffect, useMemo } from 'react'
import './Main.css'
import Start from '../Start'
import Menu from '../Menu'
import Department from '../Department'
import axios from 'axios'


const audio = { sound: background, label: 'background' }
const src = audio.sound
const sound = new Howl({ src })


const Main = () => {

  // Adjust background image on window resize
  const [windowHeight, setwindowHeight] = useState(window.innerHeight)

  const handleResize = () => {
    setwindowHeight(window.innerHeight)
  }

  // useEffect for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }
    , [window.innerHeight])

  // Menu
  const handleMenu = val => {
    setCurrent(list[val])
  }

  const list = {
    Start: <Start handleMenu={handleMenu} />,
    Menu: <Menu handleMenu={handleMenu} />,
    Department: <Department handleMenu={handleMenu} />
  }

  const [current, setCurrent] = useState(list['Start'])



  return (
      <div className="hero-image"
        style={{ height: windowHeight }}>
      </div>
      {current}
    </div>
  )
}



export default Main