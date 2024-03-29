import { FC, useEffect, useState } from "react";
import NewNoteModal from "./components/NewNoteModal";
import "./../pagesStyle.css";
import "./ListNotesStyle.css";
import ItemNote from "./components/ItemNote";


const ListNotes:FC = () => {
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
      <h2>Your Notes</h2>
      <h4>Some mock notes to test interface</h4>
      <NewNoteModal
        open={openModal}
        setOpen={setOpenModal}
        title={newTitle}
        setTitle={setNewTitle}
        note={newNote}
        setNote={setNewNote}
        addNewNote={addNewNote}
      />
      <section className="list-notes">
        {list.map(({title, note}) => (
          <ItemNote title={title} note={note}/>
        ))}
      </section>
    </div>
  );
}

export default ListNotes;