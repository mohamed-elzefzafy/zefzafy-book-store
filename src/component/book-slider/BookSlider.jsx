import { useContext, useState } from "react";
import "./bookslider.css";
import Rating from "./Rating";
import Modal from "component/modal/Modal";
import cartContext from "context/cartcontext";


const BookSlider = ({books}) => {
  const [slideIndex, setslideIndex] = useState(0);
  const [openModal, setopenModal] = useState(false);
  const [bookData, setbookData] = useState(null);



const handleModal = (book) => {
  setopenModal(true);
  setbookData(book);
}


  const clickHandler = (dir) => {
    if (dir === "left")
    {
      setslideIndex(slideIndex -1)
    }
    if (dir === "right")
    {
      setslideIndex(slideIndex + 1)
    }
  }

  const {addToCart , cartitems } = useContext(cartContext)


  
  const findCartItemQuantity = (item) => {
  const cartitem =  cartitems.find((element) => element.id === item.id)

  if(cartitem)
  {
    return cartitem.quantity +1
  } else {
    return 1
  }


  }
  return (
    <div className="book-slider-container">
   {slideIndex > 0 &&  <i onClick={() => clickHandler("left")} className="bi bi-chevron-left book-slider-arrow-left"></i>}


      <div className="book-slider-wrabber" style={{transform : `translatex(${slideIndex * -340}px)`}}>
          {books.map((item) => {
            return (
              <div key={item.id} className="book-slide-item">
              <img src={`books/${item.image}`} alt={item.title} className="book-slide-item-img" />
                <h2 className="book-slide-item-title"> {item.title}</h2>
                     <Rating item={item}/>
                <div className="book-slide-item-price">${item.price}</div>
                <div className="book-slide-icon-wrabber">
                <i onClick={() => handleModal(item)} className="bi bi-eye-fill"></i>
                <i onClick={() => addToCart({...item , quantity : findCartItemQuantity(item)})} className="bi bi-cart-plus"></i>
                </div>
             </div>
            )
          })}
      </div>



    {slideIndex <= books.length - 1  &&    <i onClick={() => clickHandler("right")} className="bi bi-chevron-right book-slider-arrow-right"></i>}

    {openModal &&  <Modal bookData={bookData} setopenModal={setopenModal}/> }
    </div>
  )
}

export default BookSlider; 