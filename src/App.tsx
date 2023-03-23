import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewNota from './components/NewNota';
import Header from './components/Header';
import { useState } from 'react';
import { v1 as uuid } from 'uuid';

interface nota {
  id: string;
  title: string;
  text: string;
}

function App() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const [noteList, setNoteList] = useState<nota[]>([]);

  const createNewNote = () => {
    const newNote = {
      id: uuid(),
      title,
      text,
    };
    setNoteList([...noteList, newNote]);
    setText('');
    setTitle('');
  };

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route
            path='/new-nota'
            element={
              <NewNota
                text={text}
                setText={setText}
                title={title}
                setTitle={setTitle}
                createNewNote={createNewNote}
              />
            }
          />
          <Route path='/' element={<HomePage noteList={noteList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
