import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "addProduct": {
      const product = action.payload;
      const productIndex = state.findIndex((p) => p.id === product.id);
      if (productIndex === -1) {
        return [...state, { ...product, quantity: 1 }];
      }
      const newState = [...state];
      newState[productIndex].quantity += 1;

      console.log("added product to cart", newState);
      return newState;
    }
    case "decreaseProductQuantity": {
      const product = action.payload;
      const productIndex = state.findIndex((p) => p.id === product.id);
      if (productIndex === -1) {
        return [...state];
      }
      const newState = [...state];
      if (newState[productIndex].quantity > 1) {
        newState[productIndex].quantity -= 1;
      } else {
        newState.splice(productIndex, 1);
      }
      console.log("decreased product quantity", newState);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, []);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
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
