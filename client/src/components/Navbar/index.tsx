import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
       <header className='container'>
        <Link to={'/'}>
          <h1>Brainstorming area</h1>
          </Link>
       </header>
    </div>
  )
}

export default Navbar
