import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from './service/LoginService'

function App() {
  const [formData, setFormData] = useState({ m_user: "", m_pass: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(event)=>{
    event.preventDefault()

    if (formData.m_user === "" || formData.m_pass === "") {
      setError("Error: Please fill in all fields");
      return;
    }

    try {
      const response = await LoginService.postLogin(formData);
      localStorage.setItem("token", response.data.token);
      // ส่งผู้ใช้ไปยังหน้าหลักหลังจากเข้าสู่ระบบสำเร็จ
      navigate('/borrowbook_data');
    } catch (error) {
      setError("Error: Invalid username or password");
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-2xl w-96">
        <h2 className="text-2xl font-semibold mb-4">
          โปรแกรมระบบงานห้องสมุด
        </h2>
        <hr />
        <h2 className="text-xl font-semibold mt-6 mb-10">เข้าสู่ระบบ</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="m_user"
              className="block text-sm font-medium text-gray-700"
            >
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              id="m_user"
              name="m_user"
              value={formData.m_user}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="m_pass"
              className="block text-sm font-medium text-gray-700"
            >
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="m_pass"
              name="m_pass"
              value={formData.m_pass}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 mx-auto text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
