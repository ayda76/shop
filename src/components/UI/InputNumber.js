import React from 'react';
import classes from './inputNumber.module.css';

function InputNumber(props){
    const getInputHandler = (event)=>{
const input=event.target.value;
props.onChange(input);
    }
return(
    <input type="number" min='1' step="1" defaultValue="1" className={classes.input} onChange={getInputHandler}/>
);
}
export default InputNumber;