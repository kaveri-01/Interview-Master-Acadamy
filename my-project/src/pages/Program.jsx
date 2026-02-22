import { Link } from "react-router-dom";

export default function Program() {
  return (
    <div className="pt-20 overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Job Interview Mastery Program
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            A 5-Week Intensive Confidence & Placement Program designed to prepare you
            for real interview pressure with structured learning + daily mock interviews.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Enroll Now
          </Link>

        </div>
      </section>

      {/* ================= OVERVIEW CARDS ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8">

          <OverviewCard
            color="indigo"
            title="Duration"
            value="25 Days"
          />

          <OverviewCard
            color="purple"
            title="Lectures"
            value="25 Structured Sessions"
          />

          <OverviewCard
            color="pink"
            title="Mock Interviews"
            value="25 Total (20 Rapid + 5 Power)"
          />

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-white">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              How This Program Works
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Practice + Pressure + Feedback + Improvement = Confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <DarkCard
              icon="📘"
              title="Daily Learning"
              text="Focused lectures covering interview fundamentals, communication, HR & technical strategies."
            />

            <DarkCard
              icon="⚡"
              title="Immediate Mock Practice"
              text="Rapid mock interviews begin from Day 1 to remove fear and build reflex confidence."
            />

            <DarkCard
              icon="📊"
              title="Evaluation & Growth"
              text="Each mock includes structured feedback and improvement plan."
            />

          </div>

        </div>
      </section>

      {/* ================= WEEK STRUCTURE ================= */}

      {/* ================= WEEK STRUCTURE (PARTITIONED) ================= */}

<section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">

{/* decorative blobs */}
<div className="absolute -top-20 -left-20 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl" />
<div className="absolute bottom-0 -right-20 w-80 h-80 bg-rose-300/30 rounded-full blur-3xl" />

<div className="relative max-w-6xl mx-auto px-4 md:px-8">

  <div className="text-center mb-20">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
      5-Week Transformation Journey
    </h2>
    <p className="text-slate-600 max-w-2xl mx-auto">
      Step-by-step confidence building from basics to full interview mastery.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10">

    <JourneyCard number="01"
      week="Week 1"
      title="Confidence & Foundation"
      text="Self-introduction, resume mastery, communication basics."
    />

    <JourneyCard number="02"
      week="Week 2"
      title="Speaking & HR Confidence"
      text="Behavioral answers, STAR method, nervousness control."
    />

    <JourneyCard number="03"
      week="Week 3"
      title="Role-Based Preparation"
      text="JD matching, technical strategy, logical thinking."
    />

    <JourneyCard number="04"
      week="Week 4"
      title="Advanced Handling"
      text="Salary negotiation, rejection strategy, online interviews."
    />

    <JourneyCard number="05"
      week="Week 5"
      title="Placement Strategy"
      text="LinkedIn optimization, branding, final evaluation."
    />

  </div>

</div>
</section>



      {/* ================= WHAT MAKES DIFFERENT ================= */}

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

{/* decorative blobs */}
<div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl" />
<div className="absolute bottom-0 -right-20 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />

<div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">

  <h2 className="text-3xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
    What Makes This Different?
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <GradientCard title="Real Pressure From Day 1" />
    <GradientCard title="Structured Answer Frameworks" />
    <GradientCard title="Daily Confidence Building" />
    <GradientCard title="Power Mock Simulations" />
    <GradientCard title="Scoring & Feedback Model" />
    <GradientCard title="Personal Growth Roadmap" />

  </div>

</div>
</section>


      {/* ================= CTA ================= */}

      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Transform Your Interview Skills?
          </h2>

          <p className="text-white/90 mb-8">
            Join the 25-Day Interview Mastery Program and walk into interviews with confidence.
          </p>

          <Link
            to="/contact"
            className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Enroll Now
          </Link>

        </div>
      </section>

    </div>
  );
}


/* ================= COMPONENTS ================= */

function OverviewCard({ color, title, value }) {
  const map = {
    indigo: "from-indigo-100 to-indigo-50 border-indigo-200 text-indigo-700",
    purple: "from-purple-100 to-purple-50 border-purple-200 text-purple-700",
    pink: "from-pink-100 to-pink-50 border-pink-200 text-pink-700",
  };

  return (
    <div className={`rounded-2xl p-8 shadow-xl bg-gradient-to-br ${map[color]} border hover:-translate-y-2 transition`}>
      <div className="font-semibold mb-2">{title}</div>
      <div className="text-2xl md:text-3xl font-extrabold">{value}</div>
    </div>
  );
}

function DarkCard({ icon, title, text }) {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-white/80">{text}</p>
    </div>
  );
}


function JourneyCard({ number, week, title, text }) {
    return (
      <div className="group relative bg-white/80 backdrop-blur border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 overflow-hidden">
  
        {/* Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/0 via-orange-200/20 to-rose-200/0 opacity-0 group-hover:opacity-100 transition duration-500" />
  
        <div className="relative z-10">
  
          {/* Header Row */}
          <div className="flex items-center gap-4 mb-4">
  
            {/* Number Badge */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md">
              {number}
            </div>
  
            <div>
              <div className="text-sm font-semibold text-amber-600">
                {week}
              </div>
            </div>
  
          </div>
  
          <h3 className="text-xl font-bold mb-3 text-slate-800">
            {title}
          </h3>
  
          <p className="text-slate-600">
            {text}
          </p>
  
          <div className="mt-6 text-amber-500 font-semibold group-hover:translate-x-2 transition">
            →
          </div>
  
        </div>
      </div>
    );
  }
  

function GradientCard({ title }) {
    return (
      <div className="group bg-white/70 backdrop-blur border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </div>
      </div>
    );
  }
  
