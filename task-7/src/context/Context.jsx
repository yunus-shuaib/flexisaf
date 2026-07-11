import {useState, createContext} from "react";
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"


export const ThemeContext = createContext();

export default function Context(){
  const [theme, setTheme] = useState("light");
  
  return(
    
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="home" style={{
      color: theme === "light" ? "black" : "white",
      backgroundColor: theme === "light" ? "white" : "black",
    }}>
      <Header/>
      <Main />
      <Footer />  
        </div>
    </ThemeContext.Provider>
      
    )
  }