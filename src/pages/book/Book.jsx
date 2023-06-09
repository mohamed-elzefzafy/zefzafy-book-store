import "./book.css"
import { useParams } from "react-router-dom";
import {books}  from "../../data/books";
import Rating from "../../component/book-slider/Rating";
import ModalAddToCart from "component/modal/ModalAddToCart";

const Book = () => {
    const {id} = useParams();
    


     const book =  books.find(b => b.id === parseInt(id))
    return (
   <div className="book">
    <div className="book-content">
        <img src={`/books/${book.image}`} alt={book.title} className="book-content-img" />
        <div className="book-content-info">
            <h1 className="book-title">{book.title}</h1>
            <div className="book-author">
                by <span>{book.author}</span> (Author)
            </div>
            <Rating item={book} />
            <ModalAddToCart book={book}/>
        </div>
      
    </div>

    <p className="book-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tenetur
             distinctio corrupti iusto quibusdam porro iste, hic fuga pariatur nostrum, 
        explicabo natus maxime sint possimus! Commodi vitae itaque molestiae consequatur.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt vel
               voluptatibus mollitia ea corporis quod, quia voluptatem assumenda nihil dolor
                deleniti dolore voluptates sed. Mollitia illum fugit quas adipisci.
          </p>

          <div className="book-icons">
            <div className="book-icon">
                <small>Print Length</small>
                <i className="bi bi-file-earmark-break"></i>
                <b>{book.printLength} pages</b>
                </div>

                <div className="book-icon">
                <small>Language</small>
                <i className="bi bi-globe"></i>
                <b> {book.language}</b>
                </div>

                <div className="book-icon">
                <small>Publication Date</small>
                <i className="bi bi-calendar3"></i>
                <b>{book.PublicationDate}</b>
                </div>


          </div>
   </div>
    );
}

export default Book;
