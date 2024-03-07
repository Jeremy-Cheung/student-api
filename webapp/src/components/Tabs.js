import React from 'react';
import classes from "./Tabs.module.css";
import Button from "./Button.js";
function Tabs(props) {

  const GET_BUTTON = {
    name: "GET",
    action: null,
  };

  const POST_BUTTON = {
    name: "POST",
    action: null,
  };

  const PUT_BUTTON = {
    name: "PUT",
    action: null,
  };

  const DELETE_BUTTON = {
    name: "DELETE",
    action: null,
  };

  

  return (
    <div>
      <div className={props.state === 1 ? classes.activeTab : classes.inactiveTab}>
        <Button param={GET_BUTTON}></Button>
      </div>
      <div className={props.state === 2 ? classes.activeTab : classes.inactiveTab}>
        <Button param={POST_BUTTON}></Button>
      </div>
      <div className={props.state === 3 ? classes.activeTab : classes.inactiveTab}>
        <Button param={PUT_BUTTON}></Button>
      </div>
      <div className={props.state === 4 ? classes.activeTab : classes.inactiveTab}>
        <Button param={DELETE_BUTTON}></Button>
      </div>
    </div>
  );
}

export default Tabs;