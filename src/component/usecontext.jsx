import react, {useState} from 'react';
import reactDom from 'react-dom';

function Class1(){

  //Props drilling

  const [room,setRoom] = useState("Numl University");

  return(
    <>
    <p>I am a class-1 in {room}</p>
      <Class2 room = {room}/>
    </>
  )
}

function Class2({room}){

  return(

    <>
      <h1> H!! i am class-2 {room}</h1>

      <Class3 hi = {room}/>
    
    </>
  )
}

function Class3({hi}){

  return(

    <>

      <h1>Class-3</h1>

      <h2>I am a student in {hi}</h2>
      
    
    </>
  )
}

export default Class1;
