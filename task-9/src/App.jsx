import { useState } from 'react'
import Users from "./components/Users.jsx"
import Profile from "./components/Profile.jsx"
import Search from "./components/Search.jsx"
import NotFound from "./components/NotFound.jsx"
import {Context} from "./components/Context.jsx"

import {Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <>
      <Context>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/search" element={<Search />} />
        <Route path="/users/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        </Context>
    </>
  )
}

export default App
