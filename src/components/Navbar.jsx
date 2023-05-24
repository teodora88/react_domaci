import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({numFavorite}){
    return (
    <div className="inner-width">  
        <nav className="navigation-menu">
          <h1 className='title'>TechWorld</h1>
          <Link to="/"> Početna</Link>
          <Link to="/products"> Proizvodi</Link>
          <Link to="/favorites" className='fav'> Omiljeno <div className='numFav'>{numFavorite}</div></Link>
        </nav>
      </div>

    )
}

export default Navbar