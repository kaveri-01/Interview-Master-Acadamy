import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaBug,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiSelenium,
  SiJira,
  SiSalesforce,
} from "react-icons/si";
import { useEffect, useState } from "react";

export default function Home() {
  const courses = [
    "Full Stack Development",
    "Frontend ",
    "Backend ",
    "QA Manual Testing",
    "QA Automation Testing",
    "Salesforce Development",
  ];

  const [currentCourse, setCurrentCourse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCourse((prev) => (prev + 1) % courses.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="overflow-hidden">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 text-bold rounded-full blur-3xl" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}

            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-6">
                🚀 Development • QA • Salesforce Training
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Become a
                <span className="block bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Job-Ready
                </span>
                Tech Professional
              </h1>

              <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10">
                Learn Development, Testing and Salesforce technologies through
                live classes, real projects, mock interviews and placement
                support.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/admissionform"
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

            {/* RIGHT SIDE */}

            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>

                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-2xl">
                  <p className="uppercase tracking-[0.3em] text-white/70 text-bold text-m mb-6">
                    COURSES WE OFFER
                  </p>

                  <div className="h-32 flex items-center justify-center">
                    <h2
                      key={currentCourse}
                      className="text-4xl md:text-5xl font-extrabold text-white animate-pulse"
                    >
                      {courses[currentCourse]}
                    </h2>
                  </div>

                  <div className="flex justify-center gap-2">
                    {courses.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          currentCourse === index
                            ? "w-8 bg-cyan-300"
                            : "w-2 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-200 text-s">
                      Development
                    </span>

                    <span className="px-3 py-1 rounded-full bg-purple-400/20 text-purple-200 text-s">
                      Testing
                    </span>

                    <span className="px-3 py-1 rounded-full bg-pink-400/20 text-pink-200 text-s">
                      Salesforce
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}

      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
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
              description="Learn HTML, CSS, JavaScript and React to build modern responsive websites."
            />
            <CourseCard
              title="Backend Development"
              duration="2 Months"
              fee="₹10,000"
              description="Learn Node.js, Express.js, MongoDB and REST API development."
            />
            <CourseCard
              title="Full Stack Development"
              duration="4 Months"
              fee="₹20,000"
              description="Frontend + Backend + Docker + Redis + CI/CD + Testing Frameworks."
              featured
            />
            <CourseCard
              title="QA Manual Testing"
              duration="2 Months"
              fee="₹10,000"
              description="Learn SDLC, STLC, Test Cases, JIRA and Bug Reporting."
            />
            <CourseCard
              title="QA Automation Testing"
              duration="3 Months"
              fee="₹15,000"
              description="Learn Selenium, Java, TestNG and Automation Frameworks."
            />
            <CourseCard
              title="Salesforce Development"
              duration="3 Months"
              fee="₹20,000"
              description="Learn Apex, Lightning Components and CRM Development."
            />
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}

      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-cyan-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technologies You'll Master
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {/* Development */}
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

            {/* QA */}
            <TechCard icon={<FaBug />} title="Manual Testing" />
            <TechCard icon={<SiSelenium />} title="Selenium" />
            <TechCard icon="🧪" title="TestNG" />
            <TechCard icon={<SiJira />} title="JIRA" />
            <TechCard icon="🔍" title="API Testing" />
            <TechCard icon="🤖" title="Automation" />

            {/* Salesforce */}
            <TechCard icon={<SiSalesforce />} title="Salesforce" />
            <TechCard icon="⚡" title="Apex" />
            <TechCard icon="☁️" title="Lightning" />
            <TechCard icon="🗄️" title="SOQL" />
            <TechCard icon="👥" title="CRM" />
            <TechCard icon="🔄" title="Flows" />
          </div>
        </div>
      </section>

      {/* ================= INTERNSHIP ================= */}

      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-amber-50">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-rose-300/30 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
              Why Choose Interview Mastery Academy
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto">
              Industry-focused training programs designed to make you job-ready.
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

      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-emerald-50">
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

      <section className="relative py-16 overflow-hidden">
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

      <section className="py-24  bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready To Start Your Career?
          </h2>

          <p className="text-white/90 text-lg mb-10">
            Learn. Build. Practice. Get Hired.
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

function HeroStat({ value, label }) {
  return (
    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center">
      <h3 className="text-4xl font-extrabold text-white">{value}</h3>
      <p className="text-white/80 mt-2">{label}</p>
    </div>
  );
}

function CourseCard({ title, duration, fee, description, featured }) {
  return (
    <div
      className={`rounded-2xl p-8 shadow-xl border hover:-translate-y-2 transition ${
        featured
          ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-transparent"
          : "bg-white/80 backdrop-blur border-white/40"
      }`}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="mb-2">Duration: {duration}</p>
      <p className="font-bold text-lg mb-6">{fee}</p>

      <p
        className={`text-sm mb-6 ${
          featured ? "text-white/90" : "text-slate-600"
        }`}
      >
        {description}
      </p>

      <button className="w-full py-3 rounded-xl bg-white text-indigo-700 font-semibold">
        View Details
      </button>
    </div>
  );
}

function TechCard({ icon, title }) {
  return (
    <div className="bg-white/80 backdrop-blur border border-white/40 rounded-2xl p-5 text-center shadow-lg hover:-translate-y-1 transition min-h-[110px] flex flex-col justify-center">
      {icon && (
        <div className="text-3xl text-indigo-600 mb-2 flex justify-center">
          {icon}
        </div>
      )}

      <h3 className="font-semibold text-slate-800 text-sm leading-tight">
        {title}
      </h3>
    </div>
  );
}

function FeatureCard({ emoji, title, text }) {
  return (
    <div className="bg-white/70 backdrop-blur border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="font-bold text-xl mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function PlacementCard({ title }) {
  return (
    <div className="bg-white/70 backdrop-blur border border-white/40 rounded-2xl p-6 text-center shadow-lg hover:-translate-y-2 transition">
      <h3 className="font-semibold text-slate-800">{title}</h3>
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
