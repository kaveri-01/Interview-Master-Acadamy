import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyTerms from "./pages/PrivacyTerms";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home";
import Program from "./pages/Program";
import Curriculum from "./pages/Curriculum";
import MockSystem from "./pages/Mocksystem";
import About from "./pages/About";
import Contact from "./pages/Contact";

import WhatsAppButton from "./components/WhatsAppButton";


export default function App() {
  return (
    <div className="font-sans text-slate-800">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/mock-system" element={<MockSystem />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/privacy-terms" element={<PrivacyTerms />} />

      </Routes>

      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}
