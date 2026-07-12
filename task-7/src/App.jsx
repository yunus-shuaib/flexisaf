import Context from "./context/Context.jsx";
import Redux from "./redux/components/Redux.jsx";
import {useState} from "react";
import './App.css'

function App() {
const[stateManeger, setStateManeger]=useState("ContextAPI");
  return (
    <>
    <div className="buttons">
      <div role="button" onClick={()=> setStateManeger("ContextAPI")} style={{color: stateManeger === "ContextAPI" ? "red" : "black"}}>ContextAPI</div>
  
      <div role="button" onClick={()=> setStateManeger("Redux")} style={{color: stateManeger === "Redux" ? "red" : "black"}}>Redux</div>
      </div>
    
    {stateManeger === "ContextAPI" ? <Context /> : <Redux />}
    </>
  )
}

export default App
