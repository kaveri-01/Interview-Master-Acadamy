
import { Link } from "react-router-dom";
import {
  FaBug,
  FaClipboardCheck,
  FaTasks,
  FaSearch,
} from "react-icons/fa";

import qaHero from "../assets/courses/qa-manual-hero.png";
import bugImg from "../assets/courses/bug-reporting.jpg";
import testingImg from "../assets/courses/testing-process.jpg";

export default function QAManual() {
  return (
    <div className="overflow-hidden bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium mb-6">
                QA Manual Testing Program
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Become a
                <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text">
                  QA Tester
                </span>
              </h1>

              <p className="text-slate-600 text-lg md:text-xl mb-8 max-w-xl">
                Learn software testing, bug reporting, test cases,
                SDLC, STLC and industry testing practices through
                practical projects.
              </p>

              <div className="flex gap-4 mb-10">

                <div className="bg-white rounded-2xl shadow-lg px-6 py-4">
                  <p className="text-slate-500 text-sm">Duration</p>
                  <h3 className="font-bold text-xl">1 Month</h3>
                </div>

                <div className="bg-white rounded-2xl shadow-lg px-6 py-4">
                  <p className="text-slate-500 text-sm">Course Fee</p>
                  <h3 className="font-bold text-xl">₹10,000</h3>
                </div>

              </div>

              <div className="flex gap-4">

                <Link
                  to="/contact"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition"
                >
                  Enroll Now
                </Link>

                <a
                  href="https://wa.me/918888704897"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition"
                >
                  WhatsApp Us
                </a>

              </div>

            </div>

            <div>
              <img
                src={qaHero}
                alt="QA Manual Testing"
                className="w-full"
              />
            </div>

          </div>

        </div>
      </section>
      
      {/* ================= WHAT IS MANUAL TESTING ================= */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <img
                src={testingImg}
                alt="Manual Testing"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>

            <div>

              <span className="text-emerald-600 font-semibold uppercase tracking-wider">
                About Testing
              </span>

              <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-6">
                What is Manual Testing?
              </h2>

              <p className="text-slate-600 text-lg mb-5">
                Manual Testing is the process of checking software
                applications manually to identify defects, usability
                issues and functional problems before the product
                reaches end users.
              </p>

              <p className="text-slate-600 text-lg">
                QA professionals ensure software quality by creating
                test cases, executing test scenarios, reporting bugs
                and validating fixes across multiple environments.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= TESTING LIFECYCLE ================= */}

      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Software Testing Lifecycle
            </h2>

            <p className="text-slate-600">
              Learn the complete testing process followed by QA teams.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <LifecycleCard
              number="01"
              title="Requirement Analysis"
              text="Understand project requirements and testing scope."
            />

            <LifecycleCard
              number="02"
              title="Test Planning"
              text="Define strategy, resources and timelines."
            />

            <LifecycleCard
              number="03"
              title="Test Case Design"
              text="Create detailed test cases and scenarios."
            />

            <LifecycleCard
              number="04"
              title="Test Execution"
              text="Execute test cases and record outcomes."
            />

            <LifecycleCard
              number="05"
              title="Bug Reporting"
              text="Identify, track and report defects."
            />

            <LifecycleCard
              number="06"
              title="Retesting & Regression"
              text="Verify fixes and ensure stability."
            />

          </div>

        </div>

      </section>

      {/* ================= TOOLS ================= */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-extrabold text-slate-900">
              Tools You'll Learn
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <ToolCard
              icon={<FaBug />}
              title="Bug Reporting"
            />

            <ToolCard
              icon={<FaTasks />}
              title="JIRA"
            />

            <ToolCard
              icon={<FaClipboardCheck />}
              title="Test Cases"
            />

            <ToolCard
              icon={<FaSearch />}
              title="Postman"
            />

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-extrabold text-slate-900">
              Real Testing Projects
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <ProjectCard
              image={bugImg}
              title="E-Commerce Testing"
            />

            <ProjectCard
              image={testingImg}
              title="Banking Application Testing"
            />

            <ProjectCard
              image={bugImg}
              title="Bug Tracking Project"
            />

          </div>

        </div>

      </section>

      {/* ================= SKILLS COVERED ================= */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-extrabold text-slate-900">
              Skills Covered
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <SkillCard title="SDLC" />
            <SkillCard title="STLC" />
            <SkillCard title="Test Cases" />
            <SkillCard title="Bug Reporting" />
            <SkillCard title="Regression Testing" />
            <SkillCard title="Smoke Testing" />
            <SkillCard title="Sanity Testing" />
            <SkillCard title="API Testing Basics" />

          </div>

        </div>

      </section>
      
      {/* ================= CAREER OPPORTUNITIES ================= */}

      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Career Opportunities
            </h2>

            <p className="text-slate-600">
              Start your career in Software Quality Assurance.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <CareerCard title="QA Tester" />
            <CareerCard title="Manual Tester" />
            <CareerCard title="Quality Analyst" />
            <CareerCard title="Software Test Engineer" />

          </div>

        </div>

      </section>

      {/* ================= PLACEMENT SUPPORT ================= */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-extrabold text-slate-900">
              Placement Support
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <SupportCard title="Resume Building" />
            <SupportCard title="Mock Interviews" />
            <SupportCard title="Interview Preparation" />
            <SupportCard title="Job Assistance" />

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-16 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-center">

        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Start Your QA Testing Journey Today
          </h2>

          <p className="text-white/90 text-lg mb-8">
            Learn industry-standard testing practices and become job-ready.
          </p>

          <Link
            to="/contact"
            className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
          >
            Enroll Now
          </Link>

        </div>

      </section>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function LifecycleCard({ number, title, text }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">

      <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold mb-4">
        {number}
      </div>

      <h3 className="font-bold text-xl mb-3">
        {title}
      </h3>

      <p className="text-slate-600">
        {text}
      </p>

    </div>
  );
}

function ToolCard({ icon, title }) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-lg">

      <div className="text-4xl text-emerald-600 flex justify-center mb-4">
        {icon}
      </div>

      <h3 className="font-semibold">
        {title}
      </h3>

    </div>
  );
}

function ProjectCard({ image, title }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">

      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h3 className="font-bold text-xl">
          {title}
        </h3>

      </div>

    </div>
  );
}

function SkillCard({ title }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:-translate-y-1 transition">

      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

    </div>
  );
}

function CareerCard({ title }) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-lg">

      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

    </div>
  );
}

function SupportCard({ title }) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-lg">

      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

    </div>
  );
}





   