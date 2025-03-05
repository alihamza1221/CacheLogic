import Image from "next/image";
const HeroSection = () => {
  return (
    <div
      className={`w-[95%]  mx-auto h-[500px] md:h-[600px] py-3 lg:h-screen relative`}
    >
      {/* <div className="w-[97%] mx-auto inset-0 h-full rounded-3xl absolute top-6  backdrop-blur-3xl"></div> */}
      <div
        className="w-[97%] mx-auto inset-0 h-full  rounded-3xl bg-[#27538E] absolute top-3 z-0"
        style={{
          boxShadow:
            "0 20px 30px rgba(39, 83, 142, 0.2), 0 40px 100px rgba(39, 83, 142, 0.2), 0 60px 150px rgba(255, 255, 255, 0.1)",
        }}
      ></div>
      <div className="flex w-full h-full rounded-3xl justify-between relative overflow-hidden z-10">
        {/* Background Image Container */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('hero_container_bg.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            transform: "scaleX(-1)",
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(29, 49, 95, 0) 0%, #1D315F 67.83%)",
          }}
        />

        {/* Content Section */}
        <div className="relative text-white z-10 p-10 my-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Fast-Tracking Your AI
            <br /> Evolution
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose lg:leading-loose font-normal">
            Empowering businesses with cutting-edge technology and
            <br />
            tailored solutions.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="cursor-pointer">
              <Image
                src={"/our_services.png"}
                width={244}
                height={60}
                alt="discover our services"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src={"/contact_us.png"}
                width={181}
                height={60}
                alt="discover our services"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
