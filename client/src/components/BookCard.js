import React from "react";
import Button from "./Button";

function BookCard(props) {
  return (
    <div className="col-md-12">
      <div className="card" style={{ width: "100%" }}>
        <h1>{props.title}</h1>
        <div className="img-container">
          <img
            alt="bookimage"
            src={props.image}
            className="img-fluid"
            style={{ width: "10%" }}
          />
        </div>
        <div className="content">
          <p>{props.author}</p>
          <p>{props.description}</p>
          <Button
            onClick={() => props.onClick(props.id ? props.id : props.book)}
          >
            {props.message}
          </Button>
        </div>
        <a href={props.link}>Here's your book</a>
        <br></br>
      </div>
    </div>
  );
}

export default BookCard;
