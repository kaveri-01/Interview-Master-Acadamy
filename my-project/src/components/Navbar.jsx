
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle =
    "text-sm font-medium text-slate-700 hover:text-indigo-600 transition";

  const activeStyle = "text-indigo-600 font-semibold";

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm z-[9999]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <NavLink
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Interview Mastery Academy"
              className="h-12 w-12 object-contain rounded-full"
            />

            <div>
              <h1 className="text-lg md:text-xl font-bold text-indigo-600 leading-none">
                Interview Mastery Academy
              </h1>

              
               
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Home
            </NavLink>

            {/* COURSES */}
            <div className="relative group">
              <button className={linkStyle}>
                Courses ▾
              </button>

              <div className="absolute top-6 left-0 hidden group-hover:block bg-white border rounded-xl shadow-xl w-56 py-2">

                <NavLink
                  to="/courses/frontend"
                  className="block px-2 py-2 hover:bg-slate-100"
                >
                  Frontend Development
                </NavLink>

                <NavLink
                  to="/courses/backend"
                  className="block px-2 py-2 hover:bg-slate-100"
                >
                  Backend Development
                </NavLink>

              </div>
            </div>

            <NavLink
              to="/program"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Program
            </NavLink>

            <NavLink
              to="/curriculum"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Curriculum
            </NavLink>

            <NavLink
              to="/mock-system"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Mock System
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition"
            >
              Enroll Now
            </NavLink>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="flex flex-col gap-4 p-4">

            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>

            <NavLink
              to="/courses/frontend"
              onClick={() => setOpen(false)}
            >
              Frontend Development
            </NavLink>

            <NavLink
              to="/courses/backend"
              onClick={() => setOpen(false)}
            >
              Backend Development
            </NavLink>

            <NavLink
              to="/program"
              onClick={() => setOpen(false)}
            >
              Program
            </NavLink>

            <NavLink
              to="/curriculum"
              onClick={() => setOpen(false)}
            >
              Curriculum
            </NavLink>

            <NavLink
              to="/mock-system"
              onClick={() => setOpen(false)}
            >
              Mock System
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center font-semibold"
            >
              Enroll Now
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
}

