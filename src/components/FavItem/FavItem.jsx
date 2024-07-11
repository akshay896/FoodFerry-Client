import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./FavItem.css";
import { useSnackbar } from "notistack"; // Import useSnackbar

const FavItem = () => {
  const { favorites, removeFromFavorites, addToCart, token ,url } =
    useContext(StoreContext);
  const { enqueueSnackbar } = useSnackbar(); // Initialize useSnackbar

  const handleRemoveFromFavorites = (id) => {
    removeFromFavorites(id);
  };

  const handleAddToCart = (item) => {
    if (token) {
      addToCart(item);
      enqueueSnackbar(`${item.name} added to cart!`, { variant: "info" });
    } else {
      enqueueSnackbar("Please login to add items to your cart.", {
        variant: "warning",
      });
    }
  };

  return (
    <div className="fav-container">
      {favorites.length === 0 ? (
        <h4 className="text-danger text-center mt-5">
          No favorites added yet.
        </h4>
      ) : (
        favorites.map((item) => (
          <div key={item.id} className="fav-item">
            <div className="food-img-container">
              <img src={url+"/images/"+item.image} alt="food-img" />
            </div>
            <div className="food-info">
              <div>
                <span className="text-warning fs-4">&#9733;</span>
                <span className="text-warning fs-4">&#9733;</span>
                <span className="text-warning fs-4">&#9733;</span>
                <span className="text-warning fs-4">&#9733;</span>
                <span className="fs-4 text-secondary">&#9733;</span>
              </div>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
            <div className="buttons">
              <button
                className="btn btn-warning"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-danger ms-3"
                onClick={() => handleRemoveFromFavorites(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FavItem;
