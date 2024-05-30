import React, { useState } from "react";
import instagramLogo from "../assets/images/Logo-Instagram.png";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/signup/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Sign up successful");
        navigate("/");
      }
    } catch (error) {
      console.log("Error signup", error);
    }
  };

  return (
    <div className="flex justify-center my-3">
      <div className="">
        <div className="border-gray-200 border-2 px-6 h-[540px] rounded-lg">
          <div className="logo flex justify-center">
            <img
              src={instagramLogo}
              alt="Instagram Logo"
              className="h-[100px]"
            />
          </div>
          <div className="text-center">
            <h1 className="text-slate-500 font-semibold">
              Sign up to see photos and videos
              <br />
              from your friends.
            </h1>
          </div>

          <button className="text-white hover:bg-blue-600 bg-blue-500 rounded-lg font-semibold flex items-center gap-x-2 h-9 w-full justify-center my-3">
            <FaFacebook />
            Log in with Facebook
          </button>

          <div className="form w-[300px] my-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Username"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Firstname"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Lastname"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-lg h-8 my-4"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="border-gray-200 border-2 p-8 h-[80px] rounded-lg my-4 flex items-center justify-center">
          <h1>
            Have an account?
            <Link to="/">
              <span className="mx-2 text-blue-500 font-semibold">Sign in</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Signup;
