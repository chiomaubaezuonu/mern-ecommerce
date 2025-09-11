import Title from "../components/Title";
import Container from "../Container";
import aboutImg from "../assets/about_img.png";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";

const About = () => {
  return (
    <Container>
      <div className="pt-8 border-t-[0.063rem] border-gray-200  text-2xl text-center uppercase">
        <Title text1={"About"} text2="US" />
      </div>
      <div className="flex flex-col md:flex-row my-10 gap-16">
        <img src={aboutImg} className="w-full max-w-[450px]" alt="about-img" />
        <div className="flex flex-col md:w-2/4 gap-6 text-gray-600">
          <p>
            Welcome to Trendify, where style meets quality. Our mission is to
            bring you the latest fashion trends and must-have items, all curated
            with an eye for quality and design. We believe that everyone
            deserves to express themselves through fashion, and we're here to
            make that easier and more enjoyable. Our collections are carefully
            selected to offer you a range of options that cater to every taste
            and occasion.
          </p>
          <p>
            At Trendify, we prioritize your satisfaction. From the moment you
            browse our site to the day your order arrives, we are dedicated to
            providing a seamless shopping experience. Our team is always on the
            lookout for the latest trends, ensuring that you have access to the
            freshest styles as soon as they hit the runway. Thank you for
            choosing Trendify. We’re excited to be a part of your style journey.
          </p>
          <p className="text-gray-800 font-extrabold">Our Mission</p>
          <p>
            At Trendify, our mission is to empower you to express your unique
            style with high-quality, on-trend fashion. We strive to make fashion
            accessible to all, offering diverse products that inspire
            confidence.
          </p>
          <p className="text-gray-800 font-extrabold">Our Vision</p>
          <p>
            At Trendify, our vision is to be a global fashion leader, known for
            cutting-edge style and quality. We aim to inspire confidence and
            creativity, making Trendify the go-to choice for individual
            expression.
          </p>
        </div>
      </div>
      <div className="py-4 text-xl">
        {" "}
        <Title text1="Why" text2="Choose us" />
      </div>
      <div className="mb-20 flex flex-col md:flex-row text-sm">
        <div className="flex flex-col px-10 md:px-16 py-8 sm:py-20 border-[0.063rem] border-gray-200 gap-5">
          <p>Quality Assurance</p>
          <p>
            At Trendify, quality comes first. Every product is carefully chosen
            and inspected to meet our high standards. Shop with confidence,
            knowing we ensure excellence in every detail.
          </p>
        </div>
        <div className="flex flex-col px-10 md:px-16 py-8 sm:py-20 border-[0.063rem] border-gray-200 gap-5">
          <p>Convenience</p>
          <p>
            Trendify ensures a smooth shopping experience with easy browsing,
            fast shipping, simple returns, and multiple payment options. Your
            comfort and satisfaction are our priorities.
          </p>
        </div>
        <div className="flex flex-col px-10 md:px-16 py-8 sm:py-20 border-[0.063rem] border-gray-200 gap-5">
          <p>Quality Customer Service</p>
          <p>
            At Trendify, exceptional service is our promise. Our dedicated
            support team is here to assist you with any questions or concerns,
            ensuring a smooth and satisfying shopping experience.
          </p>
        </div>
      </div>
      <Contact />
    </Container>
  );
};

export default About;
