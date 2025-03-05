import Image from "next/image";
export default function Location() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-16 py-24 max-w-[90%]  mx-auto">
        <div className="flex flex-col gap-8 items-center">
          <Image
            src={"/location/location_btn.png"}
            width={100}
            height={28}
            alt="team"
            className=" mx-auto"
          />
          {/* How does Cache Logic stands out? */}
          <p className="font-semibold text-[28px] leading-[34px] tracking-[-0.02em] sm:text-[36px] sm:leading-[44px]">
            We are WORLDWIDE
          </p>
          <p className="leading-7 text-center max-w-2xl">
            We help our clients from almost every part of the world.
          </p>

          <div className="max-w-[1024px] max-h-[488px] w-full mx-auto rounded-xl overflow-hidden ">
            <Image
              src={"/location/map.png"}
              width={1024}
              height={488}
              alt="team"
              className="w-full mx-auto"
            />
          </div>

          <OurLocations />
        </div>
      </div>
    </div>
  );
}

function OurLocations() {
  const aboutUsData = [
    {
      title: "United States",
      description: "Building X, Street Y, Baltimore MD",
    },
    {
      title: "Pakistan",
      description: "Building X, Street Y, Lahore PK",
    },
    {
      title: "Whole Earth",
      description: "Mon-Fri from 8am to 5pm (PST).",
    },
  ];

  return (
    <div className="flex items-center flex-col md:flex-row justify-center gap-8 ">
      {aboutUsData.map((data, index) => (
        <div
          key={data.title}
          className="flex min-w-[240px] gap-5 flex-col items-center justify-between"
        >
          <div className="text-center">
            <h3 className="font-semibold text-[20px] leading-[30px] tracking-normal text-center">
              {data.title}
            </h3>

            <p className="text-gray-600 text-base ">{data.description}</p>
          </div>
          <button className="flex items-center gap-2 cursor-pointer">
            <span className="text-base font-bold text-[#3A6EB3]">Find Us</span>
          </button>
        </div>
      ))}
    </div>
  );
}
