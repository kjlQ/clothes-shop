import React, {useEffect} from "react";
import './App.scss';
import Home from './pages/Home'
import Shop from './pages/Shop'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Card from "./pages/Card";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

const App = () => {
  return (
      <div className="App">
          <BrowserRouter >
              <Header />
              <Routes >
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<Card />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}
export default App