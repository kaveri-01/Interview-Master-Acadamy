
import { Link } from "react-router-dom";
import {
  FaCloud,
  FaUsers,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";

import salesforceHero from "../assets/courses/salesforce-hero.png";

export default function Salesforce() {
  return (
    <div className="overflow-hidden py-12 bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-8">
                Salesforce Development Program
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">

                Become a

                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                  Salesforce
                </span>

                Professional

              </h1>

              <p className="text-slate-600 text-xl mb-10 max-w-xl">
                Learn Salesforce Administration, Apex Development,
                SOQL, Lightning Components and CRM solutions through
                real-world business projects.
              </p>

              <div className="flex gap-4 mb-10">

                <div className="bg-white rounded-2xl shadow-lg p-5">
                  <p className="text-slate-500 text-sm">Duration</p>
                  <h3 className="text-2xl font-bold">1 Month</h3>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-5">
                  <p className="text-slate-500 text-sm">Fee</p>
                  <h3 className="text-2xl font-bold">₹10,000</h3>
                </div>

              </div>

              <div className="flex gap-4">

                <Link
                  to="/admissionform"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Enroll Now
                </Link>

                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition">
                  Contact Us
                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">

                <div className="flex justify-between items-center mb-8">

                  <h3 className="font-bold text-xl text-slate-900">
                    CRM Dashboard
                  </h3>

                  <span className="text-emerald-500 text-sm font-medium">
                    Active
                  </span>

                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">

                  <CRMStat
                    icon={<FaUsers />}
                    value="2,450"
                    title="Customers"
                  />

                  <CRMStat
                    icon={<FaChartLine />}
                    value="89%"
                    title="Sales Growth"
                  />

                  <CRMStat
                    icon={<FaDatabase />}
                    value="15K"
                    title="Records"
                  />

                  <CRMStat
                    icon={<FaCloud />}
                    value="99.9%"
                    title="Uptime"
                  />

                </div>

                <img
                  src={salesforceHero}
                  alt="Salesforce"
                  className="w-full rounded-2xl"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

     
      {/* ================= SALESFORCE ECOSYSTEM ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-20">

            <span className="text-blue-600 uppercase tracking-widest text-sm">
              Salesforce Platform
            </span>

            <h2 className="text-5xl font-extrabold text-slate-900 mt-4">
              Salesforce Ecosystem
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <CloudCard
              title="Sales Cloud"
              description="Manage leads, opportunities and sales pipelines."
            />

            <CloudCard
              title="Service Cloud"
              description="Deliver exceptional customer support experiences."
            />

            <CloudCard
              title="Marketing Cloud"
              description="Create and automate marketing campaigns."
            />

            <CloudCard
              title="Experience Cloud"
              description="Build portals and digital customer experiences."
            />

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-20">

            <span className="text-blue-600 uppercase tracking-widest text-sm">
              Learning Path
            </span>

            <h2 className="text-5xl font-extrabold text-slate-900 mt-4">
              Skills You'll Learn
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

            <SkillCard title="Salesforce Admin" />
            <SkillCard title="Apex" />
            <SkillCard title="SOQL" />
            <SkillCard title="Lightning Components" />
            <SkillCard title="Flows" />
            <SkillCard title="Reports & Dashboards" />

          </div>

        </div>

      </section>

      {/* ================= LEARNING JOURNEY ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-20">

            <span className="text-blue-600 uppercase tracking-widest text-sm">
              Roadmap
            </span>

            <h2 className="text-5xl font-extrabold text-slate-900 mt-4">
              Learning Journey
            </h2>

          </div>

          <div className="space-y-6">

            <JourneyCard
              week="Week 1"
              title="CRM Fundamentals"
            />

            <JourneyCard
              week="Week 2"
              title="Salesforce Administration"
            />

            <JourneyCard
              week="Week 3"
              title="Apex & Development"
            />

            <JourneyCard
              week="Week 4"
              title="Projects & Deployment"
            />

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-20">

            <span className="text-blue-600 uppercase tracking-widest text-sm">
              Real Projects
            </span>

            <h2 className="text-5xl font-extrabold text-slate-900 mt-4">
              Projects You'll Build
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <CRMProjectCard
              title="Lead Management System"
            />

            <CRMProjectCard
              title="Customer Support Portal"
            />

            <CRMProjectCard
              title="Sales Tracking Dashboard"
            />

          </div>

        </div>

      </section>
     
      {/* ================= CAREER OPPORTUNITIES ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-20">

            <span className="text-blue-600 uppercase tracking-widest text-sm">
              Career Opportunities
            </span>

            <h2 className="text-5xl font-extrabold text-slate-900 mt-4">
              Career Paths
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <CareerCard title="Salesforce Administrator" />
            <CareerCard title="Salesforce Developer" />
            <CareerCard title="CRM Consultant" />
            <CareerCard title="Salesforce Analyst" />

          </div>

        </div>

      </section>

      {/* ================= INDUSTRY DEMAND ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-20">

            <span className="text-blue-600 uppercase tracking-widest text-sm">
              Market Demand
            </span>

            <h2 className="text-5xl font-extrabold text-slate-900 mt-4">
              Industry Demand
            </h2>

          </div>

          <div className="space-y-8">

            <DemandBar
              title="Salesforce Skills"
              percentage="95%"
              width="95%"
            />

            <DemandBar
              title="CRM Platforms"
              percentage="90%"
              width="90%"
            />

            <DemandBar
              title="Cloud Computing"
              percentage="88%"
              width="88%"
            />

            <DemandBar
              title="Apex Development"
              percentage="85%"
              width="85%"
            />

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

        <div className="max-w-5xl mx-auto px-4">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">

            <h2 className="text-5xl font-extrabold mb-6">
              Launch Your Salesforce Career
            </h2>

            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
              Learn CRM solutions, Salesforce Administration,
              Apex Development and enterprise cloud technologies.
            </p>

            <Link
              to="/admissionform"
              className="inline-flex bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
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

function CRMStat({ icon, value, title }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-4 text-center">

      <div className="text-blue-600 text-3xl flex justify-center mb-3">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="text-slate-500 text-sm">
        {title}
      </p>

    </div>
  );
}

function CloudCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">

      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5">
        ☁️
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3">
        {title}
      </h3>

      <p className="text-slate-600">
        {description}
      </p>

    </div>
  );
}

function SkillCard({ title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-1 transition">

      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

    </div>
  );
}

function JourneyCard({ week, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">

      <p className="text-blue-600 font-semibold mb-2">
        {week}
      </p>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

    </div>
  );
}

function CRMProjectCard({ title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-6xl">
        📊
      </div>

      <div className="p-6">

        <h3 className="text-xl font-bold text-slate-900">
          {title}
        </h3>

      </div>

    </div>
  );
}

function CareerCard({ title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

    </div>
  );
}

function DemandBar({ title, percentage, width }) {
  return (
    <div>

      <div className="flex justify-between mb-3">

        <span className="font-medium text-slate-700">
          {title}
        </span>

        <span className="font-semibold text-blue-600">
          {percentage}
        </span>

      </div>

      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
          style={{ width }}
        />

      </div>

    </div>
  );
}

