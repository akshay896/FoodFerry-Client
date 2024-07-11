import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  // console.log(`${url}/images/${image}`);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-img"
          src={url + "/images/" + image}
          alt={name}
          onError={(e) => {
            e.target.src = "path_to_placeholder_image";
          }}
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="rating">
          <div>
            <span className="text-warning fs-4">&#9733;</span>
            <span className="text-warning fs-4">&#9733;</span>
            <span className="text-warning fs-4">&#9733;</span>
            <span className="text-warning fs-4">&#9733;</span>
            <span className="fs-4">&#9733;</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <h6 className="mt-2 text-dark">{name}</h6>
            <p className="food-item-price">$ {price}</p>
          </div>
        </div>
        <p className="food-item-desc">{description}</p>
      </div>
    </div>
  );
};

export default FoodItem;
