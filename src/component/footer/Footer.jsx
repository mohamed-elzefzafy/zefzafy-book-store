import { Link } from "react-router-dom";
import SocialMediaFooter from "./SocialMediaFooter";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
      
           <SocialMediaFooter/>
           
            <div className="footer-links-wrabber">
                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Useful Links</h3>

                    <ul className="footer-links">
                 <Link to="/" className="footer-link">Home</Link>
                 <Link to="/authors" className="footer-link">Authors</Link>
                 <Link to="" className="footer-link">Blog</Link>
                 <Link to="/about" className="footer-link">About Us</Link>
                 <Link to="/contact" className="footer-link">Contact Us</Link> 
                 <Link to="/register" className="footer-link">Register</Link> 
                   </ul>

                </div>


                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Contact Information</h3>
                       <div className="footer-address-wrabber">
                        <div className="footer-address-item">
                            <i className="bi bi-geo-alt-fill"></i>
                            Iraq - Baghdad - Alrashid st
                        </div>

                        <div className="footer-address-item">
                            <i className="bi bi-telephone-fill"></i>
                           123-456-789
                        </div>

                        <div className="footer-address-item">
                            <i className="bi bi-envelope-fill"></i>
                            info@fakeemail.com
                        </div>


                       </div>

                </div>


                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">About Us</h3>

                <p className="footer-decription">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsam 
                   maiores eligendi nam optio quia, ducimus quas, quasi impedit facilis 
                   sequi qui expedita corrupti nulla ratione ipsa cupiditate nobis id.
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem iure 
                    expedita fuga.
                   </p>

                </div>


            </div>
        </footer>
    );
}

export default Footer;
