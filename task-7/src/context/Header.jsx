import {useContext} from "react"
import {ThemeContext} from "./Context.jsx"

export default function Header(){
  const {theme, setTheme} = useContext(ThemeContext);
  
  return(
    <>
      <header>
        <div>
      <h2>Header Section</h2>
      <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Toggle theme</button>
        </div>
      <hr/>
        </header>
    </>
    )
  }