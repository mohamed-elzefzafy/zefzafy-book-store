
import { Link } from 'react-router-dom'

const HeaderTop = ({toggle ,settoggle}) => {
  return (
    <div className="header-top">
    <div className="header-top-menu" onClick={() => settoggle(prev => !prev)}>
      {toggle ?<i className="bi bi-x-lg"></i> :<i className="bi bi-list"></i> }
    

    
    </div>
    <div className="heafer-top-phone">
    <i className="bi bi-telephone-fill"></i>
      123-456-789
    </div>
    <div className="header-top-text">
      Welcome To Online Book Store
    </div>
    <Link to="/login" className="header-top-link">
      <i className="bi bi-person-fill"></i>
      Login
    </Link>
  </div>

  )
}

export default HeaderTop