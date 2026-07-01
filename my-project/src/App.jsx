import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyTerms from "./pages/PrivacyTerms";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "../src/pages/Home";
import Program from "./pages/Program";
import Curriculum from "./pages/Curriculum";
import MockSystem from "./pages/Mocksystem";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import FullStack from "./pages/fullStack";
import QAManual from "./pages/QAManual";
import QAAutomation from "./pages/QAAutomation";
import Salesforce from "./pages/Salesforce";
import SignIn from "./pages/SignIn";
import AdmissionForm from "./pages/AdmissionForm";

import WhatsAppButton from "./components/WhatsAppButton";
import Dashboard from "./pages/admin/Dashboard";

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
        <Route path="/courses/frontend" element={<Frontend />} />
        <Route path="/courses/backend" element={<Backend />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/fullstack" element={<FullStack />} />
        <Route path="/courses/qa-manual" element={<QAManual />} />
        <Route path="/courses/qa-automation" element={<QAAutomation />} />
        <Route path="/courses/salesforce" element={<Salesforce />} />
        <Route path="/privacy-terms" element={<PrivacyTerms />} />
        <Route path="/admissionform" element={<AdmissionForm />} />
        

        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}
