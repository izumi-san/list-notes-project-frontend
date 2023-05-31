import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import NewNoteModal from "./components/NewNoteModal";
import "./../pagesStyle.css";
import "./ListNotesStyle.css";
import ItemNote from "./components/ItemNote";


const ListNotes = () => {
  const [list, setList] = useState<{ title: string, note: string }[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");


  const setMockList = () => {
    return setList([
      { title: "Banana", note: "123456789" },
      { title: "hotdog", note: "123" },
      { title: "water", note: "bla bla bla" }
    ])
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const addNewNote = () => {
    setList([...list, { title: newTitle, note: newNote }]);
    setNewNote("");
    setNewTitle("");
  }

  useEffect(
    () => { setMockList() }
    , []);

  return (
    <div className="main-content">
      <h2>Notes</h2>
      <h4>Some mock notes to test interface</h4>
      <Button onClick={() => handleOpenModal()} />
      <section className="list-notes">
        {list.map(({title, note}) => (
          <ItemNote title={title} note={note}/>
        ))}
      </section>
      <NewNoteModal
        open={openModal}
        setOpen={setOpenModal}
        title={newTitle}
        setTitle={setNewTitle}
        note={newNote}
        setNote={setNewNote}
        addNewNote={addNewNote}
      />
    </div>
  );
}

export default ListNotes;