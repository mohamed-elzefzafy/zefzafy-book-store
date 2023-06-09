import cartContext from "context/cartcontext";
import { useContext } from "react";
import { Link } from "react-router-dom";



const HeaderMiddle = () => {

  const {cartitemsLength} = useContext(cartContext);

  return (
    <div className="header-middle">
    <Link to="/" className="header-middle-logo">
      <b>Book</b>
      <i className="bi bi-book"></i>
      <b>Store</b>
    </Link>

    <div className="header-middle-search-box">
      <input className="header-middle-search-box-input" type="search" placeholder="Search in The Book Store..."/>
      <i className="bi bi-search"></i>
    </div>
    <Link to="/cart" className="header-middle-cart-wrabber">
    { cartitemsLength > 0 && <b className="cart-notify">{cartitemsLength}</b>}
      <i className="bi bi-cart2"></i>
    </Link>
  </div>
  )
}

export default HeaderMiddle;