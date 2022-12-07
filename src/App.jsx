import { useState } from 'react'
import './App.scss';
import { Home } from './components/Home';
import { CartProvider } from './Context/CartContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <Home />
    </CartProvider>
  )
}

export default App
