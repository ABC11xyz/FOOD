import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    url,
    currency,
    deliveryCharge
  } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <>
      {getTotalCartAmount() === 0 ? (
        <div className="empty">
          <img src="empty.png" alt="" />
          <h2>Your cart is Empty.</h2>
          <p>Looks like you have not added anything to your cart. Go ahead and explore top categories.</p>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index}>
                    <div className="cart-items-title cart-items-item">
                      <img src={`${url}/images/${item.image}`} alt="" />
                      <p>{item.name}</p>
                      <p>{currency}{item.price}</p>
                      <div>{cartItems[item._id]}</div>
                      <p>{currency}{item.price * cartItems[item._id]}</p>
                      <p className="cart-items-remove-icon" onClick={() => removeFromCart(item._id)}>x</p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>{currency}{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b>
                </div>
              </div>
              <button onClick={() => (getTotalCartAmount() === 0) ? toast.error("You Have Nothing To Purchase") : navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>Have A Promo Code? Enter Here..</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="promo code" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
