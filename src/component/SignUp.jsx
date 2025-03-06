import React, { useState } from "react";
import Login from "./Login";
// import {Link} from react-Router
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginVlid";
import { register } from "../services/SignUpService";
import toast from "react-hot-toast";

function SignUp() {
  const [values, setvalues] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const nav = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event, field) => {
    let actualValue = event.target.value;
    setvalues({
      ...values,
      [field]: actualValue,
    });
  };

  const handleSubmit = async (event) => {
    //event.preventDefault();
   //setErrors(Validation(values));
    console.log(values);
    console.log("Reached");

    try {
      const registerUser = await register(values);
      console.log("reached");
      console.log(registerUser);
      if (registerUser) {
        toast.success("Register Sucessfully");
        nav("/");
        //nav("/login");
      } else {
        toast.error("Registration Failed");
      }
    } catch (error) {
      console.log(error);
      if (error.status == 400) {
        toast.error("User exist with this UserName");
      } else {
        toast.error("Somethings went Wrong");
      }
    }
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
                <form method="dialog" onSubmit={handleSubmit}>
                  <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black-500"
                  >
                    ✕
                  </Link>
                  <h3 className="font-bold text-lg">Sign Up</h3>

                  <div className="mt-4 space-y-2">
                    <span>UserName</span>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your username"
                      value={values.username}
                      onChange={(e) => handleInput(e, "username")}
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
                      value={values.firstName}
                      onChange={(e) => handleInput(e, "firstName")}
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
                      value={values.lastName}
                      onChange={(e) => handleInput(e, "lastName")}
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
                      value={values.email}
                      onChange={(e) => handleInput(e, "email")}
                      className="w-80 px-3 py-1 border rounded-md outline-none"
                    />
                    <br />
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}
                  </div>
                  <div className="mt-4 space-y-2">
                    <span>Phone No</span>
                    <br />
                    <input
                      type="number"
                      placeholder="Enter your Phone number"
                      name="phone"
                      value={values.phone}
                      onChange={(e) => handleInput(e, "phone")}
                      className="w-80 px-3 py-1 border rounded-md outline-none"
                    />
                    <br />
                    {errors.phoneNo && (
                      <span className="text-danger">{errors.phoneNo}</span>
                    )}
                  </div>


                  <div className="mt-6 space-y-2">
                    <span className="mt-12">Password</span>
                    <br />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={values.password}
                      onChange={(e) => handleInput(e, "password")}
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
