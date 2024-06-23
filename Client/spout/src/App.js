import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import LandingPage from "./pages/landingpage";
import PageNotFound from "./pages/pagenotfound";
import Voting from "./pages/voting";
import Analytics from "./pages/analytics";

function App() {
  
  

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="voting" element={<Voting/>}/>
          <Route path="analytics" element={<Analytics/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
