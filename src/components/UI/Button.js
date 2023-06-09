import React from "react";

const Button = (props) => {
  console.log("Button re-evaluating");

  return <button onClick={props.onClick}>{props.children}</button>;
};

export default React.memo(Button);
