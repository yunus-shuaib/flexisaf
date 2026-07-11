import {useContext} from "react"
import {ThemeContext} from "./Context.jsx"

export default function Main(){
  const {theme, setTheme} = useContext(ThemeContext);
  
  return(
    <>
      <main>
      <h2>Main Section</h2>
      <h3>Testing Context</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </main>
    </>
    )
}