import React from 'react';
import { Link } from 'react-router-dom';

//content that will be displayed on the main page
const Substance = () => {
  return (
    <div
      className="text-center"
      style={{
        backgroundImage: 'url(/fruitsalad.jpg)',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex', // Use flexbox for centering
        flexDirection: 'column', // Stack elements vertically
        justifyContent: 'center', // Vertically center
        alignItems: 'center', // Horizontally center
        textAlign: 'center', // Ensure the text is centered inside
      }}
    >
      <h1 style={{ color: 'white' }}>Welcome to WhiskAway where tasty recipes are only a whisk away!</h1>
      <h3 style={{ color: 'white' }}>Click the button below to get started!</h3>
      <Link to="/display">
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '36px',
            backgroundColor: 'blue', // Green button
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textDecoration: 'none', // Removes underline
          }}
        >
          Click Me!
        </button>
      </Link>
    </div>
  );
}

export default Substance;