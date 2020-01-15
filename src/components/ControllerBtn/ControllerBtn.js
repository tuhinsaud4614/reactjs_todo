import React from "react";
import classes from "./ControllerBtn.module.css";

const ControllerBtn = props => {
  return (
    <button
      className={`${classes.ControllerBtn} ${
        props.isActive ? classes.Active : ""
      } ${props.isDisabled ? classes.Disabled : ""}`}
      onClick={props.onClicked}
      name={props.name}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};

export default ControllerBtn;
