import React, { useState } from "react";
import Todo from "../models/Todo";

type TodosContextObject = {
    items:Todo[],
    addTodo: (todoText:string)=>void,
    removeTodo: (todoId:string) =>void
};
interface Props {
    children: React.ReactNode;
  }

export const TodosContext = React.createContext<TodosContextObject>({
    items: [],
    addTodo: ()=>{},
    removeTodo: (todoId:string) =>{}
});

const TodosContextProvider:React.FC<Props> =(props)=>{
    const [todos,setTodos] =useState<Todo[]>([]);

  const addTodoHandler = (todoText:string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState)=>{
      return prevState.concat(newTodo);
    });
  };

  const onRemoveTodoHandler =(todoId:string) =>{
    setTodos((prevState)=>{
      return prevState.filter((todo)=>{
        return todo.id !== todoId;
      });
    });
  };

  const ContextValue:TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: onRemoveTodoHandler
  };
    return (<TodosContext.Provider value={ContextValue}>{props.children}</TodosContext.Provider>)
};

export default TodosContextProvider;