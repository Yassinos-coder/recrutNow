import './Styles.css'
import React from "react";

const Button = (props) => {
  return (
    <button className="btn" type={props.btnType} onClick={props.handler}>
      {props.btnText}
    </button>
  );
};

export default Button;
