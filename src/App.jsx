import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoApp from "./pages/TodoApp";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/Productdetails";
import Login from "./pages/Login";
import SocialPost from "./pages/Post";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<SocialPost />} />
      </Routes>
    </div>
  );
}

export default App;
