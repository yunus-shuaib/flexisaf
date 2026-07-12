import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import store from "../store.js";
import {Provider, useSelector} from "react-redux";

function Home() {
  const theme = useSelector(state => state.theme);

  return (
    <div
      className="home"
      style={{
        color: theme === "light" ? "black" : "white",
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}


export default function Redux(){
  return(
    <Provider store={store}>
      <Home/>
    </Provider> 
    )
  }