import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className='nav__link'>
        <h1>.solveJS<span>(/)</span></h1>
      </Link>


    </nav>
  )
}

export default Nav


