import "./slider.css";
import firstBook from "../../images/book1.png";
import secondBook from "../../images/book2.png";
import thirdBook from "../../images/book3.png";
import { useState } from "react";

const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);

  const clickHandler = (dir) => {
   if (dir === "left")
   {
  setslideIndex(slideIndex - 1)
   }

   if (dir === "right")
   {
  setslideIndex(slideIndex + 1)
   }
  }
  return (
    <div className="slider-container">
      {slideIndex !== 0  && <i className="bi bi-chevron-double-left arrow-left" onClick={()=> clickHandler("left")}></i>}
      <div className="slide-wrabber" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
        <div className="slide first-slide">
          <div className="slide-img-wrabber">
            <img src={firstBook} alt="" />
          </div>
          <div className="slide-info-wrabber">
            <h1 className="slide-info-title">Book Store </h1>
            <p className="slide-info-desc">
              it's not just reading it's living the adventure.
            </p>
          </div>
        </div>


        <div className="slide second-slide">
          <div className="slide-img-wrabber">
            <img src={secondBook} alt="" />
          </div>
          <div className="slide-info-wrabber">
            <h1 className="slide-info-title">Book Store </h1>
            <p className="slide-info-desc">
              it's not just reading it's living the adventure.
            </p>
          </div>
        </div>



        <div className="slide third-slide">
          <div className="slide-img-wrabber">
            <img src={thirdBook} alt="" />
          </div>
          <div className="slide-info-wrabber">
            <h1 className="slide-info-title">check out the new titles</h1>
            <p className="slide-info-desc">
              we send you the books you want at home;
            </p>
          </div>
        </div>
      </div>
      {slideIndex !== 2 &&  <i className="bi bi-chevron-double-right arrow-right" onClick={()=>  clickHandler("right")}></i>}
    </div>
  )
}

export default Slider;