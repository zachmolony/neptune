import { createContext, useReducer, useContext } from "react";
import cloneDeep from "lodash/cloneDeep";

const CartContext = createContext();

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("neptuneCart", JSON.stringify(cart));
};

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("neptuneCart");
  // if (cart) {
  //   return JSON.parse(cart);
  // }
  return [];
};

function cartReducer(state, action) {
  switch (action.type) {
    case "addProduct": {
      const product = action.payload;
      const productIndex = state.findIndex((p) => p.id === product.id);
      const newState = cloneDeep(state);
      if (productIndex === -1) {
        console.log("product not found, adding", product, { ...product, quantity: 1 });
        newState.push({ ...product, quantity: 1 });
        // saveCartToLocalStorage(newState);
        return newState;
      }
      newState[productIndex].quantity += 1;

      // saveCartToLocalStorage(newState);
      return newState;
    }
    case "decreaseProductQuantity": {
      const product = action.payload;
      const productIndex = state.findIndex((p) => p.id === product.id);
      const newState = cloneDeep(state);
      if (productIndex === -1) {
        // saveCartToLocalStorage(newState);
        return newState;
      }
      if (newState[productIndex].quantity === 1) {
        newState.splice(productIndex, 1);
      } else {
        newState[productIndex].quantity -= 1;
      }

      // saveCartToLocalStorage(newState);
      return newState;
    }
    case "increaseProductQuantity": {
      const product = action.payload;
      const productIndex = state.findIndex((p) => p.id === product.id);
      const newState = cloneDeep(state);
      if (productIndex === -1) {
        // saveCartToLocalStorage(newState);
        return newState;
      }
      newState[productIndex].quantity += 1;

      // saveCartToLocalStorage(newState);
      return newState;
    }
    case "removeProduct": {
      const product = action.payload;
      const productIndex = state.findIndex((p) => p.id === product.id);
      const newState = cloneDeep(state);
      if (productIndex === -1) {
        // saveCartToLocalStorage(newState);
        return newState;
      }
      newState.splice(productIndex, 1);

      // saveCartToLocalStorage(newState);
      return newState;
    }
    case "clearCart": {
      saveCartToLocalStorage([]);
      return [];
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, getCartFromLocalStorage());

  const removeProduct = (product) => {
    dispatch({
      type: "removeProduct",
      payload: product,
    });
  };

  const addProduct = (product) => {
    dispatch({
      type: "addProduct",
      payload: product,
    });
  };

  const decreaseProductQuantity = (product) => {
    dispatch({
      type: "decreaseProductQuantity",
      payload: product,
    });
  };

  const increaseProductQuantity = (product) => {
    dispatch({
      type: "increaseProductQuantity",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "clearCart",
    });
  };

  const isEmpty = () => {
    return cart.length === 0;
  };

  const cartTotal = () => {
    return (
      cart.reduce((acc, product) => acc + product.price.unit_amount * product.quantity, 0) / 100
    );
  };

  const cartSize = cart.reduce((acc, product) => acc + product.quantity, 0);

  const value = {
    cart,
    cartSize,
    removeProduct,
    addProduct,
    decreaseProductQuantity,
    increaseProductQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
