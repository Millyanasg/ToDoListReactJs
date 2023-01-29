import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, Paper } from '@mui/material';
import EditTodo from './EditTodo';
import { useState } from 'react';
import ThumbUpOffAltTwoToneIcon from '@mui/icons-material/ThumbUpOffAltTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import CreateIcon from '@mui/icons-material/Create';

export default function ToDoList({ todo, deleteTodo, editTodo }) {
  const [openEdit, setOpenEdit] = useState(false);

  const HandleClose = () => {
    setOpenEdit(!openEdit);
  };

  return (
    <>
      <EditTodo
        editTodo={editTodo}
        open={openEdit}
        HandleClose={HandleClose}
        todo={todo}
      />
      <Paper style={{ backgroundColor: '#ffdee9', padding: '0.5rem' }}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              color="error"
              onClick={() => deleteTodo(todo.id)}
            >
              <DeleteForeverIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <ThumbUpOffAltTwoToneIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={todo.text} />
            <IconButton
              edge="end"
              aria-label="edit"
              color="primary"
              onClick={() => setOpenEdit(true)}
            >
              <CreateIcon />
            </IconButton>
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
