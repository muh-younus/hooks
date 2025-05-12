import react,{useState} from 'react';
import ReactDom from 'react-dom';

function Color(){


 const [color,setColor]  = useState("blue");

  return(

    <>
      
    <h1>My favorite color is {color}</h1>

      <button type="button" onClick={() => setColor("yellow")}> yellow </button>
    </>
  )
  
}
export default Color
