import React from "react";
import classes from './TodoItem.module.css';

const TodoItem:React.FC<{item:{id: string,text:string}; onRemoveTodo: ()=> void}> = (props)=>{
    return (
        <li className={classes.item} key={props.item.id} onClick={props.onRemoveTodo}>{props.item.text}</li>
    );
};

export default TodoItem