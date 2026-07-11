import {useContext} from "react"
import {ThemeContext} from "./Context.jsx"

export default function Footer(){
  const {theme, setTheme} = useContext(ThemeContext);
  
  return(
    <>
      <footer>
      <hr/>
        <div>
      <h2>Footer Section</h2>
      <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Toggle theme</button>
        </div>
        </footer>
    </>
    )
}