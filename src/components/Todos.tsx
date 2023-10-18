import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'


const Todos:React.FC<{items: Todo[]}> =(props)=>{
    return (
        <ul className={classes.todos}>
            {props.items.map((item)=>(
                <TodoItem item ={item}/>
            ))}
        </ul>
    );
};

export default Todos;