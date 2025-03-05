import React from "react";
import Image from "next/image";
const ChoiceUs = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center gap-16 py-24 max-w-[90%]  mx-auto">
        <div className="flex flex-col gap-8 items-center">
          <Image
            src={"/why_us.png"}
            width={70}
            height={28}
            alt="team"
            className=" mx-auto"
          />
          {/* How does Cache Logic stands out? */}
          <p className="font-semibold text-[28px] leading-[34px] tracking-[-0.02em] sm:text-[36px] sm:leading-[44px]">
            How does Cache Logic stands out?
          </p>
          <p className="leading-7 text-center max-w-4xl">
            At Cache Logic, we are a passionate team of tech experts dedicated
            to powering your IT evolution. Founded by industry leaders with
            diverse expertise, we focus on delivering innovative, reliable, and
            scalable tech solutions—from AI and automation to cybersecurity and
            app development. Our mission is simple: help your business stay
            ahead in a digital world.
          </p>
        </div>
        <div className="max-w-[1069px] max-h-[602px] w-full mx-auto rounded-xl overflow-hidden border-[4px] border-[#3A6EB3]">
          <Image
            src={"/team.png"}
            width={1069}
            height={602}
            alt="team"
            className="w-full mx-auto"
          />
        </div>
        <AboutUsCards />
      </div>
    </div>
  );
};

function AboutUsCards() {
  const aboutUsData = [
    {
      title: "Global Reach With Localized Expertise",
      description:
        "We bring world-class IT solutions to businesses across the globe while ensuring tailored, region-specific support that aligns with your unique market needs.",
      icon: "/chat_purple.png",
    },
    {
      title: "Dedicated Support To Drive Your Success",
      description:
        "Our expert team is always on call to provide hands-on assistance, ensuring smooth implementation and ongoing optimization of your IT solutions.",
      icon: "/lightning_purple.png",
    },
    {
      title: "Tailored Solutions For Every Industry",
      description:
        "Whether you’re in finance, healthcare, or e-commerce, we create customized technology solutions designed to meet your industry’s challenges and goals.",
      icon: "/solutions_purple.png",
    },
  ];

  return (
    <div className="flex items-center flex-col md:flex-row justify-center gap-8 max-w-[90%]">
      {aboutUsData.map((data, index) => (
        <div
          key={data.icon}
          className=" rounded-xl min-h-80  flex gap-5 flex-col items-center justify-between"
        >
          <Image
            src={data.icon}
            width={48}
            height={48}
            alt={data.title}
            className=""
          />
          <div className="text-center">
            <h3 className="font-semibold text-[20px] leading-[30px] tracking-normal text-center">
              {data.title}
            </h3>

            <p className="text-gray-600 text-base ">{data.description}</p>
          </div>
          <button className="flex items-center gap-2 cursor-pointer">
            <span className="text-base font-bold text-[#3A6EB3]">
              View Service
            </span>
            <Image
              src={"/arrow_right_blue.png"}
              width={20}
              height={20}
              alt="go to service"
              className=""
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChoiceUs;
