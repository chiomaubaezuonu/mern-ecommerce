
import Container from "../Container";
import { useState } from "react";
import { toast } from "react-toastify";
import API from "../utils/Api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
      setLoading(false);
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
          <button
            type="submit"
            className="bg-black my-5 rounded-3xl cursor-pointer w-full text-white mt-4 px-8 py-3 font-light"
          >
            {loading ? "Sending..." : "SEND"}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </div>
    </Container>
  );
};

export default ForgotPassword;
