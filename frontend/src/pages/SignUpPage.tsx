import { useState } from "react";
import Container from "../Container";
import { toast } from "react-toastify";
import API from "../utils/Api";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../GlobalContext";
import Button from "../components/Button";
import Input from "../components/Input";

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
  const placeholders = ["John Doe", "hello@gmail.com", "password"];

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
          {placeholders.map((placeholder) => (
            <div className="w-full relative">
              <Input
                htmlType="text"
                size="medium"
                placeholder={placeholder}
                name={name}
                onChange={inputChange}
              />

              {placeholder === "password" && (
                <div>
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
              )}
            </div>
          ))}

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
          <Button
            loading={isLoading}
            type="primary"
            className="mt-4 font-light"
            buttonType="submit"
            size="small"
          >
            Sign Up
          </Button>
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

          {placeholders.slice(1).map((placeholder) => (
            <div className="w-full relative">
              <Input
                htmlType="text"
                size="medium"
                placeholder={placeholder}
                name={name}
                onChange={inputChange}
              />
              {placeholder === "password" && (
                <div>
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
              )}
            </div>
          ))}

          <div className="flex justify-between text-sm w-full">
            <p className="cursor-pointer hover:text-blue-600">
              <Link to="/forgot-password">Forgot your password?</Link>
            </p>
            <p className="cursor-pointer" onClick={() => setisLoginOpen(false)}>
              Create a new account
            </p>
          </div>
          <Button
            loading={isLoading}
            size="small"
            buttonType="submit"
            className="mt-4 font-light"
            type="primary"
          >
            Sign In
          </Button>
        </form>
      )}
    </Container>
  );
};

export default SignUpPage;
