
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaLock,
} from "react-icons/fa";

export default function Backend() {
  const curriculum = [
    {
      week: "Week 1",
      topics: [
        "Node.js Basics",
        "Modules",
        "NPM",
        "File System",
      ],
    },
    {
      week: "Week 2",
      topics: [
        "Express.js",
        "Routing",
        "Middleware",
        "Error Handling",
      ],
    },
    {
      week: "Week 3",
      topics: [
        "MongoDB",
        "Mongoose",
        "CRUD Operations",
        "Relationships",
      ],
    },
    {
      week: "Week 4-8",
      topics: [
        "REST APIs",
        "JWT Authentication",
        "Role Based Access",
        "Deployment",
      ],
    },
  ];

  const projects = [
    "Authentication System",
    "Blog API",
    "Task Manager API",
    "E-Commerce Backend",
    "Job Portal API",
  ];

  return (
    <div className="pt-20 bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <section className="relative py-24 overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-green-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-4 text-center relative">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
              Backend Development Course
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-8">
              Backend
              <span className="block text-green-400">
                Development
              </span>
            </h1>

            <p className="text-slate-300 max-w-2xl mx-auto mt-6 text-lg">
              Master Node.js, Express.js, MongoDB and REST APIs
              to build scalable backend applications.
            </p>

            <div className="flex justify-center gap-6 mt-10 flex-wrap">

              <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl">
                Duration: 2 Months
              </div>

              <div className="bg-green-600 px-6 py-4 rounded-xl">
                ₹10,000
              </div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Technologies Covered
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <TechCard
              icon={<FaNodeJs />}
              title="Node.js"
            />

            <TechCard
              icon={<FaServer />}
              title="Express.js"
            />

            <TechCard
              icon={<FaDatabase />}
              title="MongoDB"
            />

            <TechCard
              icon={<FaLock />}
              title="JWT Auth"
            />

          </div>

        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Course Curriculum
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {curriculum.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  {item.week}
                </h3>

                <ul className="space-y-2">

                  {item.topics.map((topic) => (
                    <li key={topic}>
                      ✔ {topic}
                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Projects You'll Build
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {projects.map((project) => (
              <div
                key={project}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                {project}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-12">
            What You'll Get
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            <BenefitCard title="Live Classes" />
            <BenefitCard title="Assignments" />
            <BenefitCard title="Projects" />
            <BenefitCard title="Interview Prep" />
            <BenefitCard title="Certificate" />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Become a Backend Developer
        </h2>

        <p className="text-slate-400 mb-8">
          Start building powerful APIs and scalable applications.
        </p>

        <Link
          to="/contact"
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold transition"
        >
          Enroll Now
        </Link>

      </section>

    </div>
  );
}

function TechCard({ icon, title }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
      <div className="text-4xl text-green-400 mb-4">
        {icon}
      </div>
      <h3>{title}</h3>
    </div>
  );
}

function BenefitCard({ title }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      {title}
    </div>
  );
}

