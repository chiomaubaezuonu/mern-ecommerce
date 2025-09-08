import "../index.css"
import Container from "../Container";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col sm:flex-row border border-gray-400">
        <div className="py-10 sm:py-0 sm:w-1/2 flex flex-col items-center justify-center lg:text-5xl  w-full">
          <div>
            <div className="flex items-center gap-2">
              <p className="w-8 md:w-11 font-bold h-[0.125rem] bg-[#414141]"></p>
              <p className="uppercase font-medium text-sm md:text-base text-[#414141]">
                our best sellers
              </p>
            </div>
            <h1 className="text-3xl leading-relaxed prata-regular text-[#414141] font-normal lg:text-5xl">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="uppercase font-semibold text-[#414141] text-sm md:text-base">
                Shop now
              </p>
              <p className="w-8 md:w-11 font-bold h-[0.063rem] bg-[#414141]"></p>
                     
            </div>
          </div>
        </div>
        <img src="/images/hero-img.png" className="sm:w-1/2" alt="hero-img" />
      </div>

      {/* Second section */}
      <div className="my-10">
        <div className="py-8 flex flex-col justify-center items-center">
          <div className="mb-3 flex items-center gap-1 uppercase">
            <p className="text-gray-500 sm:text-[#6B7280] text-2xl sm:text-3xl">
              Latest
            </p>
            <span className="flex items-center gap-1 text-gray-700 font-medium text-2xl sm:text-3xl">
              Collections
              <p className="w-8 sm:w-12 h-[0.063rem] sm:h-[0.125rem] bg-gray-400 sm:bg-[#374151]"></p>
            </span>
          </div>
          <div>
           <p className="text-xs sm:text-sm md:text-base mx-9 sm:mx-32 text-[#4B5563] text-center"> Step into a world of style with our newest collections, carefully
            curated to bring you the best in fashion, home decor, and more.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
