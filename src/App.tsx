import { Link } from 'react-router-dom';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import NewNota from './NewNota';


function App() {
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
        <Route path='/new-nota' element={<NewNota/>} />
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
