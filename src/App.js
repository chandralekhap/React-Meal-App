import Header from './Component/Layout/Header'
import {Fragment, useState} from 'react'
import Meal from './Component/Meal/Meal'
import Cart from './Component/Cart/Cart'
import CartProvider from './Store/CartProvider'

function App() {

  const [ cartIsShown, setCartIsShown]=useState(false)

  const showCartStatus=()=>{
    setCartIsShown(true)
  }

  const hideCartStatus=()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart  onHide={hideCartStatus}/>}
      <Header onShow={showCartStatus}/>
      <section>
        <Meal/>
      </section>
    </CartProvider>
  );
}

export default App;
