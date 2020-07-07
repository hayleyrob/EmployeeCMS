import React, { useState } from 'react'
import '../lib/Style.css'

const Start = (props) => {

  
  return (
    <div>
      <a className="start"
        onClick={() => {
          props.handleMenu("Menu")
        }}
      >Start</a>
    </div>
  )
}

export default Start