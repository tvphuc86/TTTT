import React from 'react'

function Logo({expand}) {
  return (
    <div className='logo'>
      <img alt='logo' src='asda' />
      {expand ? "" :"Thoi so"}
    </div>
  )
}

export default Logo
