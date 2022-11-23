import { useEffect, useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import axios from "axios";
import { cartReducer } from "./reducers/reducers";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const getProductdata = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    getProductdata();
  }, []);

  return (
    <div className="App">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
