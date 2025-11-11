import { useState } from "react";
import Container from "../Container";
import { toast } from "react-toastify";
import API from "../utils/Api";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../GlobalContext";

const SignUpPage = () => {
  const { togglePassword, isPasswordHidden } = useGlobalContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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
    setIsLoading(true);
    if (!formData.name || !formData.email || !formData.password) {
      toast.warning("Please fill all fields");
    }
    try {
      const response = await API.post("/api/users/signup", formData);
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
    setIsLoading(false);
  };

  const submitLoginForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      toast.warning("Please fill all fields");
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await API.post("/api/users/login", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Login successful!!");

      if (data) {
        navigate("/");
      }
    } catch (error: any) {
      console.error("Login error", error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
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
          <div className="w-full relative">
            <input
              type={isPasswordHidden ? "password" : "text"}
              className="border-[0.063rem] px-3 py-2 border-gray-800 w-full"
              placeholder="Password"
              onChange={inputChange}
              name="password"
            />
            <img
              onClick={togglePassword}
              src="/images/eye.png"
              className="absolute top-2.5 right-2 cursor-pointer z-20"
              alt="hide-password-icon"
            />
            {isPasswordHidden && (
              <p className="text-3xl absolute top-1 right-3.5">/</p>
            )}
          </div>
          <div className="flex justify-between text-sm w-full">
            <Link to="/forgot-password">
              <p className="cursor-pointer hover:text-blue-600">
                Forgot your password?
              </p>
            </Link>
            <p className="cursor-pointer" onClick={() => setisLoginOpen(true)}>
              Login here
            </p>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-black cursor-pointer text-white mt-4 px-8 py-2 font-light"
          >
            Sign Up
            {isLoading && (
              <img
                src="/images/loading-icon.svg"
                className="w-6"
                alt="loading-icon"
              />
            )}
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
          <div className="w-full relative">
            <input
              type={isPasswordHidden ? "password" : "text"}
              className="border-[0.063rem] px-3 py-2 border-gray-800 w-full"
              placeholder="Password"
              onChange={inputChange}
              name="password"
            />
            <img
              onClick={togglePassword}
              src="/images/eye.png"
              className="absolute top-2.5 right-2 cursor-pointer z-20"
              alt="hide-password-icon"
            />
            {isPasswordHidden && (
              <p className="text-3xl absolute top-1 right-3.5">/</p>
            )}
          </div>

          <div className="flex justify-between text-sm w-full">
            <p className="cursor-pointer hover:text-blue-600">
              <Link to="/forgot-password">Forgot your password?</Link>
            </p>
            <p className="cursor-pointer" onClick={() => setisLoginOpen(false)}>
              Create a new account
            </p>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-black text-white mt-4 px-8 py-2 font-light cursor-pointer"
          >
            Sign In
            {isLoading && (
              <img
                src="/images/loading-icon.svg"
                className="w-6"
                alt="loading-icon"
              />
            )}
          </button>
        </form>
      )}
    </Container>
  );
};

export default SignUpPage;
