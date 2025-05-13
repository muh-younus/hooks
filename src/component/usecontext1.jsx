import react,{useState , createContext, useContext} from 'react';
import reactDom from 'react-dom';

const UserContext = createContext();

function School1(){

  const [branch,setBranch] = useState("Computer Science");

  return(

    <>
      <UserContext.Provider value = {branch}>
      <h1>School-1</h1>
      <h1> I am a main Brach {branch}</h1>
      <School2 branch = {branch}/>
        </UserContext.Provider>
    </>
  )
}

function School2({branch}){

 

  return(

    <>
      <h1>School-2</h1>
      <h1> I am a main Brach {branch}</h1>
      <School3 branch2 = {branch}/>
    </>
  )
}

function School3({branch2}){


  return(

    <>
      <h1>School-3</h1>
      <h1> I am a main Brach {branch2}</h1>
    </>
  )
}

export default School1;