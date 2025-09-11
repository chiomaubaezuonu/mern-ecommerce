import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="mt-10 flex flex-col items-center">
        <p className="text-2xl text-gray-800 font-medium">
          Unlock 20% Off | Subscribe Today!
        </p>
        <p className="text-gray-400 mt-3">
          Don't miss out—unlock your savings now by subscribing below!
        </p>
        <form
          action=""
          className="flex items-center gap-3 w-full my-6 border-[0.063rem] border-gray-200 sm:w-1/2"
        >
          <input
            type="text"
            className="w-full pl-3 sm:flex-1 outline-none required:"
            placeholder="hello@gmail.com"
          />
          <button className="uppercase px-10 py-4 bg-black text-white text-xs">
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex flex-col sm:flex-row text-sm my-10 mt-40 gap-14">
        <div>
          <Link to="/">
            <img
              src="/images/logo.png"
              className="w-32 mb-5 cursor-pointer"
              alt="logo"
            />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Thank you for shopping with Trendify! We're dedicated to bringing
            you the latest trends and top-quality products. Follow us on social
            media for updates on new arrivals, exclusive offers, and more. If
            you have any questions or need assistance, our friendly customer
            support team is here to help. Subscribe to our newsletter for
            special discounts and be the first to know about our latest
            promotions. Your style journey starts here—let's make it
            unforgettable!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col text-gray-600 gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-600 gap-1">
            <li>+11-558-669-447</li>
            <li>contact.trendify@info.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
