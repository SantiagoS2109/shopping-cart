/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ShoppingCartContext = createContext();

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      if (state.items.find((item) => item.id === action.payload.id))
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case "remove": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function ShoppingCartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider",
    );
  }

  return context;
}

export { ShoppingCartProvider, useShoppingCart };
