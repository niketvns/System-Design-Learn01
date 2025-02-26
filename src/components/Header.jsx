"use client";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-between p-5 bg-black/70 text-white">
      <div className="flex items-center gap-10">
        <div className="text-lg font-bold">Logo</div>
        <nav className="flex items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Profile
          </NavLink>
          <NavLink
            to="/reddit"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Reddit
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/accordion"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Accordion
          </NavLink>
        </nav>
      </div>
      <div>
        <Link
          to="/login"
          className="py-2 px-4 bg-blue-500 text-white rounded-sm"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
