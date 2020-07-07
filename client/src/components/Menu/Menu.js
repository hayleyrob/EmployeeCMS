import React, { useState } from 'react'
import '../lib/Style.css'


const Menu = (props) => {


  const list = [
    { name: 'Main', class: 'menu', handle: 'Department' },
    { name: 'Back', class: 'menu', handle: 'Start' }
  ]

  return (
    <div className='list'>
      {list.map(item =>
        <a key={item.name} className={item.class}
          onClick={() => {
            props.handleMenu(item.handle)
          }}
        >{item.name}</a>
      )}
    </div>
  )
}

export default Menu