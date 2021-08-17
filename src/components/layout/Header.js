// REACT
import React from "react";
// CSS
import classes from "./Header.module.css";
// ASSETS
import mealsImage from "../../assets/meals.jpg";
// COMPONENTS
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Speed<span>Food</span>
        </h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="By Dan Gold on Unsplash" />
      </div>
    </>
  );
};

export default Header;
