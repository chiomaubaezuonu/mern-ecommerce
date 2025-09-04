import Container from "../components/container";



const Home = () => {
  return (
    <Container>
      <div className="flex flex-col sm:flex-row border border-gray-400">
        <div className="py-10 sm:py-0 sm:w-1/2 flex flex-col items-start w-full  bg-pink-500">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 font-bold h-[0.125rem] bg-[#414141]"></p>
            <p className="uppercase  font-medium text-sm md:text-base">our best sellers</p>
          </div>
          <h1 className="text-3xl sm:py-3 leading-relaxed font-[prata-regular] text-[#414141] font-normal lg:text-5xl">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="uppercase font-semibold text-[#414141] text-sm md:text-base">Shop now</p>
            <p className="w-8 md:w-11 font-bold h-[0.1rem] bg-[#414141]"></p>
          </div>
        </div>
        <img src="/images/hero-img.png" className="sm:w-1/2" alt="hero-img" />
      </div>
    </Container>
  );
};

export default Home;