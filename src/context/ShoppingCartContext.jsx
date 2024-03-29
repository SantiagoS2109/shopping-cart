/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ShoppingCartContext = createContext();

const initialState = { items: [], discount: {} };

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      if (
        state.items.find(
          (item) =>
            item.id === action.payload.id && item.size === action.payload.size,
        )
      )
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity++, size: item.size }
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
        items: state.items.filter(
          (item) =>
            item.id !== action.payload.id || item.size !== action.payload.size,
        ),
      };
    }

    case "removeAll": {
      return {
        ...state,
        items: [],
        discount: {},
      };
    }

    case "discount": {
      return {
        ...state,
        discount: action.payload,
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
