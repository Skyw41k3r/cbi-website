import React, {useState}  from 'react'
import { link } from 'react-router-dom';


function navbar() {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);
    const closeMobilMenue = () => setclick(false);

  return (
 <>
<nav className='navBar'>
<div className='navbar-container'>
<Link to="/" className="navbar-logo">
    <i className='fab fa-typo3' />
   </Link>
   <div className='menu-icons' onClick={handleClick}>
<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
</div>
<ul className={click? 'nav-menu active' : 'nav-menu'}>
  <li className='nav-item'>
    <Link to="/Home" className="nav-links" onClick={closeMobilMenue}> 
    Home
    </Link>
    </li> 
    <li className='nav-item'>
    <Link to="/About" className="nav-links" onClick={closeMobilMenue}> 
    about
    </Link>
    </li>
    <li className='nav-item'>
    <Link to="/Sign-up" className="nav-links-mobile" onClick={closeMobilMenue}> 
    Sign-up
    </Link>
    </li>
</ul>
    </div>
    </nav>
    </>
  )
}

export default navbar
