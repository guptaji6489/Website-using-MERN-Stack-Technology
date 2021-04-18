import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-black">
  <Link className="navbar-brand" href="/" style={{color:'white'}}>Tech Knowledge</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/" style={{color:'white'}}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about" style={{color:'white'}}>About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact" style={{color:'white'}}>Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login" style={{color:'white'}}>Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup" style={{color:'white'}}>Register</Link>
      </li>
     
      
    </ul>
    
  </div>
</nav>
        </>
    )
}

export default Navbar
