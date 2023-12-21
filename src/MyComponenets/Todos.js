import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  return (
    
    <div className="container">
        <h3 className="text-center" >Todo-List</h3>
        {props.todos.length===0? "No Todos to display" :
          props.todos.map((todos) => {
            return (
              <>
              <hr />
              <TodoItem todo = {todos} onDelete={props.onDelete} />
              </>
            )
          })
        }
        
    </div>
  )
}
