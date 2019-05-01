import React from 'react'

const Purse = (props) => {
  return (
    <div className="purse" >
       <img className="coin" alt="coin" src="https://i.pinimg.com/originals/32/f8/ee/32f8ee1f68495231452451a2edfe9b7b.gif"/>
       <strong>x {props.gold}</strong>
    </div>
  )
}

export default Purse