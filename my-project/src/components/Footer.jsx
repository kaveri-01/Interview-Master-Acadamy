import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            Job Interview Mastery
          </h3>
          <p className="text-sm">
            5-Week Intensive Confidence & Placement Program with daily mock interviews and real pressure simulation.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <NavLink to="/program">Program</NavLink>
            <NavLink to="/curriculum">Curriculum</NavLink>
            <NavLink to="/mock-system">Mock System</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <div className="flex flex-col gap-2 text-sm">
            <NavLink to="/legal">Privacy & Terms</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

      </div>

      <div className="text-center text-xs border-t border-slate-800 py-4">
        © {new Date().getFullYear()} Interview Mastery Program
      </div>
    </footer>
  );
}
