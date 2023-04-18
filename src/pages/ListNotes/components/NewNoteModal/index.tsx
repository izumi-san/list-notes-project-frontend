import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NewNoteModal = (props: { 
  open: boolean, 
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  title: string, 
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  note: string, 
  setNote: React.Dispatch<React.SetStateAction<string>>,
  addNewNote: () => void
}) => {
  const { 
    open, 
    setOpen,
    title,
    setTitle,
    note,
    setNote,
    addNewNote
   } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nova Nota
          </Typography>
          <TextField label={"Título"} value={title} onChange={(e)=>setTitle(e.target.value)} />
          <textarea
            rows={5}
            //cols={10}
            aria-label="maximum height"
            placeholder="Maximum 4 rows" 
            value={note}
            onChange={(e)=>setNote(e.target.value)}
          />
          <Button onClick={()=>addNewNote()} >Adicionar</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default NewNoteModal;