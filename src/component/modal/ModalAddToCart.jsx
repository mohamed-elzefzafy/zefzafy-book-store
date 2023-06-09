import { useContext, useState } from "react";
import cartContext from "../../context/cartcontext";


const ModalAddToCart = ({book}) => {

  const {addToCart} = useContext(cartContext)
  const [quantity, setquantity] = useState(1);
    return (
        <div className="modal-add-to-cart">
        <input
          type="number"
          min={1}
          max={100}
          value={quantity}
          className="modal-add-to-cart-input"
          onChange={(e) => setquantity(parseInt(e.target.value))}
        />
        <button onClick={() => addToCart({...book , quantity : quantity})}  className="modal-add-to-cart-btn">
          <i className="bi bi-cart-plus"></i>
          Add To Cart
        </button>
      </div>
    );
}

export default ModalAddToCart;
