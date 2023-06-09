import Rating from "component/book-slider/Rating";
import "./modal.css";
import { Link } from "react-router-dom";
import ModalAddToCart from "./ModalAddToCart";

const Modal = ({ bookData, setopenModal }) => {
  return (
    <div onClick={() => setopenModal(false)} className="modal-container">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <i
          onClick={() => setopenModal(false)}
          className="bi bi-x-circle-fill modal-icon"
        ></i>
        <div className="modal-content-img">
          <img src={`/books/${bookData.image}`} alt={bookData.title} />
        </div>

        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{bookData.title}</h5>
          <div className="modal-content-info-stock">
            <b>status : </b> {bookData.inStock ? "In Stock" : "Not in Stock"}
          </div>
          <Rating item={bookData} />

          <div className="modal-content-info-author">
            <b>Author : </b> {bookData.author}
          </div>

          <div className="modal-content-info-price">
            <b>Price : </b> ${bookData.price}
          </div>

             <ModalAddToCart book={bookData}/>

          <Link to={`/book/${bookData.id}`} className="modal-content-info-link">See More Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
