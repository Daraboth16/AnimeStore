import { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [profile, setProfile] = useState(() => {
    const storedProfile = localStorage.getItem('profile');
    return storedProfile ? JSON.parse(storedProfile) : {};
  });

  const fakeUser = {
    username: 'admin',
    password: '12345',
    profile: "/"
  };

  const login = (username, password) => {
    if (username === fakeUser.username && password === fakeUser.password) {
      const user = { username };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  };
  const clearCart = ()=>{
    setCartItems([])
  }
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (profileData) => {
    setProfile(profileData);
    localStorage.setItem('profile', JSON.stringify(profileData));
  };

  const [cartCount, setCartCount] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
    return initialCartItems.reduce((total, item) => total + item.quantity, 0);
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        user,
        login,
        logout,
        profile,
        updateProfile,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useAuth = () => useContext(CartContext);

export default CartProvider;
