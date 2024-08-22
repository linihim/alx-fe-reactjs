import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>
        Home
      </Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>
        About
      </Link>
      <Link to="/services" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>
        Services
      </Link>
      <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;