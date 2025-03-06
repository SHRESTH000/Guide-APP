import React, { useState } from "react";
import Login from "./Login";
// import {Link} from react-Router
import { Link } from "react-router-dom";
import Validation from "./LoginVlid";

function SignUp() {
  const [values, setvalues] = useState({
    username:" ",
    password: " ",
    firstname:" ",
    lastname:" ",
    email: " ",
    phoneNo:" ",

  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setvalues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.values],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('public/img11.jpg')" }}
      >
        <div>
          <div className="flex h-screen items-center justify-center">
            <div className=" w-[500px] ">
              <div className="modal-box">
                <form method="dialog" action="" onSubmit={handleSubmit}>
                  <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black-500"
                  >
                    ✕
                  </Link>
                </form>
                <h3 className="font-bold text-lg">Sign Up</h3>

                <div className="mt-4 space-y-2">
                  <span>UserName</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                  />
                  <br />
                  {errors.username && (
                    <span className="text-danger">{errors.username}</span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <span>FirstName</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your firstname"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                  />
                  <br />
                </div>
                <div className="mt-4 space-y-2">
                  <span>LastName</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your lastname"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                  />
                  <br />
                </div>

                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleInput}
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                  />
                  <br />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>

                <div className="mt-6 space-y-2">
                  <span className="mt-12">Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleInput}
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                  />
                  {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                </div>

                <div className=" flex justify-around mt-4">
                  <button
                    type="Submit"
                    className="bg-pink-500 p-2 text-white rounded-md px-3 py-1 hover:bg-pink-700 "
                  >
                    Sign UP
                  </button>
                  <p>
                    Have account?{" "}
                    <button
                      to="./login"
                      className="text-blue-500 underline"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>
                    <Login />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
