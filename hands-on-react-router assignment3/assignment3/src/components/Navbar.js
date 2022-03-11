import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from './Auth';

export default function Navbar() {
  const auth = useAuth()
  return (
    <nav>
      <Link to="/">Public</Link>
      <hr />
      <Link to="/protected">protected</Link>
      <hr />
      {!auth.user && <Link to="/login">login</Link>}
    </nav>
  );
}
