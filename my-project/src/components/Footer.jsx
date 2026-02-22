import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">

      {/* Top Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600" />

      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-12">

        {/* ================= BRAND ================= */}
        <div>
        <div className="mb-4">
  <Link to="/">
    <img
      src={logo}
      alt="Interview Mastery Academy Logo"
      className="w-16 h-auto object-contain hover:scale-105 transition duration-300"

    />
  </Link>
</div>

          <p className="text-sm mt-5 text-slate-400 leading-relaxed">
            25-Day Interview Confidence & Placement Program.
            Real pressure. Real growth. Real transformation.
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-white font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link to="/program" className="hover:text-cyan-400 transition">Program</Link></li>
            <li><Link to="/curriculum" className="hover:text-cyan-400 transition">Curriculum</Link></li>
            <li><Link to="/mock-system" className="hover:text-cyan-400 transition">Mock System</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition">Enroll</Link></li>
          </ul>
        </div>

        {/* ================= LEGAL ================= */}
        <div>
          <h3 className="text-white font-semibold mb-5">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/privacy-terms"
                className="hover:text-cyan-400 transition"
              >
                Privacy Policy & Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT & SOCIAL ================= */}
        <div>
          <h3 className="text-white font-semibold mb-5">Connect With Us</h3>

          {/* CALL */}
          <a
            href="tel:8888704897"
            className="flex items-center gap-3 mb-4 group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-110 transition">
              <PhoneIcon />
            </div>
            <span className="text-sm group-hover:text-indigo-400 transition">
              8888704897
            </span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/918888704897"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mb-4 group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 group-hover:scale-110 transition shadow-lg shadow-green-500/30">
              <WhatsAppIcon />
            </div>
            <span className="text-sm group-hover:text-green-400 transition">
              WhatsApp
            </span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/interviewmasteryacademy?igsh=ZjF4dTc1YTRlaTQ4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 group-hover:scale-110 transition shadow-lg shadow-pink-500/30">
              <InstagramIcon />
            </div>
            <span className="text-sm font-semibold group-hover:text-pink-400 transition">
              Instagram
            </span>
          </a>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Interview Mastery Program. All Rights Reserved.
      </div>

    </footer>
  );
}


/* ================= SVG ICONS ================= */

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.918l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.918-.45l2.064.516A2 2 0 0119.72 19H22a2 2 0 012 2v1a2 2 0 01-2 2h-1C10.85 24 0 13.15 0 1V0a2 2 0 012-2h1z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className="w-5 h-5 text-white"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.894.754 5.613 2.07 7.97L0 32l7.828-2.054A15.932 15.932 0 0016 32c8.836 0 16-7.164 16-15.604C32 7.56 24.836.396 16 .396zm0 28.528c-2.58 0-5.1-.69-7.3-1.996l-.52-.31-4.648 1.218 1.24-4.53-.338-.53A12.333 12.333 0 013.667 16.4c0-6.797 5.535-12.333 12.333-12.333 6.797 0 12.333 5.536 12.333 12.333 0 6.798-5.536 12.334-12.333 12.334z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="w-5 h-5 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm0 2h8.5C18.43 4 20 5.57 20 7.75v8.5C20 18.43 18.43 20 16.25 20h-8.5C5.57 20 4 18.43 4 16.25v-8.5C4 5.57 5.57 4 7.75 4zm4.25 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
    </svg>
  );
}
