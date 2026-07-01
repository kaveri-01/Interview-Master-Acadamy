import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../../configs/axiosConfig";

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  const getDashboardData = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/admin/dashboard", form);
      if (response.data.success) {
        setStudents(response.data.students);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-2">Admin Dashboard</h2>
        <p className="text-gray-500 text-center mb-8">Total Students</p>
      </div>
    </div>
  );
};

export default Dashboard;
