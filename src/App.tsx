import { Link } from 'react-router-dom';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import NewNota from './NewNota';
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
    <BrowserRouter>
      <div className='App'>
        <h1>Notes list</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/new-nota'>Add +</Link>
            </li>
            <li>About</li>
          </ul>
        </nav>
      </div>
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
  );
}

export default App;
