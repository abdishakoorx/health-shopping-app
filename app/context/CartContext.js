"use client";
import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          )
        };
      }
      return { 
        ...state, 
        items: [...state.items, { ...action.payload, quantity: 1 }] 
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };

    case 'CLEAR_CART':
      return { items: [] };

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Add localStorage persistence
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'HYDRATE', payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  const value = {
    items: state.items,
    cartTotal: state.items.reduce((total, item) => total + item.price * item.quantity, 0),
    cartCount: state.items.reduce((count, item) => count + item.quantity, 0),
    addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
    removeFromCart: (productId) => dispatch({ type: 'REMOVE_FROM_CART', payload: productId }),
    updateQuantity: (productId, quantity) => 
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' })
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};