import { Link } from "react-router-dom";
import { FaRobot, FaCode, FaBug, FaGithub } from "react-icons/fa";

import automationHero from "../assets/courses/automation-hero.png";

export default function QAAutomation() {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}

            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-8">
                QA Automation Program
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                Become an
                <span className="block text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">
                  Automation
                </span>
                Test Engineer
              </h1>

              <p className="text-slate-400 text-xl mb-10 max-w-xl">
                Learn Selenium, TestNG, Java, API Testing, Framework Design and
                CI/CD pipelines through real automation projects.
              </p>

              <div className="flex gap-4 mb-10">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                  <p className="text-slate-500 text-sm">Duration</p>

                  <h3 className="text-2xl font-bold">1 Month</h3>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                  <p className="text-slate-500 text-sm">Fee</p>

                  <h3 className="text-2xl font-bold">₹10,000</h3>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/admissionform"
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Enroll Now
                </Link>

                <button className="border border-slate-700 px-8 py-4 rounded-xl hover:bg-slate-900 transition">
                  View Curriculum
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="relative">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-xl">Automation Dashboard</h3>

                  <span className="text-emerald-400 text-sm">Running</span>
                </div>

                <div className="space-y-5">
                  <DashboardRow
                    title="Selenium Tests"
                    value="128 Passed"
                    color="bg-emerald-500"
                  />

                  <DashboardRow
                    title="API Tests"
                    value="42 Passed"
                    color="bg-orange-500"
                  />

                  <DashboardRow
                    title="Regression Suite"
                    value="98%"
                    color="bg-cyan-500"
                  />

                  <DashboardRow
                    title="CI/CD Pipeline"
                    value="Success"
                    color="bg-purple-500"
                  />
                </div>

                <img
                  src={automationHero}
                  alt="Automation"
                  className="w-full mt-8 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-22 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <span className="text-orange-400 uppercase tracking-widest text-sm">
              Automation Process
            </span>

            <h2 className="text-5xl font-extrabold mt-4">
              Automation Workflow
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <WorkflowCard step="01" title="Test Cases" />

            <WorkflowCard step="02" title="Selenium Scripts" />

            <WorkflowCard step="03" title="TestNG Execution" />

            <WorkflowCard step="04" title="Reports" />

            <WorkflowCard step="05" title="CI/CD Pipeline" />
          </div>
        </div>
      </section>
      {/* ================= TOOLS ================= */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <span className="text-orange-400 uppercase tracking-widest text-sm">
              Technologies
            </span>

            <h2 className="text-5xl font-extrabold mt-4">
              Tools You'll Master
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ToolCard icon={<FaBug />} title="Selenium" />

            <ToolCard icon={<FaCode />} title="Java" />

            <ToolCard icon={<FaRobot />} title="TestNG" />

            <ToolCard icon={<FaGithub />} title="GitHub" />

            <ToolCard icon="📡" title="Postman" />

            <ToolCard icon="⚙️" title="Maven" />

            <ToolCard icon="🚀" title="CI/CD" />

            <ToolCard icon="📊" title="Reports" />
          </div>
        </div>
      </section>
      {/* ================= FRAMEWORK ARCHITECTURE ================= */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-orange-400 uppercase tracking-widest text-sm">
              Framework Design
            </span>

            <h2 className="text-5xl font-extrabold mt-4">
              Automation Framework Architecture
            </h2>
          </div>

          <div className="space-y-6">
            <FrameworkBox title="Test Scripts" />
            <FrameworkArrow />
            <FrameworkBox title="Page Objects" />
            <FrameworkArrow />
            <FrameworkBox title="Utilities" />
            <FrameworkArrow />
            <FrameworkBox title="Reports" />
          </div>
        </div>
      </section>
      {/* ================= PROJECTS ================= */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <span className="text-orange-400 uppercase tracking-widest text-sm">
              Practical Learning
            </span>

            <h2 className="text-5xl font-extrabold mt-4">
              Automation Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Automation"
              description="Automate product search, cart and checkout flow."
            />

            <ProjectCard
              title="Banking Login Automation"
              description="Automate secure login and transaction validation."
            />

            <ProjectCard
              title="Framework Design Project"
              description="Build a scalable automation framework from scratch."
            />
          </div>
        </div>
      </section>
      ```jsx
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-orange-400 uppercase tracking-widest text-sm">
              Career Growth
            </span>

            <h2 className="text-5xl font-extrabold mt-4">Career Roadmap</h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <RoadmapCard title="QA Trainee" />
            <RoadmapArrow />
            <RoadmapCard title="Automation Tester" />
            <RoadmapArrow />
            <RoadmapCard title="QA Engineer" />
            <RoadmapArrow />
            <RoadmapCard title="SDET" />
          </div>
        </div>
      </section>
      {/* ================= INDUSTRY DEMAND ================= */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-orange-400 uppercase tracking-widest text-sm">
              Market Demand
            </span>

            <h2 className="text-5xl font-extrabold mt-4">Industry Demand</h2>
          </div>

          <div className="space-y-8">
            <ProgressBar
              title="Automation Testing"
              percentage="95%"
              width="95%"
            />

            <ProgressBar title="Selenium" percentage="90%" width="90%" />

            <ProgressBar title="API Testing" percentage="85%" width="85%" />

            <ProgressBar title="CI/CD" percentage="80%" width="80%" />
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-5xl font-extrabold mb-6">
              Ready to Automate Software Testing?
            </h2>

            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Learn Selenium, Framework Design, API Testing and CI/CD pipelines
              with hands-on automation projects.
            </p>

            <Link
              to="/admissionform"
              className="inline-flex bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function DashboardRow({ title, value, color }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{title}</span>
        <span>{value}</span>
      </div>

      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div className={`h-full ${color} w-[85%]`} />
      </div>
    </div>
  );
}

function WorkflowCard({ step, title }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
      <div className="text-orange-400 text-3xl font-bold mb-3">{step}</div>

      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

function ToolCard({ icon, title }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-orange-500 transition">
      <div className="text-4xl text-orange-400 flex justify-center mb-4">
        {icon}
      </div>

      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

function FrameworkBox({ title }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-xl font-semibold">
      {title}
    </div>
  );
}

function FrameworkArrow() {
  return <div className="text-center text-orange-400 text-3xl">↓</div>;
}

function ProjectCard({ title, description }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <p className="text-slate-400">{description}</p>
    </div>
  );
}

function RoadmapCard({ title }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-xl font-semibold">
      {title}
    </div>
  );
}

function RoadmapArrow() {
  return <div className="text-center text-orange-400 text-3xl">↓</div>;
}

function ProgressBar({ title, percentage, width }) {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <span>{title}</span>
        <span>{percentage}</span>
      </div>

      <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
          style={{ width }}
        />
      </div>
    </div>
  );
}
