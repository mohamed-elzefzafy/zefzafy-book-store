import  {  useState } from 'react'
import cartContext from './cartcontext'


const CartProvider = ({Children}) => {
  
const [cartitems , setcartitems] = useState([]);

const addToCart = (item) => {
  const isExist = cartitems.find((el) => el.id === item.id);
  if (isExist)
  {
    setcartitems(cartitems.map((el) => el.id === item.id ? item : el  ))
  } else {
    setcartitems((prev) => [...prev , item])
  }

} 


const removeFromCart = (id) => {
  const cart = cartitems.filter(c => c.id !== id);
  setcartitems(cart)
}


  return (
    <cartContext.Provider value={{
      cartitems ,
       addToCart , 
       removeFromCart,
       cartitemsLength : cartitems.length,
      
      
      }}>
      {Children}
    </cartContext.Provider>
  )
}

export default CartProvider;