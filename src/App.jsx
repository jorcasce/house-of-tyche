import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Casinos from "./pages/Casinos";
import Casino1 from "./pages/Casinos/Casino1";
import Casino2 from "./pages/Casinos/Casino2";
import Casino3 from "./pages/Casinos/Casino3";
import Casino4 from "./pages/Casinos/Casino4";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <nav className="bg-gray-900 p-4 text-white flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/casinos">Casinos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div className="p-6 text-white text-2xl">Welcome to House of Tyche</div>} />
        <Route path="/casinos" element={<Casinos />} />
        <Route path="/casinos/casino1" element={<Casino1 />} />
        <Route path="/casinos/casino2" element={<Casino2 />} />
        <Route path="/casinos/casino3" element={<Casino3 />} />
        <Route path="/casinos/casino4" element={<Casino4 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;