import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TextField } from '@mui/material';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodo({ open, HandleClose, todo, editTodo }) {
  const [editedText, setEditedTex] = useState(todo.text);
  const textHandler = () => {
    editTodo(todo.id, editedText);
    HandleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        todo={todo}
        TransitionComponent={Transition}
        keepMounted
        onClose={HandleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          style={{
            fontFamily: 'sans-serif',
            textShadow: '1.5px 1.8px pink',
          }}
        >
          {'Edite a Tarefa'}{' '}
        </DialogTitle>
        <DialogContent>
          <TextField
            defaultValue={editedText}
            onChange={(e) => setEditedTex(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={HandleClose}>Cancelar</Button>
          <Button onClick={textHandler}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
