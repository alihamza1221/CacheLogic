import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="bg-white overflow-hidden" id="contact">
      <div className="flex flex-col justify-center items-center gap-16 py-24 max-w-[90%]  mx-auto">
        <div className="flex flex-col gap-8 w-full">
          <Image
            src={"/contactUs/contact_us.png"}
            width={100}
            height={28}
            alt="team"
            className=""
          />
          {/* How does Cache Logic stands out? */}
          <p className="font-semibold text-[28px] leading-[34px] tracking-[-0.02em] sm:text-[36px] sm:leading-[44px]">
            Let’s Build the Next Product Together
          </p>
          <p className="leading-7 text-start max-w-2xl">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>

          <div className=" flex flex-col lg:flex-row lg:justify-between w-full gap-16 lg:gap-0 ">
            <div className="">
              <div className="flex gap-12 flex-col">
                <div className="row-1 flex justify-start items-start flex-col sm:flex-row sm:items-center gap-12">
                  <div className="email">
                    <div className="flex min-w-[240px] gap-5 flex-col items-start justify-between">
                      <Image
                        src={"/contactUs/message.png"}
                        width={24}
                        height={24}
                        alt={"message.png"}
                        className=""
                      />
                      <div className="text-start">
                        <h3 className="font-semibold text-[20px] leading-[30px] tracking-normal ">
                          Email
                        </h3>

                        <p className="text-gray-600 text-base ">
                          Our friendly team is here to help.
                        </p>
                      </div>
                      <button className="flex items-center gap-2 cursor-pointer">
                        <span className="text-base font-bold text-[#3A6EB3]">
                          hi@cachelogic.tech
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="ph">
                    <div className="flex min-w-[240px] gap-5 flex-col items-start justify-between">
                      <Image
                        src={"/contactUs/ph.png"}
                        width={24}
                        height={24}
                        alt={"message.png"}
                        className=""
                      />
                      <div className="text-start">
                        <h3 className="font-semibold text-[20px] leading-[30px] tracking-normal ">
                          Phone
                        </h3>

                        <p className="text-gray-600 text-base ">
                          Mon-Fri from 8am to 5pm.
                        </p>
                      </div>
                      <button className="flex items-center gap-2 cursor-pointer">
                        <span className="text-base font-bold text-[#3A6EB3]">
                          +1 (555) 000-0000
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="office">
                  <div className="flex min-w-[240px] gap-5 flex-col items-start justify-between">
                    <Image
                      src={"/contactUs/location.png"}
                      width={24}
                      height={24}
                      alt={"message.png"}
                      className=""
                    />
                    <div className="text-start">
                      <h3 className="font-semibold text-[20px] leading-[30px] tracking-normal ">
                        Office
                      </h3>

                      <p className="text-gray-600 text-base ">
                        Come say hello at our office HQ.
                      </p>
                    </div>
                    <button className="flex items-center gap-2 cursor-pointer">
                      <span className="text-base font-bold text-[#3A6EB3]">
                        Building X, Street Y, Baltimore MD
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="w-full  rounded-2xl lg:w-1/2 px-0 bg-gray-50 lg:bg-white flex flex-col space-y-4">
              <form className="flex flex-col space-y-4 bg-gray-50 md:px-8 py-10 rounded-2xl">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="firstName"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="lastName"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D315F]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D315F]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Leave us a message..."
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D315F]"
                  />
                </div>

                {/* Privacy policy */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    className="h-4 w-4 text-[#1D315F] focus:ring-[#1D315F] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="privacyPolicy"
                    className="ml-2 text-sm text-gray-600"
                  >
                    You agree to our friendly{" "}
                    <a href="#" className="text-gray-600 underline">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#1D315F] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#1D315F] transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
