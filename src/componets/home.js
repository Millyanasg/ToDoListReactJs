import React from 'react';
import Form from './form';
import ToDoList from './ToDoList';
import { Container, List, TextField } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, editedText) => {
    var todosArray = [...todos];

    for (var i in todosArray) {
      if (todosArray[i].id == id) {
        todosArray[i].text = editedText;
      }
    }

    setTodos(todosArray);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '6em' }}>
      <Form addTodo={addTodo} />
      <List>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: '0.5em' }}>
            <ToDoList todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}
