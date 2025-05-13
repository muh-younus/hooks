import react, {useState} from 'react';
import reactDom from 'react-dom';

function Restoperator(){

  const [mobile,setMobile] = useState({

    name: "Iphone",
    color: "yellow",
    version: "15 pro",
    shop: "iphone market"
  });

  const updateVersion = () =>{

    setMobile(prevState => {

      return {...prevState, version:  "17 pro"}
    })
  }

  function updateColor(){

    setMobile(prevColor => {

      return {...prevColor, color: "green"}
    })
  }

  return(

    <>

      <h2>My mobile name is : {mobile.name} and its version is: {mobile.version}</h2>
      <h1>My Mobile color is: {mobile.color}</h1>
      
      <button types = "button" onClick = {updateVersion}>Update version</button>

      <button types = "button" onClick = {updateColor}> UpdateColor</button>
    
      </>
  )
}

export default Restoperator;