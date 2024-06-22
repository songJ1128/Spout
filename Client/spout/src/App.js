import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import LandingPage from "./pages/landingpage";
import PageNotFound from "./pages/pagenotfound";

function App() {
  
  

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
