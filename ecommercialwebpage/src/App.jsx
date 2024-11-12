import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/hero';
import Modal from './components/modal';
import Cart from './components/cart';

const App = () => {
  const [cart , setCart] = useState([])

  const removeCart = (product) =>{
    const res = cart.filter((del)=>del.id != product.id)
    setCart(res);
  }
  const handleQtyUpdate = (product, op) => {
    const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
            const newQty = op === "+" ? item.qty + 1 : item.qty - 1;
            return { ...item, qty: newQty > 0 ? newQty : 1 }; 
        }
        return item;
    });
    setCart(updatedCart);
  }


  return (<BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero cart={cart} setCart={setCart}/>}/>
      {/* <Route path="" Component={Hero}/> */}
      <Route path="/cart" element={<Cart cart={cart} removeCart={removeCart} handleQtyUpdate={handleQtyUpdate}/>}/>
      <Route path="/single-view/:id" element={<Modal />}/>
      </Routes>
    </BrowserRouter>
  );
}
   
export default App;
