import React from 'react';
import classes from './Button.css';


const button = (props) => {
    const btnClasses = [classes.Button, classes[props.btnType]];
    const btnClassesStr = btnClasses.join('');
    console.log('btnClasses', btnClassesStr);
    return (
        <button className={`${classes.Button} ${classes[props.btnType]}`} onClick={props.clicked}>{props.children}</button>
    );
};

export default button;