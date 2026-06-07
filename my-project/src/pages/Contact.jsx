
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry Submitted Successfully!");
  };

  return (
    <div className="pt-20 overflow-hidden text-white">

      {/* HERO */}

      <section className="relative py-28 text-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden">

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Let's Build Your Career Together
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have questions about our Full Stack Development Program?
            Get in touch and we'll guide you personally.
          </p>
        </div>

      </section>

      {/* CONTACT INFO */}

      <section className="py-20 bg-slate-950">

        <div className="max-w-6xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-3 text-indigo-400">
                Phone
              </h3>

              <p className="text-slate-300">
                +91 8888704897
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                WhatsApp
              </h3>

              <a
                href="https://wa.me/918888704897"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300"
              >
                Chat Now
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">
                Courses
              </h3>

              <p className="text-slate-300">
                Frontend, Backend & Full Stack
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FORM */}

      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

        <div className="max-w-3xl mx-auto px-4">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <h2 className="text-3xl font-bold text-center mb-8">
              Send Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none"
                required
              />

              <select
                name="course"
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none"
                required
              >
                <option value="">Select Course</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Full Stack Development</option>
                <option>Full Stack + Internship</option>
              </select>

              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-3 rounded-xl font-semibold"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-24 bg-slate-950">

        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                Is this course beginner friendly?
              </h3>

              <p className="text-slate-400">
                Yes, we start from fundamentals and gradually move to advanced topics.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                Will I build projects?
              </h3>

              <p className="text-slate-400">
                Yes, you'll build multiple real-world projects.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                Do you provide mock interviews?
              </h3>

              <p className="text-slate-400">
                Yes, Rapid Mocks and Power Mocks are included.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 text-center bg-gradient-to-r from-indigo-600 to-purple-600">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready To Start Your Journey?
        </h2>

        <a
          href="https://wa.me/918888704897"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold"
        >
          WhatsApp Now
        </a>

      </section>

    </div>
  );
}

