import {useDispatch} from "react-redux";
import themeAction from "../themeAction.js";

export default function Footer(){
  const dispatch = useDispatch();
  return(
    <>
      <footer>
      <hr/>
        <div>
      <h2>Footer Section</h2>
      <button onClick={()=>dispatch(themeAction())}>Toggle theme</button>
        </div>
        </footer>
    </>
    )
}