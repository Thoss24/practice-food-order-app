import classes from "./Header.module.css";
import React, { Fragment } from "react";

const Header = (props) => {

  const showCartHandler = () => {
    props.onShowCart()
  }
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes["title-container"]}>
          <h1>Food Order App</h1>
        </div>
        <div className={classes["button-container"]}>
          <button className={classes.button} onClick={showCartHandler}>Basket</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
