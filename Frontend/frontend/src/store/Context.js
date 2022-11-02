import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();


const Context = ({ children }) => {
    const products = fetch('http://localhost:3001/items')
                      .then(res => res.json())
                      .then(data => console.log(data))
    console.log(products)
       

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;