import { Link } from "react-router-dom";

export default function Curriculum() {
  return (
    <div className="pt-20 overflow-hidden text-white">

      {/* ================= HERO ================= */}

      <section className="py-28 text-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            5-Week Interview Mastery Curriculum
          </h1>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            A structured transformation roadmap combining lectures, rapid mocks,
            power simulations, and real interview pressure.
          </p>
        </div>
      </section>

      {/* Soft Divider */}
      <div className="h-24 bg-gradient-to-b from-slate-900 to-slate-950" />

      {/* ================= TIMELINE ================= */}

      <section className="pb-10 relative bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block shadow-lg shadow-purple-500/30" />

          <div className="space-y-32">

            <WeekBlock
              position="left"
              number="01"
              week="Week 1"
              title="Confidence & Foundation"
              days={[
                { text: "Understanding Interviews", type: "rapid" },
                { text: "Self Introduction", type: "rapid" },
                { text: "Resume Mastery", type: "rapid" },
                { text: "Communication Skills", type: "rapid" },
                { text: "Body Language & Personality", type: "power" }
              ]}
            />

            <WeekBlock
              position="right"
              number="02"
              week="Week 2"
              title="Communication & HR Confidence"
              days={[
                { text: "Answering Smartly", type: "rapid" },
                { text: "HR Questions Handling", type: "rapid" },
                { text: "Overcoming Fear", type: "rapid" },
                { text: "Group Discussion", type: "rapid" },
                { text: "Mock HR Interview", type: "power" }
              ]}
            />

            <WeekBlock
              position="left"
              number="03"
              week="Week 3"
              title="Role-Based Preparation"
              days={[
                { text: "Job Description Reading", type: "rapid" },
                { text: "Technical Strategy", type: "rapid" },
                { text: "Logical Thinking", type: "rapid" },
                { text: "Situational Questions", type: "rapid" },
                { text: "Technical Mock Interview", type: "power" }
              ]}
            />

            <WeekBlock
              position="right"
              number="04"
              week="Week 4"
              title="Advanced Interview Handling"
              days={[
                { text: "Salary Negotiation", type: "rapid" },
                { text: "Handling Rejection", type: "rapid" },
                { text: "Professional Communication", type: "rapid" },
                { text: "Online Interviews", type: "rapid" },
                { text: "Full Mock Simulation", type: "power" }
              ]}
            />

            <WeekBlock
              position="left"
              number="05"
              week="Week 5"
              title="Placement Strategy & Final Evaluation"
              days={[
                { text: "Job Searching Strategy", type: "rapid" },
                { text: "Personal Branding", type: "rapid" },
                { text: "High Pressure Round", type: "rapid" },
                { text: "Panel Simulation", type: "rapid" },
                { text: "Final Evaluation", type: "power" }
              ]}
            />

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-24 text-center bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Start Your Transformation Today
          </h2>

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


/* ================= WEEK BLOCK ================= */

function WeekBlock({ position, number, week, title, days }) {
    const isLeft = position === "left";
  
    return (
      <div className="relative flex md:items-start justify-center">
  
        {/* LEFT SIDE */}
        {isLeft && (
          <div className="md:w-[45%] md:pr-20">
            <CardContent week={week} title={title} days={days} align="right" />
          </div>
        )}
  
        {/* CENTER LINE NUMBER */}
        <div className="hidden md:flex relative z-20">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-slate-950">
            {number}
          </div>
        </div>
  
        {/* RIGHT SIDE */}
        {!isLeft && (
          <div className="md:w-[45%] md:pl-20">
            <CardContent week={week} title={title} days={days} align="left" />
          </div>
        )}
  
      </div>
    );
  }
  
  
  /* Separated Card Component */
  
  function CardContent({ week, title, days, align }) {
    return (
      <div className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-10 shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 transition duration-500">
  
        <div className={`text-indigo-400 font-semibold mb-2 tracking-wide uppercase text-sm ${align === "right" ? "text-right" : ""}`}>
          {week}
        </div>
  
        <h3 className={`text-2xl font-bold mb-6 ${align === "right" ? "text-right" : ""}`}>
          {title}
        </h3>
  
        <ul className="space-y-4 text-slate-300">
          {days.map((day, index) => (
            <li key={index} className="flex items-center gap-3">
  
              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${
                  day.type === "rapid"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                }`}
              >
                {day.type === "rapid" ? "Rapid Mock" : "Power Mock"}
              </span>
  
              <span className="text-slate-200">
                {day.text}
              </span>
  
            </li>
          ))}
        </ul>
  
      </div>
    );
  }
  