import React from "react";
import Navbar from "./components/Navbar";
import  './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mission from "./pages/Mission";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Mission} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
