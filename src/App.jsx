import Home from "./pages/Home"
import ProductLis from './pages/ProductList';
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

function App() {

  const user = true;
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductLis />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={ user ? <Navigate to="/"/> : <Register/> } />
          <Route path="/login" element={ user ? <Navigate to="/"/> : <Login/> } />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
