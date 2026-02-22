import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    role: "",
    experience: "",
    interviewType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const message = `
  New Enrollment Inquiry 🚀
  
  Name: ${form.name}
  Phone: ${form.phone}
  Role: ${form.role}
  Experience: ${form.experience}
  Interview Type: ${form.interviewType}
  
  Message:
  ${form.message}
    `;
  
    const encodedMessage = encodeURIComponent(message);
  
    const whatsappURL = `https://wa.me/918888704897?text=${encodedMessage}`;
  
    window.open(whatsappURL, "_blank");
  };
  

  return (
    <div className="pt-20 bg-slate-950 text-white min-h-screen relative overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10 
        [background-image:linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT SIDE ================= */}

        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Enroll In The Interview Mastery Program
          </h1>

          <ul className="space-y-6 text-slate-300 text-lg">
            <li>✔ 25 Days Structured Training</li>
            <li>✔ 25 Mock Interviews</li>
            <li>✔ Real Pressure Simulation</li>
            <li>✔ Detailed Evaluation & Scorecard</li>
            <li>✔ Personalized Improvement Plan</li>
          </ul>

          {/* Contact Number Block */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl">

            <p className="text-sm text-white/80 mb-2">
              Direct Enquiry Number
            </p>

            <a
              href="tel:8888704897"
              className="text-2xl font-bold tracking-wide hover:opacity-90 transition"
            >
              📞 8888704897
            </a>

          </div>

        </div>

        {/* ================= RIGHT SIDE FORM ================= */}

        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 shadow-2xl">

          <h2 className="text-2xl font-bold mb-8 text-center">
            Secure Your Seat
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <Input
              label="Current Role / Student"
              name="role"
              value={form.role}
              onChange={handleChange}
            />

            {/* Experience Dropdown */}
            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Experience Level
              </label>
              <select
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Experience</option>
                <option>Fresher</option>
                <option>0-1 Years</option>
                <option>1-3 Years</option>
                <option>3+ Years</option>
              </select>
            </div>

            {/* Interview Type Dropdown */}
            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Preferred Interview Type
              </label>
              <select
                name="interviewType"
                value={form.interviewType}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select Type</option>
                <option>HR</option>
                <option>Technical</option>
                <option>Both</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm text-slate-300">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-105 transition shadow-lg shadow-indigo-500/30"
            >
              Submit Enrollment
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}


/* ================= INPUT COMPONENT ================= */

function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block mb-2 text-sm text-slate-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>
  );
}
