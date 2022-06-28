import React from 'react'
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai'
import {Cart} from './'
import {useStateContext} from '../context/StateContext'

const navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className="navbar-container">
      <p>
        <Link href = "/">TechStore</Link>
      </p>
      <button type = "button"
      className="cart-icon" onClick="cart-icon" onClickCapture={()=> setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default navbar