import React from "react";
import "./Home.css";
import HomeImg from "../../assets/HomeImg.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-conatiner">
      <div className="home-items">
        <h1 className="mt-3">
          Taste the best,
          <br />
          <span className="text-warning">Anytime</span>, <br /> Anywhere
        </h1>
        <p className="mt-4">
           Order from the best
          restaurants in town and savor the flavors you love, delivered quickly
          to your home or office."
        </p>
        <Link to={"/menu"} className="btn btn-warning mt-3">
          Order now
        </Link>
      </div>
      <div className="home-items">
        <img  src={HomeImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
