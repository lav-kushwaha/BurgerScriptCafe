import React from 'react';
import {Link} from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <img
        src="https://blogzine.webestica.com/assets/images/icon/empty-cart.svg"
        alt="Empty Cart"
        className="empty-cart-image"
      />
      <p className="empty-cart-message">Your food cart is empty.</p>
        <p className="empty-cart-message">You can go to home page to view more restaurants</p>
       <Link to="/" className='food-cart-button'>Back To Food</Link>
    </div>
  );
};

export default EmptyCart;
