import React from 'react';
import classes from "./Tabs.module.css";
function Tabs(props) {
  return (
    <div>
      <div className={props.state === 1 ? classes.activeTab : classes.inactiveTab}>

      </div>
      <div className={props.state === 2 ? classes.activeTab : classes.inactiveTab}>

      </div>
      <div className={props.state === 3 ? classes.activeTab : classes.inactiveTab}>

      </div>
    </div>
  );
}

export default Tabs;