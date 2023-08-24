import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

    // <Switch>
    //   {/* <rout path="/" exact component={home} /> */}
    //   </Switch>
    // </Router>
    //  </>
  );
}

export default App;
