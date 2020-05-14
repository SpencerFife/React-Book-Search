import React from "react";

function Button(props) {
  return (
    <button className="btn btn-warning" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
