import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold text-yellow-400">House of Tyche</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/casinos" className="hover:underline">Casinos</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}