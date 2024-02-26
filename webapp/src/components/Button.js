import classes from "./Button.module.css";

function Button(props) {
  const name = props.param.name;
  const action = props.param.action;

    return (
    <button className={classes.button} onClick={action}>
        <div className={classes.content}>{name}</div>
    </button>
    );  
}



export default Button;