import React from "react";

function Cards(props) {
  return (
    <div>
      <img src={props.link} alt="prabhas"></img>
      <h2>{props.actorName}</h2>
      <p>{props.passage}</p>
    </div>
  );
}
export default Cards;
