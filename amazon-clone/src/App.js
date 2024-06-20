import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./CartPage";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<> <Header /> <CartPage /> </>} />
          <Route path="/" element={<> <Header /> <Home /> </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
