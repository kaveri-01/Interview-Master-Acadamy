
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiRedis,
} from "react-icons/si";

import heroImg from "../assets/courses/fullstack-hero.png";
import codingTeam from "../assets/courses/coding-team.jpg";
import mernImg from "../assets/courses/mern-stack.png";

export default function FullStack() {
  return (
    <div className="overflow-hidden bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-cyan-200 via-white to-indigo-200">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-medium mb-6">
                Full Stack Development Program
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Become a
                <span className="block text-transparent bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text">
                  Full Stack Developer
                </span>
              </h1>

              <p className="text-slate-600 text-lg md:text-xl mb-8 max-w-xl">
                Learn Frontend, Backend, Databases, APIs, Deployment,
                Docker, Redis and modern development workflows through
                real-world projects.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white rounded-2xl shadow-lg px-6 py-4">
                  <p className="text-slate-500 text-sm">Duration</p>
                  <h3 className="font-bold text-xl">3 Months</h3>
                </div>

                <div className="bg-white rounded-2xl shadow-lg px-6 py-4">
                  <p className="text-slate-500 text-sm">Course Fee</p>
                  <h3 className="font-bold text-xl">₹20,000</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/admissionform"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
                >
                  Enroll Now
                </Link>

                <a
                  href="https://wa.me/918888704897"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div>
              <img
                src={heroImg}
                alt="Full Stack Development"
                className="w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY FULL STACK ================= */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Why Learn Full Stack Development?
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto">
              Full Stack Developers can build complete applications from
              frontend interfaces to backend systems and deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <InfoCard
              icon={<FaLaptopCode />}
              title="Frontend + Backend"
            />

            <InfoCard
              icon={<FaServer />}
              title="Build Complete Applications"
            />

            <InfoCard
              icon={<FaGithub />}
              title="Industry Workflow"
            />

            <InfoCard
              icon={<FaDocker />}
              title="Deployment Skills"
            />

          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold">
              Technologies You'll Master
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

            <TechCard icon={<FaReact />} title="React" />
            <TechCard icon={<SiRedux />} title="Redux" />
            <TechCard icon={<FaNodeJs />} title="Node.js" />
            <TechCard icon={<SiExpress />} title="Express" />
            <TechCard icon={<SiMongodb />} title="MongoDB" />
            <TechCard icon={<SiRedis />} title="Redis" />
            <TechCard icon={<FaDocker />} title="Docker" />

            <TechCard icon="🔐" title="JWT Auth" />
            <TechCard icon="☁️" title="Deployment" />
            <TechCard icon="⚙️" title="CI/CD" />
            <TechCard icon="🧪" title="Testing" />
            <TechCard icon="📦" title="Git & GitHub" />

          </div>
        </div>
      </section>

      {/* ================= LEARNING JOURNEY ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-center text-4xl font-extrabold mb-16">
            Your Learning Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <JourneyCard
              month="Month 1"
              topics={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
              ]}
            />

            <JourneyCard
              month="Month 2"
              topics={[
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "JWT",
              ]}
            />

            <JourneyCard
              month="Month 3"
              topics={[
                "Docker",
                "Redis",
                "Testing",
                "CI/CD",
                "Deployment",
              ]}
            />

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold">
              Projects You'll Build
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <ProjectCard
              image={codingTeam}
              title="E-Commerce Website"
            />

            <ProjectCard
              image={mernImg}
              title="Real-Time Chat App"
            />

            <ProjectCard
              image={codingTeam}
              title="Admin Dashboard"
            />

          </div>

        </div>
      </section>

      {/* ================= CAREERS ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-center text-4xl font-extrabold mb-14">
            Career Opportunities
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <CareerCard title="Frontend Developer" />
            <CareerCard title="Backend Developer" />
            <CareerCard title="Full Stack Developer" />
            <CareerCard title="MERN Developer" />

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-24 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Start Your Full Stack Journey Today
        </h2>

        <Link
          to="/admissionform"
          className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold"
        >
          Enroll Now
        </Link>

      </section>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function InfoCard({ icon, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <div className="text-4xl text-indigo-600 flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold">{title}</h3>
    </div>
  );
}

function TechCard({ icon, title }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 text-center shadow">
      <div className="text-4xl text-indigo-600 flex justify-center mb-3">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

function JourneyCard({ month, topics }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="font-bold text-2xl text-indigo-600 mb-4">
        {month}
      </h3>

      <ul className="space-y-2">
        {topics.map((topic) => (
          <li key={topic}>✔ {topic}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ image, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
    </div>
  );
}

function CareerCard({ title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

