// HOOKS
import { useState } from "react";

// COMPONENTS
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
