import {useDispatch} from "react-redux";
import themeAction from "../themeAction.js";

export default function Header(){
  const dispatch = useDispatch();
  return(
    <>
      <header>
        <div>
      <h2>Header Section</h2>
      <button onClick={()=>dispatch(themeAction())}>Toggle theme</button>
        </div>
      <hr/>
        </header>
    </>
    )
  }