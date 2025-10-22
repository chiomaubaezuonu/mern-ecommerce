import axios from "axios";
import Container from "../Container";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/forgot-password",
        { email }
      );
      setMessage(res.data.message);
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="py-17">
        <form onSubmit={submitForm} className="flex flex-col rounded-lg py-7.5 px-14 mb-12 gap-4 max-w-[39rem] mx-auto border">
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
            className="bg-black my-5 rounded-3xl w-full text-white mt-4 px-8 py-2 font-light"
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
