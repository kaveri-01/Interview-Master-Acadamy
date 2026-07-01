import { useState } from "react";
import axios from "axios";
import axiosInstance from "../configs/axiosConfig";

const AdmissionForm = () => {
  const initialState = {
    // Personal Details
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    mobile: "",
    email: "",

    // 10th
    tenthInstitute: "",
    tenthYear: "",
    tenthPercentage: "",

    // 12th
    twelfthInstitute: "",
    twelfthYear: "",
    twelfthPercentage: "",

    // Diploma
    diplomaInstitute: "",
    diplomaYear: "",
    diplomaPercentage: "",

    // Graduation
    graduationInstitute: "",
    graduationYear: "",
    graduationPercentage: "",

    // Parent
    parentName: "",
    parentMobile: "",

    // Address
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Course
    course: "",
    batch: "",
    admissionDate: "",

    // Uploads
    studentPhoto: null,
    aadhaar: null,
    resume: null,

    declaration: false,
  };

  const [formData, setFormData] = useState(initialState);
  console.log(formData, "formData");
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === "mobile" || name === "parentMobile") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }
    if (
      name === "tenthYear" ||
      name === "twelfthYear" ||
      name === "diplomaYear" ||
      name === "graduationYear"
    ) {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 4) return;
    }
    if (
      name === "tenthPercentage" ||
      name === "twelfthPercentage" ||
      name === "diplomaPercentage" ||
      name === "graduationPercentage"
    ) {
      if (!/^\d*$/.test(value)) return;

      if (value.length > 3) return;

      if (Number(value) > 100) return;
    }
    // Pincode
    if (name === "pincode") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 6) return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/admission/create", formData);

      alert(response.data.message);

      setFormData(initialState);
    } catch (error) {
      console.error(error);

      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5 mt-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Student Admission Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* ================= Personal Details ================= */}

          <h2 className="md:col-span-2 text-2xl font-bold text-blue-600 border-b pb-2">
            Personal Details *
          </h2>

          <div>
            <label className="block mb-2 font-semibold">First Name</label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Last Name</label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Date of Birth</label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Mobile Number</label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="w-full border rounded-lg p-3"
              maxLength={10}
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* ================= 10th Details ================= */}

          <h2 className="md:col-span-2 text-2xl font-bold text-blue-600 border-b pb-2 mt-5">
            SSC / 10th Details *
          </h2>

          <div>
            <label className="block mb-2 font-semibold">School Name</label>

            <input
              type="text"
              name="tenthInstitute"
              value={formData.tenthInstitute}
              onChange={handleChange}
              placeholder="Enter School Name"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Passing Year</label>
            <input
              type="text"
              name="tenthYear"
              value={formData.tenthYear}
              onChange={handleChange}
              placeholder="2020"
              maxLength={4}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Percentage</label>

            <input
              type="text"
              name="tenthPercentage"
              value={formData.tenthPercentage}
              onChange={handleChange}
              placeholder="85"
              maxLength={3}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* ================= 12th Details ================= */}

          <h2 className="md:col-span-2 text-2xl font-bold text-blue-600 border-b pb-2 mt-5">
            HSC / 12th Details
          </h2>

          <div>
            <label className="block mb-2 font-semibold">College Name</label>

            <input
              type="text"
              name="twelfthInstitute"
              value={formData.twelfthInstitute}
              onChange={handleChange}
              placeholder="Enter College Name"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Passing Year</label>

            <input
              type="number"
              name="twelfthYear"
              value={formData.twelfthYear}
              onChange={handleChange}
              placeholder="2022"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Percentage</label>

            <input
              type="text"
              name="twelfthPercentage"
              value={formData.twelfthPercentage}
              onChange={handleChange}
              placeholder="78%"
              className="w-full border rounded-lg p-3"
            />
          </div>
          {/* ================= Diploma Details ================= */}

          <h2 className="md:col-span-2 text-2xl font-bold text-blue-600 border-b pb-2 mt-5">
            Diploma Details (Optional)
          </h2>

          <div>
            <label className="block mb-2 font-semibold">Institute Name</label>

            <input
              type="text"
              name="diplomaInstitute"
              value={formData.diplomaInstitute}
              onChange={handleChange}
              placeholder="Enter Diploma Institute Name"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Passing Year</label>

            <input
              type="number"
              name="diplomaYear"
              value={formData.diplomaYear}
              onChange={handleChange}
              placeholder="2023"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Percentage</label>

            <input
              type="text"
              name="diplomaPercentage"
              value={formData.diplomaPercentage}
              onChange={handleChange}
              placeholder="75%"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* ================= Graduation Details ================= */}

          <h2 className="md:col-span-2 text-2xl font-bold text-blue-600 border-b pb-2 mt-5">
            Graduation Details (Optional)
          </h2>

          <div>
            <label className="block mb-2 font-semibold">College Name</label>

            <input
              type="text"
              name="graduationInstitute"
              value={formData.graduationInstitute}
              onChange={handleChange}
              placeholder="Enter Graduation College Name"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Passing Year</label>

            <input
              type="number"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              placeholder="2025"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Percentage / CGPA
            </label>

            <input
              type="text"
              name="graduationPercentage"
              value={formData.graduationPercentage}
              onChange={handleChange}
              placeholder="8.2 CGPA / 82%"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* ================= Parent Details ================= */}

          <h2 className="md:col-span-2 text-2xl font-bold text-blue-600 border-b pb-2 mt-5">
            Parent / Guardian Details *
          </h2>

          <div>
            <label className="block mb-2 font-semibold">
              Parent / Guardian Name
            </label>

            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Enter Parent Name"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Parent Mobile Number
            </label>

            <input
              type="tel"
              name="parentMobile"
              value={formData.parentMobile}
              onChange={handleChange}
              placeholder="Enter Parent Mobile Number"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* ================= Address ================= */}

          <h2 className="md:col-span-2 text-2xl font-bold text-blue-600 border-b pb-2 mt-5">
            Address Details *
          </h2>

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Full Address</label>

            <textarea
              rows="4"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Complete Address"
              className="w-full border rounded-lg p-3"
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 font-semibold">City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter City"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">State</label>

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter State"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Pincode</label>

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter Pincode"
              maxLength={6}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* ================= Course Details ================= */}

          <h2 className="md:col-span-2 text-2xl font-bold text-blue-600 border-b pb-2 mt-5">
            Course Details *
          </h2>

          <div>
            <label className="block mb-2 font-semibold">Select Course</label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option value="">Choose Course</option>
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>Full Stack Development</option>
              <option>QA Automation</option>
              <option>QA Manual</option>
              <option>SalesForce</option>
            </select>
          </div>

          {/* ================= Declaration ================= */}

          <div className="md:col-span-2 mt-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleChange}
                className="mt-1 h-5 w-5 accent-blue-600"
                required
              />

              <span className="text-gray-700">
                I hereby declare that the information provided by me is true and
                correct to the best of my knowledge. I understand that any false
                information may lead to cancellation of my admission.
              </span>
            </label>
          </div>

          {/* ================= Buttons ================= */}

          <div className="md:col-span-2 flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Submit Admission Form
            </button>

            <button
              type="reset"
              onClick={() => setFormData(initialState)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
