import React from "react";

const TodoItem:React.FC<{item:{
    id: string,
    text:string
}}> = (props)=>{
    return (
        <li key={props.item.id}>{props.item.text}</li>
    );
};

export default TodoItem