import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import NewNoteModal from "./components/NewNoteModal";

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
    setList([...list, {title: newTitle, note: newNote}]);
    setNewNote("");
    setNewTitle("");
  }

  useEffect(
    () => { setMockList() }
    , []);

  return (
    <>
      <h2>Im the new landing page</h2>
      <h5>There's no css in here :(</h5>
      <Button onClick={() => handleOpenModal()} />
      {list.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.note}</p>
        </div>
      ))}
      <NewNoteModal
        open={openModal}
        setOpen={setOpenModal}
        title={newTitle}
        setTitle={setNewTitle}
        note={newNote}
        setNote={setNewNote}
        addNewNote={addNewNote}
      />
    </>
  );
}

export default ListNotes;