import "./App.css";
import "boxicons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Products from "./components/Products";
import RouteDom from "./pages/RouteDom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/user" element={<div>Vista User</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
