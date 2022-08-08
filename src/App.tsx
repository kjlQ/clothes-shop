import React from "react";
import './App.scss';
import Home from './pages/Home'
import Shop from './pages/Shop'
import {BrowserRouter, Route, Routes} from "react-router-dom";


export default function App() {

  return (
      <div className="App">
          <BrowserRouter >
              <Routes >
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}
