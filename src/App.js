import './App.css';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndesxHome from 'pages/home/IndesxHome';
import HomePage from 'pages/home/HomePage';
import Authors from 'pages/authors/Authors';
import AboutUs from 'pages/about-us/AboutUs';
import ContactUs from 'pages/contact-us/ContactUs';
import Register from 'pages/forms/Register';
import Login from 'pages/forms/Login';
import Cart from 'pages/cart/Cart';
import Book from 'pages/book/Book';

function App() {

 const router = createBrowserRouter([{
  path : "/",
  element : <HomePage/>,
  children : [
  {index : true , element : <IndesxHome/>},
  {path : "/about" , element :<AboutUs/>},
  {path : "/authors" , element :<Authors/>},
  {path : "/cart" , element : <Cart/>},
  {path : "/login" , element : <Login/>},
  {path : "/register" , element : <Register/>},
  {path : "/contact" , element :<ContactUs/>},
  {path : "/book/:id" , element  : <Book/>},
  ]
 }])
  return (
    <div>
   <RouterProvider router={router}/>
    </div>
  );
}

export default App;
