import React,{useEffect, useState} from 'react'
import {Link}  from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from './Button';
import './Navbar.css';



function Navbar() {


  const[click , setClick] =useState(true);
  const [button,setButton] = useState(true)

  const handle=() => setClick(!click);
  const closeMenu=()=> setClick(false);
  const showButton=()=>{
    if(window.innerWidth<=960)
    {
      setButton(false);

    }else{
      setButton(true);
    }
  }

  useEffect(()=>{
    showButton();
  },[])

  window.addEventListener('resize',showButton)
  return (
    <div>
        <nav className='navbar'>
            <div className="navbar-container">
          
        <Link to="/" className="navbar-logo " onClick={closeMenu}>
            BRICKS <i className="fa-solid fa-trowel-bricks"></i>
        </Link>
                <div className="menu-icon" onClick={handle}>
                <i className={click ? "fa fa-times" : "fa fa-bars"} />
                  

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu '}>
                  <li className='nav-item'>
<Link to='/' className='nav-links' onClick={closeMenu}> Home </Link>
</li>
<li className='nav-item'>
<Link to='/services' className='nav-links' onClick={closeMenu}> Services</Link>
</li>
<li className='nav-item'>
<Link to='/products' className='nav-links' onClick={closeMenu}> Products</Link>
</li>
<li className='nav-item'>
<Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}> Signup </Link>
</li>

                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign up</Button>} 
            </div>
        </nav>
    </div>
  )
}

export default Navbar