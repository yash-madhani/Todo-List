import logo from './logo.svg';
import './App.css';
import Header from "./MyComponenets/Header";
import { Todos } from "./MyComponenets/Todos";
import { Footer } from "./MyComponenets/Footer";
import { AddTodo } from "./MyComponenets/AddTodo";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am on delete of todo ", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, description) => {
    let sno;
    if(todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length] + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      description: "Go to the market to get tomatoes"
    },
    {
      sno: 2,
      title: "Go to mall",
      description: "Go to the market to get clothes"
    },
    {
      sno: 3,
      title: "Go to shop",
      description: "Go to the market to get grocery"
    }
  ]);
  return (
    <>
      <Header title="Todos-list" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
