import Container from "../Container";

const ResetPassword = () => {
  return (
    <Container>
      <div className="py-17">
        <form className="flex flex-col rounded-lg py-7.5 px-14 mb-12 gap-4 max-w-[39rem] mx-auto border">
          <h1 className="text-4xl font-medium text-center mb-6">Recover Password</h1>
          <input type="email" className="font-bold border border-gray-300 py-2 px-4 outline-0 rounded" required />
          <button
            type="submit"
            className="bg-black my-5 rounded-3xl w-full text-white mt-4 px-8 py-2 font-light"
          >
            SEND
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
