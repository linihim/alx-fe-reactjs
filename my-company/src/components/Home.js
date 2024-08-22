import React from 'react';
function Home() {
  const homeStyle = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f0f0f0'
  }
    return (
      <div style={{homeStyle}}>
        <h1>Welcome to Our Company</h1>
        <p>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }

  export default Home;