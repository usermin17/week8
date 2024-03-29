import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar'
import Event from './Component/Event/Event';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import CreateEvent from './Component/CreatEvent/CreateEvent';
import ShowEvent from './Component/ShowEvent/ShowEvent';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Event/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/createEvent' element={<CreateEvent/>}/>
      <Route path='/showEvent' element={<ShowEvent/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App