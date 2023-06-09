import "./cart.css";
import OrderSummary from "./OrderSummary";
import { useContext } from "react";
import cartContext from "context/cartcontext";
import CartItem from "./CartItem";



const Cart = () => {

  const {cartitems ,addToCart , removeFromCart} = useContext(cartContext)

    const totalPrice = cartitems.reduce((acc , cur) => acc + (cur.price * cur.quantity) , 0).toFixed(2)
    return (
        <div className="cart">
          {cartitems.length === 0 ?   <div className="cart-title">Your Shopping Cart Is Empty</div> :   <div className="cart-title">Your Shopping Cart</div>}
            <div className="cart-wrabber">
                <div className="cart-items">
                {cartitems.map((item) => 
           <CartItem item={item}  addToCart={addToCart}   removeFromCart={removeFromCart}  key={item.id}/>
            )}
      
                </div>
                   {cartitems.length !== 0 &&   <OrderSummary totalPrice={totalPrice}/>}
            </div>

           
         
        </div>
    );
}

export default Cart;
