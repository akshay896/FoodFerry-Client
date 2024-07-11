import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { TextField } from "@mui/material";

function FoodDisplay({ category }) {
  const { food_list, searchByName } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle input change and trigger search
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term); // Update searchTerm state
    if (term === "") {
      // If search term is empty, reset or fetch all items
      searchByName(""); // Adjust this based on your API behavior
    } else {
      searchByName(term); // Trigger searchByName with current input value
    }
  };

  return (
    <div className="food-display" id="food-display">
      <div className="d-flex">
        <h2>Top dishes near you</h2>
        <TextField
          id="filled-basic"
          variant="filled"
          label="Search by food"
          className="ms-5 w-50"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange} // Call handleSearchChange on input change
        />
      </div>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
          return null; // Ensure to always have a return statement
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
