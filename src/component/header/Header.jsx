import { useState } from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import NavBar from "./NavBar";
import "./header.css";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <header className="header">
<HeaderTop toggle={toggle}  settoggle={settoggle} />

<HeaderMiddle/>

<NavBar toggle={toggle}  settoggle={settoggle}/>
    </header>
  )
}

export default Header;