import React from "react";
import Image from "next/image";
const Portfolio = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-16 py-24 max-w-[90%]  mx-auto">
        <div className="flex flex-col gap-8 items-center">
          <Image
            src={"/portfolio/portfolio_btn.png"}
            width={100}
            height={28}
            alt="team"
            className=" mx-auto"
          />
          {/* How does Cache Logic stands out? */}
          <p className="font-semibold text-[28px] leading-[34px] tracking-[-0.02em] sm:text-[36px] sm:leading-[44px]">
            Products We Have Worked On
          </p>
          <p className="leading-7 text-center max-w-2xl">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className=" flex flex-col lg:flex-row lg:justify-between w-full gap-8 lg:gap-0">
          <div className="w-[90%] lg:max-w-[44%] flex">
            <div className="flex flex-col justify-center  gap-8  lg:items-start items-center">
              <h3 className="font-semibold text-[30px] leading-[38px] tracking-normal">
                Product # 1
              </h3>
              <p className="text-gray-600 text-base text-center lg:text-start font-normal">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop. Leverage
                automation to move fast, while always giving customers a human,
                helpful experience.
              </p>
              <div className="btns flex gap-3 lg:justify-start items-center w-[90%] lg:w-1/2 justify-center ">
                <Image
                  src={"/portfolio/demo.png"}
                  width={109}
                  height={48}
                  alt="team"
                />
                <Image
                  src={"/portfolio/learn_more_btn.png"}
                  width={123}
                  height={48}
                  alt="team"
                />
              </div>
            </div>
          </div>
          <div className="p-7 max-w-[560px]  bg-[#F2F4F7] flex rounded-2xl justify-center items-center relative z-1 overflow-visible justify-self-end self-end">
            <Image
              src={"/portfolio/dashboard-1.png"}
              width={480}
              height={300}
              alt="dashboard"
              className=" rounded-lg my-auto"
            />
            <div className="absolute  max-w-1/2 z-[-1] top-[70px] right-[-45px]">
              <Image
                src={"/portfolio/line_pattern.png"}
                width={298}
                height={408}
                alt="pattern"
                className="w-full rounded-lg my-auto"
              />
            </div>
          </div>
        </div>

        {/* product #2 */}
        <div className=" flex flex-col lg:flex-row lg:justify-between w-full gap-8 lg:gap-0 ">
          <div className="p-7 max-w-[560px]  bg-[#F2F4F7] flex rounded-2xl justify-center items-center relative z-1 overflow-visible order-1 lg:order-0">
            <Image
              src={"/portfolio/dashboard-1.png"}
              width={480}
              height={300}
              alt="dashboard"
              className=" rounded-lg my-auto"
            />
            <div className="absolute  max-w-1/2 z-[-1] top-[70px] left-[-45px]">
              <Image
                src={"/portfolio/line_pattern.png"}
                width={298}
                height={408}
                alt="pattern"
                className="w-full rounded-lg my-auto"
              />
            </div>
          </div>
          <div className="w-[90%] lg:max-w-[44%] flex">
            <div className="flex flex-col justify-center  gap-8  lg:items-start items-center">
              <h3 className="font-semibold text-[30px] leading-[38px] tracking-normal">
                Product # 2
              </h3>
              <p className="text-gray-600 text-base text-center lg:text-start font-normal">
                Keep your customers in the flow by embedding help articles right
                on your website. With Beacon, they never have to leave the page
                to find an answer.
              </p>
              <div className="btns flex gap-3 lg:justify-start items-center w-[90%] lg:w-1/2 justify-center ">
                <Image
                  src={"/portfolio/demo.png"}
                  width={109}
                  height={48}
                  alt="team"
                />
                <Image
                  src={"/portfolio/learn_more_btn.png"}
                  width={123}
                  height={48}
                  alt="team"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row lg:justify-between w-full gap-8 lg:gap-0">
          <div className="w-[90%] lg:max-w-[44%] flex">
            <div className="flex flex-col justify-center  gap-8  lg:items-start items-center">
              <h3 className="font-semibold text-[30px] leading-[38px] tracking-normal">
                Product # 3
              </h3>
              <p className="text-gray-600 text-base text-center lg:text-start font-normal">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>
              <div className="btns flex gap-3 lg:justify-start items-center w-[90%] lg:w-1/2 justify-center ">
                <Image
                  src={"/portfolio/demo.png"}
                  width={109}
                  height={48}
                  alt="team"
                />
                <Image
                  src={"/portfolio/learn_more_btn.png"}
                  width={123}
                  height={48}
                  alt="team"
                />
              </div>
            </div>
          </div>
          <div className="p-7 max-w-[560px]  bg-[#F2F4F7] flex rounded-2xl justify-center items-center relative z-1 overflow-visible justify-self-end self-end">
            <Image
              src={"/portfolio/dashboard-1.png"}
              width={480}
              height={300}
              alt="dashboard"
              className=" rounded-lg my-auto"
            />
            <div className="absolute  max-w-1/2 z-[-1] top-[70px] right-[-45px]">
              <Image
                src={"/portfolio/line_pattern.png"}
                width={298}
                height={408}
                alt="pattern"
                className="w-full rounded-lg my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
