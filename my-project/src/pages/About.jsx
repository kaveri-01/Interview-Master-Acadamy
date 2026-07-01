import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="pt-20 overflow-hidden">
      {/* ================= HERO ================= */}

      <section className="py-28 bg-gradient-to-br from-indigo-700 via-fuchsia-600 to-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4">
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            About Interview Master Academy
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Building Future
            <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mt-4">
              Developers, Test Engineers & Salesforce Professionals
            </span>
          </h1>

          <p className="text-white/90 text-lg max-w-4xl mx-auto">
            We help students and professionals build successful careers through
            industry-focused training, real-world projects, mock interviews and
            placement assistance.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                Who We Are
              </h2>

              <p className="text-slate-600 text-lg mb-6">
                Interview Master Academy is a technology training institute
                dedicated to helping students and professionals build successful
                careers in the IT industry.
              </p>

              <p className="text-slate-600 text-lg mb-6">
                Our programs are designed around real industry requirements,
                practical implementation and project-based learning.
              </p>

              <p className="text-slate-600 text-lg">
                We focus on building technical skills, confidence, communication
                abilities and interview readiness so students can confidently
                enter the industry.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">
                What Makes Us Different?
              </h3>

              <div className="space-y-4">
                <p>✅ Industry-Oriented Curriculum</p>

                <p>✅ Real Projects & Assignments</p>

                <p>✅ Mock Interviews</p>

                <p>✅ Placement Assistance</p>

                <p>✅ Career Guidance & Mentorship</p>

                <p>✅ Small Batch Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE TEACH ================= */}

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10
          [background-image:linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
          [background-size:40px_40px]"
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              What We Teach
            </h2>

            <p className="text-slate-400 max-w-3xl mx-auto">
              Explore our industry-focused training programs designed to help
              students become job-ready professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard
              gradient="from-indigo-500 to-purple-600"
              title="Full Stack Development"
            />

            <CourseCard
              gradient="from-cyan-500 to-blue-600"
              title="Frontend Development"
            />

            <CourseCard
              gradient="from-pink-500 to-red-500"
              title="Backend Development"
            />

            <CourseCard
              gradient="from-emerald-500 to-green-600"
              title="QA Manual Testing"
            />

            <CourseCard
              gradient="from-orange-500 to-red-500"
              title="QA Automation Testing"
            />

            <CourseCard
              gradient="from-blue-500 to-cyan-500"
              title="Salesforce Development"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Why Choose Us
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto">
              We focus on practical learning, industry exposure and career
              transformation rather than just theoretical education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Live Instructor Training"
              text="Interactive sessions led by experienced trainers."
            />

            <FeatureCard
              title="Real Projects"
              text="Work on projects that simulate real industry environments."
            />

            <FeatureCard
              title="Small Batch Sizes"
              text="Personal attention and better learning outcomes."
            />

            <FeatureCard
              title="Mock Interviews"
              text="Prepare for technical and HR interviews confidently."
            />

            <FeatureCard
              title="Placement Support"
              text="Resume building, interview preparation and career guidance."
            />

            <FeatureCard
              title="Industry Mentorship"
              text="Learn directly from professionals and mentors."
            />
          </div>
        </div>
      </section>

      {/* ================= LEARNING METHODOLOGY ================= */}

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10
          [background-image:linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
          [background-size:40px_40px]"
        />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Our Learning Methodology
            </h2>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            <StepCard title="Learn" />
            <StepCard title="Practice" />
            <StepCard title="Build Projects" />
            <StepCard title="Mock Interviews" />
            <StepCard title="Placement Prep" />
            <StepCard title="Get Hired" />
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS OVERVIEW ================= */}

      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
              Programs Overview
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard title="Full Stack Development" duration="3 Months" />

            <ProgramCard title="Frontend Development" duration="2 Months" />

            <ProgramCard title="Backend Development" duration="1 Month" />

            <ProgramCard title="QA Manual Testing" duration="1 Month" />

            <ProgramCard title="QA Automation Testing" duration="1 Month" />

            <ProgramCard title="Salesforce Development" duration="1 Month" />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <StatCard value="6+" label="Programs" />
            <StatCard value="100%" label="Practical Learning" />
            <StatCard value="Live" label="Instructor Training" />
            <StatCard value="Career" label="Focused Learning" />
          </div>
        </div>
      </section>

      {/* ================= OUR VISION ================= */}

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10
          [background-image:linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
          [background-size:40px_40px]"
        />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Our Vision
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            To become a leading technology training academy that empowers
            students with practical skills, industry exposure and career
            opportunities.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed mt-6">
            Our mission is to bridge the gap between academic learning and
            real-world industry expectations through hands-on training and
            mentorship.
          </p>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}

      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-slate-900">
            Core Values
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            <ValueCard
              gradient="from-indigo-500 to-purple-600"
              title="Discipline"
            />

            <ValueCard gradient="from-pink-500 to-red-500" title="Confidence" />

            <ValueCard gradient="from-cyan-500 to-blue-600" title="Clarity" />

            <ValueCard
              gradient="from-yellow-400 to-orange-500"
              title="Growth"
            />

            <ValueCard
              gradient="from-emerald-500 to-green-600"
              title="Innovation"
            />

            <ValueCard
              gradient="from-violet-500 to-fuchsia-600"
              title="Excellence"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready To Start Your Tech Career?
          </h2>

          <p className="text-white/90 text-lg mb-10">
            Join Interview Master Academy and gain the skills, confidence and
            industry exposure needed to succeed.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition shadow-lg"
          >
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function CourseCard({ title, gradient }) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} text-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition duration-300`}
    >
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition">
      <h3 className="font-bold text-xl text-slate-900 mb-3">{title}</h3>

      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function StepCard({ title }) {
  return (
    <div className="bg-indigo-600 text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition">
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

function ProgramCard({ title, duration }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition">
      <h3 className="font-bold text-xl text-slate-900 mb-3">{title}</h3>

      <p className="text-indigo-600 font-semibold">{duration}</p>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-8 text-center shadow-xl">
      <h3 className="text-3xl font-bold mb-2">{value}</h3>

      <p>{label}</p>
    </div>
  );
}

function ValueCard({ title, gradient }) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} text-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition`}
    >
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
}
