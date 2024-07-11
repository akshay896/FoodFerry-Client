import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import cartEmpty from ".././../assets/cartEmpty.png";
function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const isCartEmpty = Object.values(cartItems).every(
    (quantity) => quantity === 0
  );

  return (
    <div className="cart">
      {isCartEmpty ? (
        <div className="text-center"><img className="cartEmpty" src={cartEmpty} alt="" /></div>
      ) : (
        <>
          <table className="cart-items">
            <thead>
              <tr className="cart-items-title">
                <th>Item</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {food_list.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <tr key={item._id} className="cart-items-item">
                      <td>
                        <img src={url + "/images/" + item.image} alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>$ {item.price}</td>
                      <td>{cartItems[item._id]}</td>
                      <td>$ {item.price * cartItems[item._id]}</td>
                      <td
                        onClick={() => removeFromCart(item._id)}
                        className="cross"
                      >
                        X
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          <div className="cart-summary">
            <div className="cart-summary-row">
              <p className="cart-summary-label ms-1">Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>

            <div className="cart-summary-row">
              <p className="cart-summary-label ms-1">Delivery Fee:</p>
              <p>$ {getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />

            <div className="cart-summary-row total-amount">
              <b className="cart-summary-label ms-1">Total Amount:</b>
              <b>
                $ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
              </b>
            </div>
            <button
              className="btn btn-warning mt-2 text-light"
              onClick={() => navigate("/order")}
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
