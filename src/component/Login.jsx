import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { generateToken, loginUser } from "../services/LoginService";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const[details,setDetails]=useState({
    username:'',
    password:''
  });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const nav = useNavigate();


  function validate(data){
    if(data.username===" "|| data.password===" "){
      setError("Please fill in all fields");
      toast.error("Error Fill the field")
      return false;
    }else{
      setError("");
      return true;
    }
   };
   const handleReset=()=>{
    setDetails({
      username:'',
      password:'',
    });
   };
  //  const handleChange=(event,field)=>{
  //   let actualValue=event.target.value
  //   setDetails({
  //     ...details,
  //     [field]:actualValue
  //   })
  //  }
   async function handleLogin (data){
      const userInfo = {
        username: data.username,
        password: data.password,
      };
    if(validate(userInfo)){
      try {
         console.log("Reached;")
        const token=await generateToken(userInfo);
        console.log(token);
        if(token){
          loginUser(token);
          toast.success("Succesfully Login");
          setIsLogin(true);
          nav("/")
          document.getElementById("my_modal_3").close()
        }else{
          setError("Invalid username or password");
          toast.error("Wrong Username and Password")
        }
        
      } catch (error) {
        console.log(error);
        if (error.status == 401) {
          toast.error("Wrong Credential");
        } else {
          toast.error("Something went Wrong");
        }
      }
    }
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleLogin)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {/* UserName */}
            <div className="mt-4 space-y-2">
              <span>Username</span>
              <br />
              <input
                type="text"
                placeholder="Enter your username"
              //  value={details.username}
              //  onChange={(e)=>handleChange(e,'username')}
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("username", { required: true })}
              />
              <br />
              {errors.username && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
               // value={details.password}
               // onChange={(e)=>handleChange(e,'password')}
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;