import React, {useEffect} from "react";
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

import { logout, useAuth } from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {IReducers} from "./types";

const App = () => {
    const dispatch = useDispatch()
    const {loading} = useSelector((state:IReducers) => state.loadingReducer)
    const currentUser = useAuth()
    async function handleLogout() {
        dispatch({type:"changeLoad",payload:true})
        try {
            await logout();
        } catch {
            alert("Error!");
        }
        dispatch({type:"changeLoad",payload:false})
    }
    useEffect(()=> {
        console.log(loading)
    },[loading])

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
                  <Route path="/registration" element={<Registration />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}
export default App