import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col">
      <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
          🎲 House of Tyche
        </h1>
        <div className="space-x-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 underline" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/casinos"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 underline" : "hover:underline"
            }
          >
            Casinos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 underline" : "hover:underline"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 underline" : "hover:underline"
            }
          >
            About
          </NavLink>
        </div>
      </nav>

      <main className="p-6 flex-grow">
        <div className="max-w-4xl mx-auto space-y-8">{children}</div>
      </main>

      <footer className="bg-gray-800 text-gray-400 text-center py-4 text-sm">
        © {new Date().getFullYear()} House of Tyche. All rights reserved.
      </footer>
    </div>
  );
}