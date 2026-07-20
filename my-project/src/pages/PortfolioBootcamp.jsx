import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import axiosInstance from "../configs/axiosConfig";
import { toast } from "react-hot-toast";

export default function PortfolioBootcamp() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    college: "",
    qualification: "",
    background: "",
    portfolio: "",
    course: "",
    source: "",
    consent: false,
    title: "Portfolio Bootcamp",
    date: "26-07-2026",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, "name, value,");
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid mobile number";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.background) {
      newErrors.background = "Please select background";
    }

    if (!formData.portfolio) {
      newErrors.portfolio = "Please select an option";
    }

    if (!formData.course) {
      newErrors.course = "Please select course";
    }

    if (!formData.consent) {
      newErrors.consent = "Please accept terms";
    }
    if (!formData.qualification) {
      newErrors.qualification = "Please select qualification";
    }
    if (!/^[A-Za-z ]+$/.test(formData.name)) {
      newErrors.name = "Only alphabets allowed";
    }
    if (!/^[A-Za-z ]+$/.test(formData.city)) {
      newErrors.city = "Only alphabets allowed";
    }
    if (formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      validateForm();
      const response = await axiosInstance.post("/bootcamp/register", formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          city: "",
          college: "",
          qualification: "",
          background: "",
          portfolio: "",
          course: "",
          source: "",
          consent: false,
          title: "Portfolio Bootcamp",
          date: "26-07-2026",
        });
        setSubmitted(true);

        // setTimeout(() => {
        //   window.location.href = "/";
        // }, 3000);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const learnItems = [
    "Build a modern portfolio website",
    "Make it mobile responsive",
    "Upload code to GitHub",
    "Deploy it live on Vercel",
    "Add portfolio to Resume & LinkedIn",
    "Use AI tools to speed up development",
  ];

  const getItems = [
    "Certificate of Completion",
    "Live Portfolio Website",
    "GitHub Repository",
    "Source Code",
    "Workshop Recording",
    "Portfolio Template",
  ];

  return (
    <div className="min-h-screen" style={{ background: "#FDFDFD" }}>
      {/* HERO SECTION */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 ">
            {/* LEFT */}

            <div
              className="mt-2 p-8"
              style={{
                backgroundColor: "#B0E46A",
                borderRadius: "20px",
                height: "72%",
              }}
            >
              <div
                className="inline-block px-4 py-2  rounded-xl font-bold mb-6"
                style={{
                  background: "white",
                  color: "#0234B7",
                }}
              >
                FREE LIVE BOOTCAMP
              </div>

              <h1
                className="text-5xl md:text-7xl font-extrabold leading-tight"
                style={{ color: "#0234B7" }}
              >
                Build Your Portfolio &
                <div className="relative inline-block mt-2">
                  <div className="absolute inset-0 bg-white rounded-xl -skew-x-12"></div>
                  <span
                    className="relative px-6 py-3 text-6xl font-bold"
                    style={{ color: "#0234B7" }}
                  >
                    Deploy It Live in
                  </span>
                </div>
                <div className="relative inline-block mt-4">
                  <div className="absolute inset-0 bg-white rounded-xl -skew-x-12"></div>
                  <span
                    className="relative px-6 py-3 text-6xl font-bold"
                    style={{ color: "#0234B7" }}
                  >
                    1 Day
                  </span>
                </div>
              </h1>

              <p
                className="text-2xl font-semibold mt-8"
                // style={{ color: "#FDFDFD" }}
              >
                Build • Deploy • Get Certified
              </p>

              <p className="mt-6 text-lg max-w-xl" style={{ color: "#0234B7" }}>
                Learn how to create a professional portfolio website from
                scratch, upload it to GitHub and deploy it live on Vercel — all
                in one day.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                {[
                  "FREE Registration",
                  "Certificate Included",
                  "IT & Non-IT Students",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-5 py-3 rounded-2xl font-semibold"
                    style={{
                      background: "#0234B7",
                      color: "#FDFDFD",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}

            <div
              className="rounded-3xl p-8 shadow-2xl border mt-2"
              style={{
                borderColor: "#B0E46A",
              }}
            >
              {loading && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

                    <p className="mt-4 font-semibold text-gray-700">
                      Submitting Admission...
                    </p>
                  </div>
                </div>
              )}
              {!submitted ? (
                <>
                  <h2
                    className="text-3xl font-bold mb-6"
                    style={{ color: "#0234B7" }}
                  >
                    Reserve ur FREE Seat
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <Error text={errors.name} />}

                    <Input
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <Error text={errors.email} />}

                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number *"
                      value={formData.mobile}
                      maxLength={10}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");

                        setFormData((prev) => ({
                          ...prev,
                          mobile: value,
                        }));
                      }}
                      className="w-full p-4 rounded-xl border"
                    />
                    <Input
                      name="city"
                      placeholder="City *"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && <Error text={errors.city} />}

                    <Input
                      name="college"
                      placeholder="College / Company Name"
                      value={formData.college}
                      onChange={handleChange}
                    />

                    <Select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                    >
                      <option value="">Current Qualification</option>

                      <option>10th Pass</option>
                      <option>12th Science</option>
                      <option>12th Commerce</option>
                      <option>12th Arts</option>

                      <option>Diploma</option>

                      <option>BCA</option>
                      <option>BSc IT</option>
                      <option>B.E.</option>
                      <option>B.Tech</option>

                      <option>B.Com</option>
                      <option>BBA</option>
                      <option>BA</option>

                      <option>MCA</option>
                      <option>MSc IT</option>
                      <option>M.Tech</option>
                      <option>MBA</option>

                      <option>Working Professional</option>

                      <option>Other</option>
                    </Select>
                    <Select
                      name="background"
                      value={formData.background}
                      onChange={handleChange}
                    >
                      <option value="">IT or Non-IT Background</option>
                      <option value="IT">IT</option>
                      <option value="Non-IT">Non-IT</option>
                    </Select>

                    {errors.background && <Error text={errors.background} />}

                    <Select
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    >
                      <option value="Portfolio Bootcamp">
                        Portfolio Bootcamp
                      </option>
                    </Select>

                    <Select
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    >
                      <option value="26-07-2026">
                        26-07-2026
                      </option>
                    </Select>

                    <Select
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                    >
                      <option value="">Have you built portfolio before?</option>

                      <option value="Yes">Yes</option>

                      <option value="No">No</option>

                      <option value="Currently Building">
                        Currently Building
                      </option>
                    </Select>

                    {errors.portfolio && <Error text={errors.portfolio} />}

                    <Select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                    >
                      <option value="">
                        Which course are you interested in?
                      </option>

                      <option>Full Stack</option>

                      <option>Testing</option>

                      <option>Salesforce</option>

                      <option>Data Analytics</option>

                      <option>Interview Mastery</option>

                      <option>Not Sure Yet</option>
                    </Select>

                    {errors.course && <Error text={errors.course} />}

                    <Select
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                    >
                      <option value="">
                        How did you hear about this bootcamp?
                      </option>

                      <option>Instagram</option>

                      <option>LinkedIn</option>

                      <option>Facebook</option>

                      <option>YouTube</option>

                      <option>Google Search</option>

                      <option>WhatsApp</option>

                      <option>Friend / Referral</option>

                      <option>College</option>

                      <option>Telegram</option>

                      <option>Advertisement</option>

                      <option>Other</option>
                    </Select>
                    <label className="flex gap-3 text-sm">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                      />

                      <span
                        style={{
                          color: "#0234B7",
                        }}
                      >
                        I agree to receive bootcamp reminders, certificates and
                        future course updates.
                      </span>
                    </label>

                    {errors.consent && <Error text={errors.consent} />}

                    <button
                      type="submit"
                      disabled={!formData.consent}
                      className={`w-full py-4 rounded-2xl font-bold text-lg transition
    ${!formData.consent ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
                      style={{
                        background: "#0234B7",
                        color: "#FDFDFD",
                      }}
                    >
                      Reserve My FREE Seat
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <h2
                    className="text-3xl font-bold mb-6"
                    style={{
                      color: "#0234B7",
                    }}
                  >
                    🎉 Registration Successful!
                  </h2>

                  <p
                    style={{
                      color: "#0234B7",
                    }}
                  >
                    Your seat for the FREE Portfolio Bootcamp has been reserved.
                  </p>

                  <p
                    className="mt-4"
                    style={{
                      color: "#0234B7",
                    }}
                  >
                    Redirecting to WhatsApp for free Jobs post...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LEARN */}

      <SectionTitle title="What Students Will Learn" />

      <CardSection items={learnItems} />

      {/* GET */}

      <SectionTitle title="What Students Will Get" />

      <CardSection items={getItems} />

      {/* EVENT DETAILS */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionTitle title="Event Details" />

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <EventCard title="Mode" value="Live Online" />

            <EventCard title="Duration" value="3-4 Hours" />

            <EventCard title="Fee" value="FREE" />

            <EventCard title="Certificate" value="Included" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* COMPONENTS */

function Input(props) {
  return (
    <input
      {...props}
      className="w-full p-4 rounded-xl border outline-none"
      style={{
        borderColor: "#B0E46A",
      }}
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className="w-full p-4 rounded-xl border outline-none"
      style={{
        borderColor: "#B0E46A",
      }}
    >
      {props.children}
    </select>
  );
}

function Error({ text }) {
  return <p className="text-red-500 text-sm">{text}</p>;
}

function SectionTitle({ title }) {
  return (
    <h2 className="text-4xl font-bold text-center" style={{ color: "#0234B7" }}>
      {title}
    </h2>
  );
}

function CardSection({ items }) {
  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item}
            className="p-6 rounded-3xl border shadow-lg flex gap-4"
            style={{
              borderColor: "#B0E46A",
            }}
          >
            <CheckCircle color="#0234B7" />

            <p
              className="font-semibold"
              style={{
                color: "#0234B7",
              }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventCard({ title, value }) {
  return (
    <div
      className="rounded-3xl p-8 text-center"
      style={{
        background: "#0234B7",
      }}
    >
      <h3
        className="text-xl font-bold mb-3"
        style={{
          color: "#B0E46A",
        }}
      >
        {title}
      </h3>

      <p
        className="text-2xl font-bold"
        style={{
          color: "#FDFDFD",
        }}
      >
        {value}
      </p>
    </div>
  );
}
