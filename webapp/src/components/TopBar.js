import classes from "./TopBar.module.css";

export default function TopBar(props) {
    return (
        <nav className={classes.nav}>
            <div>STUDENT-API DEMO</div>
            <button className={classes.tab} onClick={() => { props.tab(1)}}>GET</button>
            <button className={classes.tab} onClick={() => { props.tab(2)}}>POST</button>
            <button className={classes.tab} onClick={() => { props.tab(3)}}>PUT</button>
            <button className={classes.tab} onClick={() => { props.tab(4)}}>DELETE</button>
        </nav>
    )
}