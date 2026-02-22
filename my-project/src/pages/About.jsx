import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="pt-20 overflow-hidden">
      {/* ================= HERO ================= */}

      <section className="py-28 bg-gradient-to-br from-indigo-700 via-fuchsia-600 to-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Not Just Interview Preparation.
            <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mt-4">
              Confidence Engineering.
            </span>
          </h1>

          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            We simulate real pressure. We train response clarity. We engineer
            interview confidence.
          </p>
        </div>
      </section>

      {/* ================= PROBLEM ================= */}

      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-10 
    [background-image:linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
    [background-size:40px_40px]"
        />

        {/* glow blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Why Most Students Fail Interviews
          </h2>

          <div className="space-y-6 text-slate-300 text-lg">
            <p>❌ Theory without pressure.</p>
            <p>❌ Memorized answers under stress.</p>
            <p>❌ No simulation of real environments.</p>
            <p>❌ Zero feedback-based growth.</p>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
              Our Philosophy
            </h2>

            <p className="text-slate-600 mb-6 text-lg">
              Confidence is built by exposure. Not by watching videos.
            </p>

            <p className="text-slate-600 text-lg">
              Daily simulation. Real pressure. Structured feedback.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">The Formula</h3>
            <p className="text-lg">
              Practice → Pressure → Feedback → Improvement → Mastery
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}

      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-10 
    [background-image:linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
    [background-size:40px_40px]"
        />

        {/* glow */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Our Vision
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            To eliminate interview fear completely. Every student should walk
            into interviews with clarity, composure, and confidence.
          </p>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}

      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-slate-900">
            Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <ValueCard
              gradient="from-indigo-500 to-purple-600"
              title="Discipline"
            />
            <ValueCard gradient="from-pink-500 to-red-500" title="Confidence" />
            <ValueCard gradient="from-cyan-500 to-blue-600" title="Clarity" />
            <ValueCard
              gradient="from-yellow-400 to-orange-500"
              title="Growth"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready To Build Unshakeable Confidence?
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition shadow-lg"
          >
            Join The Program
          </button>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ title, gradient }) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} text-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition`}
    >
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
}
