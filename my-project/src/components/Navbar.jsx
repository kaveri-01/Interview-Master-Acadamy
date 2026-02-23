import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle =
    "text-sm font-medium text-slate-700 hover:text-indigo-600 transition";

  const activeStyle = "text-indigo-600 font-semibold";

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-indigo-600">
            Interview Mastery Academy
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : linkStyle}>Home</NavLink>
            <NavLink to="/program" className={({ isActive }) => isActive ? activeStyle : linkStyle}>Program</NavLink>
            <NavLink to="/curriculum" className={({ isActive }) => isActive ? activeStyle : linkStyle}>Curriculum</NavLink>
            <NavLink to="/mock-system" className={({ isActive }) => isActive ? activeStyle : linkStyle}>Mock System</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : linkStyle}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeStyle : linkStyle}>Contact</NavLink>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition"
            >
              Enroll Now
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="flex flex-col px-4 py-4 gap-4 text-sm">

            <NavLink to="/" onClick={()=>setOpen(false)}>Home</NavLink>
            <NavLink to="/program" onClick={()=>setOpen(false)}>Program</NavLink>
            <NavLink to="/curriculum" onClick={()=>setOpen(false)}>Curriculum</NavLink>
            <NavLink to="/mock-system" onClick={()=>setOpen(false)}>Mock System</NavLink>
            <NavLink to="/about" onClick={()=>setOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>

            <NavLink
              to="/contact"
              onClick={()=>setOpen(false)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-center font-semibold"
            >
              Enroll Now
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
}
