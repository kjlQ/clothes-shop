import React from "react";
import './App.scss';
import Home from './pages/Home'
import Shop from './pages/Shop'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Card from "./pages/Card";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ToTheTop from "./components/ToTheTop";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";

import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const App = () => {
    const [user,loading] = useAuthState(auth)
    if(!user && !loading) {
        return(
            <Registration />
        )
    }
  return (
      <div className="App">
          <BrowserRouter >
              <Header />
              <ToTheTop />
              <Routes >
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<Card />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/profile" element={<Profile />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}
export default App