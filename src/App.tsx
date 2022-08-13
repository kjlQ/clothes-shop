import React from "react";
import './App.scss';
import Home from './pages/Home'
import Shop from './pages/Shop'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Card from "./pages/Card";

export default function App() {
  return (
      <div className="App">
          <BrowserRouter >
              <Header />
              <Routes >
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<Card />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}
