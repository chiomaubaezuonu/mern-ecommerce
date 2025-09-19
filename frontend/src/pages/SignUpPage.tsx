import Container from "../Container";

const SignUpPage = () => {
  return (
    <Container>
      <form className="flex flex-col items-center gap-4 text-gray-800 mx-auto mt-14 w-[90%] sm:max-w-96">
        <div className="mt-10 mb-2 flex items-center gap-2">
          <p className="text-3xl prata-regular">
            Sign Up
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
        <input
          type="text"
          className="border-[0.063rem] px-3 py-2 border-gray-800 w-full"
          placeholder="John Doe"
        />
        <input
          type="text"
          className="border-[0.063rem] px-3 py-2 border-gray-800 w-full"
          placeholder="hello@gmail.com"
        />
        <input
          type="text"
          className="border-[0.063rem] px-3 py-2 border-gray-800 w-full"
          placeholder="Password"
        />
        <div className="flex justify-between text-sm w-full">
          <p>Forgot your password?</p>
          <p>Login here</p>
        </div>
        <button className="bg-black text-white mt-4 px-8 py-2 font-light">Sign Up</button>
      </form>
    </Container>
  );
};

export default SignUpPage;
