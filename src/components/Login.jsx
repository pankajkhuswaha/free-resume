import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../feature/authslice";
import { createRootRoute } from "@tanstack/react-router";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
    dispatch(login({ username, password }));
    // setusername("");
    // setpassword("");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your username
                </label>
                <input
                  type="username"
                  name="username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  className="input"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder="••••••••"
                  className="input"
                />
              </div>

              <button
                type="submit"
                className=" w-full border-2 p-2.5 border-blue-500 rounded hover:bg-blue-500 text-white transition-all delay-150"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Route = createRootRoute({ path: "/login", component: Login });
yyyyyyyyyyyyyyyy