import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const handleMenuClick = (item) => {
    setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name));
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>What's on your mind?</h1>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() => handleMenuClick(item)}
          >
            <div>
              <img src={item.menu_image} alt={item.menu_name} />
            </div>
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
