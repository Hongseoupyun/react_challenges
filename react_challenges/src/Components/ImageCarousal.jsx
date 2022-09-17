import React from 'react'
import imgData from "../imgData.json"

export default function ImageCarousal() {




  return (
    <div>{imgData.map((element)=>{
      return(
        <img src={element.image} key={element.id} alt="baby image"/>
      )
    })}</div>
  )
}

