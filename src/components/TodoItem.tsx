import React from "react";
import classes from './TodoItem.module.css'

const TodoItem:React.FC<{item:{
    id: string,
    text:string
}}> = (props)=>{
    return (
        <li className={classes.item} key={props.item.id}>{props.item.text}</li>
    );
};

export default TodoItem