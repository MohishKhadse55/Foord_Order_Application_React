import classes from './Cart.module.css';
import React from 'react';

function Cart(props) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
      ;
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}

export default Cart;