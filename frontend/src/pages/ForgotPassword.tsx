
import Container from "../Container";
import { useState } from "react";
import { toast } from "react-toastify";
import API from "../utils/Api";
import Button from "../components/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await API.post(
        "/api/users/forgot-password",
        { email }
      );
      setMessage(res.data.message);
      toast.success("Reset link has been sent to your email");
    } catch (error: any) {
       setMessage(error.response?.data?.message || "Something went wrong");
      toast.error("Somethingwent wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className="py-17">
        <form
          onSubmit={submitForm}
          className="flex flex-col rounded-lg py-7.5 px-4 mb-12 gap-4 max-w-[39rem] mx-auto border"
        >
          <h1 className="text-4xl font-medium text-center mb-6">
            Recover Password
          </h1>
          <label className="text-center font-bold" htmlFor="">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="font-bold border border-gray-300 py-2 px-4 outline-0 rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button loading={isLoading} buttonType="submit" size="large">{isLoading ? "Sending...": "SEND"}</Button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </div>
    </Container>
  );
};

export default ForgotPassword;
