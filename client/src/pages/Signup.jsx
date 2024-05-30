import React from "react";
import instagramLogo from "../assets/images/Logo-Instagram.png";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");

  const [lastname, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      firstname,
      lastname,
      email,
      password,
    };
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
      } else {
        console.log("Sign up failed");
      }
    } catch (error) {
      console.log("Error signup", error);
    }
  };

  return (
    <>
      <div className="flex justify-center my-3">
        <div className="">
          <div className="border-gray-200 border-2 px-6 h-[540px] rounded-lg">
            <div className="logo flex justify-center">
              <img src={instagramLogo} alt="" srcset="" className="h-[100px]" />
            </div>
            <div className="text-center">
              <h1 className="text-slate-500 font-semibold">
                Sign up to see photos and videos
                <br></br>
                from your friends.
              </h1>
            </div>

            <button className="text-white hover:bg-blue-600 bg-blue-500 rounded-lg font-semibold flex items-center gap-x-2 h-9 w-full justify-center my-3">
              <FaFacebook />
              Log in with Facebook
            </button>

            <div className="form w-[300px] my-4">
              <form action="" onChange={handleSubmit}>
                <div className="mb-2">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    id="firstname"
                    value={firstname}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Firstname"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    id="lastname"
                    value={lastname}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Lastname"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-lg h-8 my-4">
                  Sign up
                </button>
              </form>
            </div>
          </div>

          <div className="border-gray-200 border-2 p-8 h-[80px] rounded-lg my-4 flex items-center justify-center">
            <h1>
              Have an account?
              <Link to="/">
                <span className="mx-2 text-blue-500 font-semibold">
                  Sign in
                </span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
