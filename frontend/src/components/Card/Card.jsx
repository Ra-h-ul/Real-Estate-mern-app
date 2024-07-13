import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt={item.id} />
      </Link>

      <div className="textContainer">
        <div className="left">
          <p>{item.title}</p>
          <p id="address">{item.address}</p>
          <p id="price">{item.price}</p>
        </div>

        <div className="right">
          <button>
            <img src="./chat.png" alt="" />
          </button>
          <button>
            <img src="./save.png" alt="" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default Card;
