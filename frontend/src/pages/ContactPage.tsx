import Title from "../components/Title";
import Container from "../Container";
import Contact from "../components/Footer";
import Button from "../components/Button";

const ContactPage = () => {
  return (
    <Container>
      <div className="text-2xl pt-10 border-t-[0.063rem] text-center border-gray-200">
        <Title text1="contact" text2="us" />
      </div>
      <div className="flex flex-col justify-center gap-10 my-10 md:flex-row mb-28">
        <img
          src="/images/contact_img.png"
          className="w-full max-w-[30rem]"
          alt="contact_img"
        />
        <div className="flex flex-col justify-center gap-6 items-start">
          <p className="text-gray-600 font-semibold text-xl">Our Store</p>
          <p className="text-gray-500">
            Trendify 354 Fashion Lane
            <br></br>
            Los Angeles, SC 45678, USA
          </p>
          <p className="text-gray-500">
            Tel: (+11)-558-669-447
            <br></br>
            Email: contact.trendify@info.com
          </p>
          <p className="text-gray-600 font-semibold text-xl">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Join us at Trendify! Explore job openings and help shape the future
            of fashion.
            <br></br>
            Explore our current job openings and discover how you can contribute
            to our mission of setting trends and creating style.
          </p>
          {/* <button className="cursor-pointer text-sm py-4 px-8 border-[0.063rem] border-black trasition-all duration-500 hover:text-white hover:bg-gray-800">
            Explore Jobs
          </button> */}
          <Button size="medium" className="w-[9rem.1] bg-transparent py-4 border-[0.063rem] text-black border-black trasition-all duration-500 hover:text-white hover:bg-gray-800">
            Explore Jobs
          </Button>
        </div>
      </div>
      <Contact />
    </Container>
  );
};

export default ContactPage;
