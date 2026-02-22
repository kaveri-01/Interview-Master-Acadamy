import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-16 overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 text-white">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">

          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            🚀 5-Week Intensive Placement Program
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Crack Interviews with
                <span className="block bg-white text-indigo-700 px-4 py-2 rounded-xl mt-3 w-fit shadow-xl">
                  Daily Mock Pressure
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                25 Days • 25 Lectures • 25 Mock Interviews  
                Real pressure. Real feedback. Real confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition"
                >
                  Enroll Now
                </Link>

                <Link
                  to="/curriculum"
                  className="bg-white/15 border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/25 transition"
                >
                  View Curriculum
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 text-center">
                <Stat number="25" label="Days" />
                <Stat number="25" label="Lectures" />
                <Stat number="25" label="Mocks" />
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-8 shadow-2xl hover:scale-[1.02] transition">
              <h3 className="text-2xl font-bold mb-6">
                Program Includes
              </h3>

              <ul className="space-y-4 text-white/95">
                <li>✅ Daily Rapid Mocks</li>
                <li>✅ Weekly Power Mocks</li>
                <li>✅ Resume + HR + Technical</li>
                <li>✅ English Confidence</li>
                <li>✅ Salary Negotiation</li>
                <li>✅ Placement Roadmap</li>
              </ul>

              <Link
                to="/program"
                className="block mt-8 bg-white text-indigo-700 text-center font-bold py-3 rounded-xl hover:bg-indigo-50 transition"
              >
                Explore Full Program →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Why This Program Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Built like a real interview battlefield — not just theory lectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <HighlightCard icon="🎯" title="Real Interview Pressure" text="Students face mock interviews from Day 1 — removes fear fast." />
            <HighlightCard icon="⚡" title="Daily Rapid Mocks" text="Short pressure rounds that build instant speaking confidence." />
            <HighlightCard icon="🧠" title="Answer Frameworks" text="STAR method & structured answering techniques." />
            <HighlightCard icon="🗣" title="English Confidence" text="Basic to fluent interview communication training." />
            <HighlightCard icon="📊" title="Score & Feedback" text="Each mock includes evaluation + improvement points." />
            <HighlightCard icon="💼" title="Placement Strategy" text="JD matching, profile branding, job portal optimization." />

          </div>
        </div>
      </section>

      {/* ================= MOCK STRUCTURE PREMIUM ================= */}

      <section className="relative py-24 overflow-hidden">

        {/* background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-white">

          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 backdrop-blur px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              🎯 Interview Pressure Model
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Mock Interview Structure
            </h2>

            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Practice → Pressure → Evaluation → Improvement
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            <MockCard
              color="emerald"
              icon="⚡"
              title="Daily Rapid Mocks"
              time="15 Minutes"
              points={[
                "Confidence check",
                "Speaking clarity",
                "Fast thinking",
                "Daily exposure"
              ]}
              days="Day 1–4, 6–9, 11–14, 16–19, 21–24"
            />

            <MockCard
              color="blue"
              icon="🔥"
              title="Friday Power Mocks"
              time="30 Minutes"
              points={[
                "HR + Resume",
                "Behavioral",
                "Role-based",
                "Evaluation"
              ]}
              days="Day 5, 10, 15, 20, 25"
            />

            <MockCard
              color="purple"
              icon="🏆"
              title="Final Evaluation"
              time="Full Simulation"
              points={[
                "Complete interview",
                "Scorecard",
                "Weakness report",
                "Growth roadmap"
              ]}
              days="Final Day"
            />

          </div>

          <div className="hidden lg:flex items-center justify-center gap-6 mt-14 text-white/70 font-semibold">
            Rapid Practice → Power Simulation → Final Evaluation
          </div>

        </div>
      </section>

      {/* ================= WHO + OUTCOMES ================= */}

      <section className="py-24 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Who This Program Is For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <WhoCard icon="🎓" title="Freshers" text="No interview experience yet" />
            <WhoCard icon="😰" title="Low Confidence" text="Fear of speaking" />
            <WhoCard icon="🔁" title="Repeated Rejections" text="Tried many times" />
            <WhoCard icon="💼" title="Job Switchers" text="Need fast prep" />
          </div>

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Program Outcomes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OutcomeCard title="Confident Self-Introduction" />
            <OutcomeCard title="Structured Answering Skill" />
            <OutcomeCard title="HR + Technical Ready" />
            <OutcomeCard title="English Speaking Confidence" />
            <OutcomeCard title="Mock Experience" />
            <OutcomeCard title="Placement Roadmap" />
          </div>

        </div>
      </section>

    </div>
  );
}


/* ================= COMPONENTS ================= */

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-3xl font-extrabold">{number}</div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
}

function HighlightCard({ icon, title, text }) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition border border-slate-200">
      <div className="text-4xl mb-4 group-hover:scale-110 transition">{icon}</div>
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function MockCard({ color, icon, title, time }) {
  const map = {
    emerald: "from-emerald-400 to-emerald-600",
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600",
  };

  return (
    <div className="relative bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-white shadow-2xl hover:-translate-y-2 transition">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${map[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="text-sm opacity-80">{time}</div>
    </div>
  );
}

function WhoCard({ icon, title, text }) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition border">
      <div className="text-4xl mb-4 group-hover:scale-110 transition">{icon}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function OutcomeCard({ title }) {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition">
      <div className="text-lg font-bold">✓ {title}</div>
    </div>
  );
}
