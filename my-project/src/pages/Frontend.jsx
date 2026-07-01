import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

export default function Frontend() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden py-28 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-6">
                🚀 Frontend Development Course
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Frontend
                <span className="block bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10">
                Master HTML, CSS, JavaScript and React to build modern,
                responsive and professional websites. Our Frontend Development
                Program focuses on building strong fundamentals and
                industry-ready skills. Starting with HTML and CSS, you'll
                progress to JavaScript and React while working on real-world
                projects. The course emphasizes hands-on learning, responsive
                design, and modern development practices to prepare you for
                professional Frontend Development careers.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur border border-white/20 px-6 py-4 rounded-xl text-white">
                  Duration: 2 Months
                </div>

                <div className="bg-indigo-600 px-6 py-4 rounded-xl text-white font-semibold">
                  Fees: ₹20,000
                </div>
              </div>

              <Link
                to="/admissionform"
                className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
              >
                Enroll Now
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <StatCard value="HTML" />
              <StatCard value="CSS" />
              <StatCard value="JavaScript" />
              <StatCard value="React" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY LEARN FRONTEND ================= */}

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Learn Frontend Development?
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              Frontend developers build everything users see and interact with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="💻"
              title="Build Websites"
              text="Create beautiful responsive websites."
            />

            <FeatureCard
              icon="⚡"
              title="Interactive UI"
              text="Build modern user experiences."
            />

            <FeatureCard
              icon="📈"
              title="High Demand"
              text="Frontend developers are highly sought after."
            />

            <FeatureCard
              icon="🌍"
              title="Freelancing"
              text="Work with clients from around the world."
            />
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-cyan-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technologies Covered
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechCard icon={<FaHtml5 />} title="HTML5" />

            <TechCard icon={<FaCss3Alt />} title="CSS3" />

            <TechCard icon={<FaJs />} title="JavaScript" />

            <TechCard icon={<FaReact />} title="React" />
          </div>
        </div>
      </section>

      {/* ================= LEARNING JOURNEY ================= */}

      <section className="relative py-24 overflow-hidden bg-slate-950">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Learning Journey
            </h2>

            <p className="text-slate-400">
              Step-by-step roadmap to become a Frontend Developer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <JourneyCard
              week="Week 1"
              topics={["HTML5", "Semantic Tags", "Forms", "Tables"]}
            />

            <JourneyCard
              week="Week 2"
              topics={["CSS3", "Flexbox", "Grid", "Responsive Design"]}
            />

            <JourneyCard
              week="Week 3"
              topics={["JavaScript", "DOM", "ES6+", "APIs"]}
            />

            <JourneyCard
              week="Week 4-8"
              topics={["React", "Hooks", "Routing", "Projects"]}
            />
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects You'll Build
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <ProjectCard title="Portfolio Website" />
            <ProjectCard title="Netflix Clone" />
            <ProjectCard title="Weather App" />
            <ProjectCard title="Admin Dashboard" />
            <ProjectCard title="E-Commerce UI" />
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              What You'll Get
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="🎥"
              title="Live Classes"
              text="Interactive live sessions."
            />

            <FeatureCard
              icon="📝"
              title="Assignments"
              text="Practice after every class."
            />

            <FeatureCard
              icon="💻"
              title="Projects"
              text="Hands-on project building."
            />

            <FeatureCard
              icon="🏆"
              title="Certificate"
              text="Course completion certificate."
            />
          </div>
        </div>
      </section>

      {/* ================= CAREER OPPORTUNITIES ================= */}

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Career Opportunities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CareerCard title="Frontend Developer" />
            <CareerCard title="React Developer" />
            <CareerCard title="UI Developer" />
            <CareerCard title="Web Developer" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready To Become A Frontend Developer?
          </h2>

          <p className="text-white/90 text-lg mb-10">
            Start building modern websites today.
          </p>

          <Link
            to="/admissionform"
            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}
/* ================= EXTRA COMPONENTS ================= */

function JourneyCard({ week, topics }) {
  return (
    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-indigo-400 mb-4">{week}</h3>

      <ul className="space-y-2 text-slate-300">
        {topics.map((topic) => (
          <li key={topic}>✔ {topic}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title }) {
  return (
    <div className="bg-white/80 backdrop-blur border border-white/40 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition">
      <h3 className="font-semibold text-slate-800">{title}</h3>
    </div>
  );
}

function CareerCard({ title }) {
  return (
    <div className="bg-white/80 backdrop-blur border border-white/40 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition">
      <h3 className="font-semibold text-slate-800">{title}</h3>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ value }) {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center">
      <h3 className="text-3xl font-bold text-white">{value}</h3>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white/70 backdrop-blur border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="font-bold text-xl mb-3 text-slate-800">{title}</h3>

      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function TechCard({ icon, title }) {
  return (
    <div className="bg-white/80 backdrop-blur border border-white/40 rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition">
      <div className="text-5xl text-indigo-600 mb-4 flex justify-center">
        {icon}
      </div>

      <h3 className="font-semibold text-slate-800">{title}</h3>
    </div>
  );
}
