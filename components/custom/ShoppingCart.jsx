"use client";
import { useCart } from '@/app/context/CartContext';
import { Close, Remove, Add, DeleteOutline } from '@mui/icons-material';
import Image from 'next/image';

export default function ShoppingCartUI({ open, onClose }) {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed right-0 top-0 h-full w-full md:w-[400px] bg-background dark:bg-darkBackground z-50 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border p-4">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Your cart is empty
              </p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 border border-border rounded-lg bg-card"
                >
                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-primary mt-1">
                          Kes {item.price.toFixed(2)}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full"
                      >
                        <DeleteOutline className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                      >
                        <Remove className="h-4 w-4" />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                      >
                        <Add className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-border p-4 bg-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Total:</h3>
              <p className="text-xl font-semibold text-primary">
                Kes {cartTotal.toFixed(2)}
              </p>
            </div>
            <button
              disabled={items.length === 0}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full border border-border hover:bg-accent hover:text-accent-foreground py-3 rounded-lg"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}