import { Link } from "react-router-dom";


const NavBar = ({toggle , settoggle}) => {
  return (
     <div className="navbar" style={{left :toggle ? "0" : "-300px"}}>
      <ul className="navbar-links">
      <Link to="/" className="navbar-link" onClick={() => settoggle(false)}>Home </Link>
      <Link to="/authors" className="navbar-link" onClick={() => settoggle(false)}> Authors</Link>
      <Link to="/about" className="navbar-link" onClick={() => settoggle(false)}>About Us</Link>
      <Link to="/contact" className="navbar-link" onClick={() => settoggle(false)}>Contact Us</Link>
      <Link to="/register" className="navbar-link" onClick={() => settoggle(false)}>Register</Link>
      </ul>
    </div>
  )
}

export default NavBar