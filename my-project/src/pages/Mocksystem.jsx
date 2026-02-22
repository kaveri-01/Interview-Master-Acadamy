import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MockSystem() {
  const navigate = useNavigate();

  return (
    <div className="pt-20 overflow-hidden bg-slate-950 text-white relative">
      {/* ===== Animated Grid Background ===== */}
      <div
        className="absolute inset-0 opacity-20 
        [background-image:linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      <div className="relative z-10">
        {/* ================= HERO ================= */}

        <section className="py-28 text-center relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Interview Simulation Engine
            </h1>

            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              Experience real interview pressure through structured rapid mocks,
              power simulations, and performance scoring.
            </p>

            <div className="mt-10">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition shadow-lg shadow-purple-500/30"
              >
                Activate Mock System
              </Link>
            </div>
          </div>
        </section>

        {/* ================= RAPID vs POWER ================= */}

        <section className="pt-10 py-24">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            <NeonCard
              title="Rapid Mock Engine"
              color="cyan"
              features={[
                "15 Minute Pressure Rounds",
                "Confidence Calibration",
                "HR + Basic Technical",
                "Daily Exposure",
              ]}
            />

            <NeonCard
              title="Power Simulation Mode"
              color="purple"
              features={[
                "30 Minute Full Interview",
                "Role-Based Questions",
                "Behavioral Analysis",
                "Performance Scorecard",
              ]}
            />
          </div>
        </section>

        {/* ================= PIPELINE FLOW ================= */}

        <section className="pt-10 py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Simulation Pipeline
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-6 text-slate-300">
              <PipelineStep label="Practice" />
              <Arrow />
              <PipelineStep label="Pressure" />
              <Arrow />
              <PipelineStep label="Evaluation" />
              <Arrow />
              <PipelineStep label="Score" />
              <Arrow />
              <PipelineStep label="Growth" />
            </div>
          </div>
        </section>

        {/* ================= SCORECARD PREVIEW ================= */}

        <section className="pt-10 py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Performance Analytics
              </h3>

              <div className="grid md:grid-cols-2 gap-8 text-slate-300">
                <ScoreItem label="Confidence" value="8.5/10" />
                <ScoreItem label="Communication" value="9/10" />
                <ScoreItem label="Technical Clarity" value="7.5/10" />
                <ScoreItem label="Overall Readiness" value="8.2/10" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="py-24 text-center bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Enter The Interview Lab
            </h2>

            <div className="pt-10">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
              >
                Enroll & Start Training
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function NeonCard({ title, features, color }) {
  const glow = color === "cyan" ? "shadow-cyan-500/30" : "shadow-purple-500/30";

  return (
    <div
      className={`bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 shadow-lg ${glow} hover:shadow-2xl hover:-translate-y-2 transition duration-500`}
    >
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        {title}
      </h3>

      <ul className="space-y-4 text-slate-300">
        {features.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function PipelineStep({ label }) {
  return (
    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl shadow-md">
      {label}
    </div>
  );
}

function Arrow() {
  return <span className="text-purple-400 text-xl">→</span>;
}

function ScoreItem({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <div className="text-sm text-slate-400 mb-2">{label}</div>
      <div className="text-xl font-bold text-cyan-400">{value}</div>
    </div>
  );
}
