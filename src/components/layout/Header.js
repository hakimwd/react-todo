import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={ style }>
        <h1 style={{ margin: 0, padding: '10px', textAlign: 'center' }}>
            My Todo App
        </h1>

        {/* navigation */}
        <Link to="/" style={ linkStyle } >Home</Link> | <Link to="/about" style={ linkStyle } >About</Link> | <Link to="/contact" style={ linkStyle } >Contact</Link>
    </div>
  )
}

const style = {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff'
};
