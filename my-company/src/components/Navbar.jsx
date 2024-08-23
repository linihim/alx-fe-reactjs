import { Link } from 'react-router-dom';

function Navbar() {
    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        marginRight: '20px',
        padding: '5px 10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s'
      };
    
      return (
        <nav style={{ backgroundColor: '#333', padding: '15px', textAlign: 'center', marginBottom: '20px' }}>
          <Link to="/" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
            Home
          </Link>
          <Link to="/about" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
            About
          </Link>
          <Link to="/services" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
            Services
          </Link>
          <Link to="/contact" style={linkStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#555'} onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
            Contact
          </Link>
        </nav>
      );
}

export default Navbar;