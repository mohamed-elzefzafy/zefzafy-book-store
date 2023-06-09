import { Outlet } from "react-router-dom";
import "./homepage.css";
import Header from "component/header/Header";
import Footer from "component/footer/Footer";

const HomePage = () => {
    return (
   <>
     <Header />
   <Outlet/>
   <Footer />
   </>
    );
}

export default HomePage;
