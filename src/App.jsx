import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Casinos from "./pages/Casinos";
import Button from "./components/Button"



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/casinos" element={<Layout><Casinos /></Layout>} />
        {/* Add more nested casino pages if needed */}
      </Routes>
    </Router>
  );
}