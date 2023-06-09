const CartItem = ({ item , addToCart , removeFromCart}) => {
  return (
    (     <div key={item.id} className="cart-item">
    <img src={`books/${item.image}`} alt={item.title} className="cart-item-img" />
    <div className="cart-item-info">
      <div>
          <div className="cart-item-book-title">
             <b>Title : </b>  {item.title}
          </div>

          <div className="cart-item-book-author">
             <b>Author : </b>  {item.author}
          </div>
      </div>





       <div >
       <div className="cart-item-quantity">
          <button  onClick={() => addToCart({...item ,quantity : (item.quantity + 1) })}>
              <i className="bi bi-plus-lg"></i>
          </button>
            <b>{item.quantity}</b>
          <button onClick={() =>{ item.quantity > 1 ? addToCart({...item ,quantity : (item.quantity - 1) }) :  removeFromCart(item.id)}   } >
              <i className="bi bi-dash-lg"></i>
          </button>
      </div>
      <div className="cart-item-price">$ {(item.price * item.quantity).toFixed(2)}</div>
       </div>


       <i onClick={() => removeFromCart(item.id)}  className="bi bi-trash-fill"></i>


    
    </div>
    
</div>

)
  );
};

export default CartItem;
