import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import "./NewNoteModalStyle.css";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: '#4B374B',
  border: '2px solid #000',
  boxShadow: "24px #fefefe",
  p: 4,
  color: "#fefefe",
  borderRadius: "20px",
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
      <Button className='note-modal__btn' variant="contained" onClick={handleOpen}>New note</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-note">
          <Typography id="modal-modal-title" className='note-modal__title' variant="h5" component="h2">
            NEW NOTE
          </Typography>
          <TextField 
            placeholder='Title'
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}
            className={"note-modal__textfield"} 
            />
          <textarea
            className='note-modal__textarea'
            rows={5}
            //cols={10}
            aria-label="maximum height"
            placeholder="Write your note,please!" 
            value={note}
            onChange={(e)=>setNote(e.target.value)}
          />
          <Button className='note-modal__btn-submit' variant='contained' onClick={()=>addNewNote()} >ADD NOTE </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default NewNoteModal;