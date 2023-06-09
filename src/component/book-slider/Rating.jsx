

const Rating = ({item}) => {
   
    return (
        <div className="rating">
        
 {item.rating >= 1 ? <i className="bi bi-star-fill"></i> :  item.rating >= 0.5 ? <i className="bi bi-star-half"></i> : <i className="bi bi-star"></i>}
 {item.rating >= 2 ? <i className="bi bi-star-fill"></i> :  item.rating >= 1.5 ? <i className="bi bi-star-half"></i> : <i className="bi bi-star"></i>}
 {item.rating >= 3 ? <i className="bi bi-star-fill"></i> :  item.rating >= 2.5 ? <i className="bi bi-star-half"></i> : <i className="bi bi-star"></i>}
 {item.rating >= 4 ? <i className="bi bi-star-fill"></i> :  item.rating >= 3.5 ? <i className="bi bi-star-half"></i> : <i className="bi bi-star"></i>}
 {item.rating >= 5? <i className="bi bi-star-fill"></i> :  item.rating >= 4.5 ? <i className="bi bi-star-half"></i> : <i className="bi bi-star"></i>}


       <span>   {item.rating}</span> 
       <span>   {(item.reviews)} "reviews" </span>     
              
              

     

        </div>
    );
}

export default Rating;
