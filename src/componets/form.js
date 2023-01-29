import React from 'react';
import { useState } from 'react';
import { Paper, TextField } from '@mui/material';
import { Button } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';

export default function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const create = () => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
    document.getElementById('outlined-basic').value = null;
  };
  return (
    <Paper style={{ padding: '0.8em', backgroundColor: '#ffdee9' }}>
      <div className="title">Lista de Aniversário da Mia</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="outlined-basic"
          label="Amigos do LinkedIn"
          color="primary"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />

        <Button
          style={{
            borderRadius: '100%',
            height: '60px',
            marginLeft: '5em',
            boxShadow: '5px, 2px, 5px, 2px black',
          }}
          variant="contained"
          color="primary"
          aria-label="add"
          onClick={() => create(text)}
        >
          <PostAddIcon />
        </Button>
      </div>
    </Paper>
  );
}
