import React from 'react';
import classes from "./Tabs.module.css";
function Tabs(props) {
  return (
    <div>
      <div className={props.state === 1 ? classes.activeTab : classes.inactiveTab}>
        tab 1
      </div>
      <div className={props.state === 2 ? classes.activeTab : classes.inactiveTab}>
        tab 2
      </div>
      <div className={props.state === 3 ? classes.activeTab : classes.inactiveTab}>
        tab 3
      </div>
      <div className={props.state === 4 ? classes.activeTab : classes.inactiveTab}>
        tab 4
      </div>
    </div>
  );
}

export default Tabs;