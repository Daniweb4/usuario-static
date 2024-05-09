import React from 'react'

const Data = (props) => {
  return (
    <div className='card-box'>
      
      <img src={props.image} alt="" />
      
      <ul className='lista'>
        <li  >{props.name}</li>
        <li>{props.last}</li>
        <li>{props.email}</li>
        <li>{props.rol}</li>
      </ul>
    </div>
  )
}

export default Data;
