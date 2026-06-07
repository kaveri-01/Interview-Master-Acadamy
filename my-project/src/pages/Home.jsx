
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb, SiRedis } from "react-icons/si";

export default function Home() {
  return (
    <div className="pt-20 overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden py-28 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-6">
                🚀 Live MERN Training + Internship + Placement
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Become a
                <span className="block bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Job-Ready
                </span>
                Full Stack Developer
              </h1>

              <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10">
                Learn MERN Stack from scratch through live classes,
                real projects, internship opportunities and placement support.
              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
                >
                  Enroll Now
                </Link>

                <a
                  href="https://wa.me/918888704897"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition"
                >
                  WhatsApp Us
                </a>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <HeroStat value="3000+" label="Students Trained" />
              <HeroStat value="5+" label="Years Experience" />
              <HeroStat value="10" label="Students Per Batch" />
              <HeroStat value="100%" label="Practical Learning" />

            </div>

          </div>

        </div>
      </section>

      {/* ================= COURSES ================= */}

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

        <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Courses
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              Learn the skills companies actually hire for.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <CourseCard
              title="Frontend Development"
              duration="2 Months"
              fee="₹10,000"
            />

            <CourseCard
              title="Backend Development"
              duration="2 Months"
              fee="₹10,000"
            />

            <CourseCard
              title="Full Stack Development"
              duration="4 Months"
              fee="₹20,000"
            />

            <CourseCard
              title="Full Stack + Internship"
              duration="4-6 Months"
              fee="₹30,000"
              featured
            />

          </div>

        </div>
      </section>

      {/* ================= TECH STACK ================= */}

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-indigo-50 to-purple-50">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technologies You'll Master
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

            <TechCard icon={<FaHtml5 />} title="HTML" />
            <TechCard icon={<FaCss3Alt />} title="CSS" />
            <TechCard icon={<FaJs />} title="JavaScript" />
            <TechCard icon={<FaReact />} title="React" />
            <TechCard icon={<SiRedux />} title="Redux" />
            <TechCard icon={<FaNodeJs />} title="Node.js" />
            <TechCard icon={<SiExpress />} title="Express" />
            <TechCard icon={<SiMongodb />} title="MongoDB" />
            <TechCard icon={<SiRedis />} title="Redis" />
            <TechCard icon={<FaDocker />} title="Docker" />

          </div>

        </div>
      </section>
    
{/* ================= INTERNSHIP ================= */}

<section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">

  <div className="absolute -top-20 -left-20 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 -right-20 w-80 h-80 bg-rose-300/30 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-4 md:px-8">

    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
        Internship Experience
      </h2>

      <p className="text-slate-600 max-w-2xl mx-auto">
        Work like a professional developer and gain real industry exposure.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <FeatureCard
        emoji="💻"
        title="Real Projects"
        text="Build applications used in real-world scenarios."
      />

      <FeatureCard
        emoji="🤝"
        title="Team Collaboration"
        text="Learn Git workflows and teamwork."
      />

      <FeatureCard
        emoji="🧠"
        title="Code Reviews"
        text="Receive structured feedback on your code."
      />

      <FeatureCard
        emoji="🏆"
        title="Certificate"
        text="Internship completion certificate."
      />

    </div>

  </div>

</section>

{/* ================= PLACEMENT ================= */}

<section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">

  <div className="absolute -top-20 left-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-4 md:px-8">

    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
        Placement Assistance
      </h2>

      <p className="text-slate-600">
        Complete support until you're interview ready.
      </p>

    </div>

    <div className="grid md:grid-cols-5 gap-6">

      <PlacementCard title="Resume Building" />
      <PlacementCard title="LinkedIn Profile" />
      <PlacementCard title="Mock Interviews" />
      <PlacementCard title="HR Preparation" />
      <PlacementCard title="Career Guidance" />

    </div>

  </div>

</section>

{/* ================= MOCK TRAINING ================= */}

<section className="relative py-24 overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900" />

  <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-white">

    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Mock Interview Training
      </h2>

      <p className="text-white/80">
        Practice under pressure before real interviews.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <DarkCard
        icon="⚡"
        title="Daily Rapid Mocks"
        text="Quick confidence-building interview rounds."
      />

      <DarkCard
        icon="🔥"
        title="Weekly Power Mocks"
        text="High-pressure interview simulations."
      />

      <DarkCard
        icon="🏆"
        title="Final Evaluation"
        text="Comprehensive interview assessment."
      />

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">

  <div className="max-w-3xl mx-auto px-4">

    <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
      Ready To Start Your Career?
    </h2>

    <p className="text-white/90 text-lg mb-10">
      Learn. Build. Practice. Get Hired.
    </p>

    <Link
      to="/contact"
      className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
    >
      Enroll Now
    </Link>

  </div>

</section>


    </div>
  );
}

function HeroStat({ value, label }) {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center">
      <h3 className="text-4xl font-extrabold text-white">{value}</h3>
      <p className="text-white/80 mt-2">{label}</p>
    </div>
  );
}

function CourseCard({ title, duration, fee, featured }) {
  return (
    <div className={`rounded-2xl p-8 shadow-xl border hover:-translate-y-2 transition ${
      featured
        ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-transparent"
        : "bg-white/80 backdrop-blur border-white/40"
    }`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="mb-2">Duration: {duration}</p>
      <p className="font-bold text-lg mb-6">{fee}</p>

      <button className="w-full py-3 rounded-xl bg-white text-indigo-700 font-semibold">
        View Details
      </button>
    </div>
  );
}

function TechCard({ icon, title }) {
  return (
    <div className="bg-white/80 backdrop-blur border border-white/40 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition">
      <div className="text-4xl text-indigo-600 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-800">{title}</h3>
    </div>
  );
}

function FeatureCard({ emoji, title, text }) {
  return (
    <div className="bg-white/70 backdrop-blur border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="font-bold text-xl mb-3 text-slate-800">
        {title}
      </h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function PlacementCard({ title }) {
  return (
    <div className="bg-white/70 backdrop-blur border border-white/40 rounded-2xl p-6 text-center shadow-lg hover:-translate-y-2 transition">
      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>
    </div>
  );
}

function DarkCard({ icon, title, text }) {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-3">
        {title}
      </h3>
      <p className="text-white/80">{text}</p>
    </div>
  );
}


