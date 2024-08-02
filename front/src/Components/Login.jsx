
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
  import axios from 'axios';

  export default function Example() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function notify() {
      toast("Invalid credentials");
    }

    return (
      <>
      <ToastContainer />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    required
                    autoComplete="email"
                    onChange={(e) => setUsername(e.target.value)}
                    className="my-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={() => {
                    axios.post("http://172.17.15.233:5001/auth/login", { username, password })
                      .then(response => {
                        console.log(response.data);
                        // Check the response and redirect if login is successful
                        if (response.data === "Login Successful") {
                          // Redirect to the home page
                          window.location.href = "/";
                        } else {
                          // Handle login failure
                          // For example, you can display an error message
                          // and clear the username and password fields
                          setUsername("");
                          setPassword("");
                          notify();
                        }
                      })
                      .catch(error => {
                        // Handle any error that occurred during the login request
                        console.error("Login error:", error);
                      });
                  }}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 my-8 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }

