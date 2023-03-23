import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
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
    </>
  );
}

export default Header;
