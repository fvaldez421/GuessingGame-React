import React from "react";
import "./GifCard.css";

const GifCard = props => (
  <span onClick={() => props.CheckState(props.id)} className="remove">
    <div className="card">
      <div className="img-container" data-selected={props.selected}>
        <img alt={props.name} src={props.image} />
      </div>

    </div>
  </span>
);

export default GifCard;
