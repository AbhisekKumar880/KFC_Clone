import React from "react";
import product1 from "../../assets/img/product1.jpg";
import product2 from "../../assets/img/product2.jpg";
import product3 from "../../assets/img/product3.jpg";
import "./card.css";
const Card = () => {
  return (
    <div className="card-wrapper">
      <div class="card">
        <img src={product1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="btn-wrapper d-flex">
          <button type="button" class="btn btn-outline-danger btn-wrapper">INR 295/-</button>
          <button type="button" class="btn btn-danger btn-wrapper">Add to Buckets</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
