import React from "react";
import classes from "./Loader.module.scss";

const Loader: React.FC=()=> {
  return (
    <div className={classes.wrap}>
      <div className={classes.loader}>
        <div className={classes.box1}></div>
        <div className={classes.box2}></div>
        <div className={classes.box3}></div>
      </div>
    </div>
  );
}

export default Loader;