import React, {useState} from 'react';
import ReactDom from 'react-dom'

function Object(){

  const [bike,setBike] = useState({

    brand: "Yamaha",
    color: "white",
    model: "r44"
  })

  return(

    <>
      <h1> My Bike Color is {bike.color}</h1>
      <p>The bike model is {bike.model} and its brand is {bike.brand}</p>
    
    </>
  )
}

export default Object