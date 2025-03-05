import Image from "next/image";
export default function ServicesGrid() {
  return (
    <div className="bg-white w-full">
      <div className="container max-w-[90%] mx-auto py-24 bg-white flex flex-col gap-8 md:gap-16">
        {/* services_white */}

        <div className="flex flex-col items-center gap-6">
          <Image
            src={"/services_white.png"}
            width={102}
            height={28}
            alt="our services"
            className="mx-auto"
          />
          <p className="font-semibold text-[28px] leading-[34px] tracking-[-0.02em] sm:text-[36px] sm:leading-[44px]">
            Services We Offer.
          </p>
          <p className="leading-7 text-center max-w-xl">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1) First item: spans 2 columns on all breakpoints */}

          <div className="col-span-2 lg:col-span-2 bg-gray-50 p-6 rounded-xl shadow min-h-72  flex gap-8 md:gap-16 flex-col items-start">
            <Image
              src={"/chat.png"}
              width={48}
              height={48}
              alt="our services"
              className=""
            />
            <div>
              <h3 className="font-semibold text-[20px] leading-[30px] tracking-normal">
                Artificial Intelligence (AI/ML).
              </h3>

              <p className="text-gray-600 text-base ">
                Revolutionizing decisions through intelligent solutions. We use
                latest AI solutions to enhance and digitalize your operations.
              </p>
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

          {/* 2) Second item: default col-span-1 (occupies 1 column) */}
          <div className="bg-[#1D315F] shadow-[0px_8px_32px_0px_#1D396699] p-6 rounded-xl  min-h-72 h-[362px] flex gap-8 md:gap-16 flex-col items-start">
            <Image
              src={"/automation.png"}
              width={48}
              height={48}
              alt="our services"
              className=""
            />
            <div>
              <h3 className="font-semibold text-white text-[20px] leading-[30px] tracking-normal">
                Automation
              </h3>

              <p className="text-[#D9D9D9] text-base ">
                Streamlining processes for greater efficiency.
              </p>
            </div>
            <button className="flex items-center gap-2 cursor-pointer">
              <span className="text-base font-bold text-white">
                View Service
              </span>
              <Image
                src={"/arrow_right.png"}
                width={20}
                height={20}
                alt="go to service"
                className=""
              />
            </button>
          </div>

          {/* 3) Third item: default col-span-1 */}
          <div className="bg-gray-50 p-6 rounded-xl  min-h-72  flex gap-8 md:gap-16 flex-col items-start">
            <Image
              src={"/solutions.png"}
              width={48}
              height={48}
              alt="our services"
              className=""
            />
            <div>
              <h3 className="font-semibold text-gray-900 text-[20px] leading-[30px] tracking-normal">
                Cybersecurity
              </h3>

              <p className="text-gray-600 text-base ">
                Protecting your business from evolving threats.
              </p>
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

          {/* 4) Fourth item: default col-span-1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow min-h-72 flex gap-8 md:gap-16 flex-col items-start">
            <Image
              src={"/solutions.png"}
              width={48}
              height={48}
              alt="our services"
              className=""
            />
            <div>
              <h3 className="font-semibold text-gray-900 text-[20px] leading-[30px] tracking-normal">
                Custom Solutions
              </h3>

              <p className="text-gray-600 text-base ">
                Tech built uniquely for your needs.
              </p>
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

          {/* 5) Fifth item: default col-span-1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow min-h-72 flex gap-8 md:gap-16 flex-col items-start">
            <Image
              src={"/solutions.png"}
              width={48}
              height={48}
              alt="our services"
              className=""
            />
            <div>
              <h3 className="font-semibold text-gray-900 text-[20px] leading-[30px] tracking-normal">
                DevOps
              </h3>

              <p className="text-gray-600 text-base ">
                Optimizing development and deployment pipelines.
              </p>
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

          {/* 6) Sixth item: spans 2 columns on all breakpoints */}
          <div className="col-span-2 lg:col-span-2 bg-gray-50 p-6 rounded-xl  min-h-72 flex gap-8 md:gap-16 flex-col items-start">
            <Image
              src={"/chat.png"}
              width={48}
              height={48}
              alt="our services"
              className=""
            />
            <div>
              <h3 className="font-semibold text-[20px] leading-[30px] tracking-normal">
                Web & Mobile Apps
              </h3>

              <p className="text-gray-600 text-base ">
                Building high-performance, user-friendly applications tailored
                to your business needs. From sleek mobile experiences to robust
                web platforms, we ensure seamless functionality and scalability.
              </p>
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
        </div>
      </div>
    </div>
  );
}
