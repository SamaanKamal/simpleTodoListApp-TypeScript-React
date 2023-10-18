import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/Todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos,setTodos] =useState<Todo[]>([]);

  const AddTodoHandler = (todoText:string) => {
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
  return (
    <div>
     <NewTodo onAddTodo={AddTodoHandler}/>
     <Todos items ={todos} onRemoveTodo={onRemoveTodoHandler}/>
    </div>
  );
}

export default App;
