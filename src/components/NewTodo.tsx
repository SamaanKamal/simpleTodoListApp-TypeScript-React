import React, { useContext, useRef } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";


const NewTodo:React.FC =()=>{
    const todoInputRef = useRef<HTMLInputElement>(null);
    const todosContext = useContext(TodosContext);
    const submitHanlder =(event:React.FormEvent)=>{
        event.preventDefault();

        const enteredText = todoInputRef.current!.value;

        if(enteredText.trim().length === 0)
        {
            return;
        }

        todosContext.addTodo(enteredText);
    };
    return (
        <form onSubmit={submitHanlder} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id ="text" ref={todoInputRef}></input>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;