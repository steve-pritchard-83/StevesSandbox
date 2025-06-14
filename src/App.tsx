import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
      </nav>
      
      <main>
        {/* The Outlet is where the current page's content will be rendered */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
