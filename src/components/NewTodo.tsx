import React, { useRef } from "react";

const NewTodo:React.FC<{onAddTodo: (text:string) => void}> =(props)=>{
    const todoInputRef = useRef<HTMLInputElement>(null);
    const submitHanlder =(event:React.FormEvent)=>{
        event.preventDefault();

        const enteredText = todoInputRef.current!.value;

        if(enteredText.trim().length === 0)
        {
            return;
        }

        props.onAddTodo(enteredText);
    };
    return (
        <form onSubmit={submitHanlder}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id ="text" ref={todoInputRef}></input>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;