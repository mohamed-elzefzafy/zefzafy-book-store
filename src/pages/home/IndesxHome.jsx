import BookSlider from "component/book-slider/BookSlider";
import Footer from "component/footer/Footer";
import Header from "component/header/Header";
import HeadingTitle from "component/heading-title/HeadingTitle";
import Services from "component/services/Services";
import Slider from "component/slider/Slider";
import {books} from "../../data/books"


const IndesxHome = () => {
  return (
    <>
    
      <Slider />
      <Services />
      <HeadingTitle title={"Most gifted"} />
      <BookSlider books={books} />
      <HeadingTitle title={"Best seller"} />
      <BookSlider books={books} />
      <HeadingTitle title={"Most wished for"} />
      <BookSlider books={books} />
   
    </>
  );
};

export default IndesxHome;
