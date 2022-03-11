import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page/1">Post 1</Link>
        </li>
        <li>
          <Link to="/page/2">Post 2</Link>
        </li>
        <li>
          <Link to="/page/3">Post 3</Link>
        </li>
      </ul>
    </nav>
  );
}
