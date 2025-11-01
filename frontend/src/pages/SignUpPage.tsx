import { useState } from "react";
import Container from "../Container";
import axios from "axios";
import { toast } from "react-toastify";
import API from "../utils/Api";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
const navigate = useNavigate()
  const [isLoginOpen, setisLoginOpen] = useState(false);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        formData
      );
       toast.success(response.data.message);
      console.log(response.data);

    } catch (error: any) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };


  const submitLoginForm = async (e: React.FormEvent) => {
    e.preventDefault()
    const { email, password } = formData;
    if(!email || !password){
      toast.warning("Please fill all fields")
      return;
    }
    try {
      const { data } = await API.post("api/users/login", {email, password})
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      toast.success("Login successful!!")

      if(data){
        navigate("/")
        
      }
    } catch (error: any) {
      console.error("Login error", error)
      toast.error(error.response?.data?.message || "Login failed")
    }
  };


  return (
    <Container>
      {!isLoginOpen && (
        <form
          onSubmit={submitForm}
          className="flex flex-col items-center gap-4 text-gray-800 mx-auto mt-14 w-[90%] sm:max-w-96"
        >
          <div className="mt-10 mb-2 flex items-center gap-2">
            <p className="text-3xl prata-regular">Sign Up</p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
          </div>
          <input
            type="text"
            className="border-[0.063rem] px-3 py-2 border-gray-800 w-full"
            placeholder="John Doe"
            onChange={inputChange}
            name="name"
          />
          <input
            type="text"
            className="border-[0.063rem] px-3 py-2 border-gray-800 w-full"
            placeholder="hello@gmail.com"
            onChange={inputChange}
            name="email"
          />
          <input
            type="text"
            className="border-[0.063rem] px-3 py-2 border-gray-800 w-full"
            placeholder="Password"
            onChange={inputChange}
            name="password"
          />
          <div className="flex justify-between text-sm w-full">
            <p>Forgot your password?</p>
            <p className="cursor-pointer" onClick={() => setisLoginOpen(true)}>
              Login here
            </p>
          </div>
          <button
            type="submit"
            className="bg-black cursor-pointer text-white mt-4 px-8 py-2 font-light"
          >
            Sign Up
          </button>
        </form>
      )}{" "}
      :
      {isLoginOpen && (
        <form
          onSubmit={submitLoginForm}
          className="flex flex-col items-center gap-4 text-gray-800 mx-auto mt-14 w-[90%] sm:max-w-96"
        >
          <div className="mt-10 mb-2 flex items-center gap-2">
            <p className="text-3xl prata-regular cursor-pointer">Login</p>
            <p className="w-8 h-[1px] sm:h-[2px] bg-gray-700"></p>
          </div>
          <input
            type="text"
            className="border-[0.063rem] px-3 py-2 border-gray-800 w-full"
            placeholder="hello@gmail.com"
            onChange={inputChange}
            name="email"
          />
          <input
            type="text"
            className="border-[0.063rem] px-3 py-2 border-gray-800 w-full"
            placeholder="Password"
            onChange={inputChange}
            name="password"
          />
          <div className="flex justify-between text-sm w-full">
            <p className="cursor-pointer hover:text-blue-600"><Link to="/forgot-password">Forgot your password?</Link></p>
            <p className="cursor-pointer" onClick={() => setisLoginOpen(false)}>
              Create a new account
            </p>
          </div>
          <button
            type="submit"
            className="bg-black text-white mt-4 px-8 py-2 font-light cursor-pointer"
          >
            Sign In
          </button>
        </form>
      )}
    </Container>
  );
};

export default SignUpPage;
