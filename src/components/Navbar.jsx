"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`font-bold text-lg text-gray-600 bg-transparent shadow-sm  flex items-center w-full`}
    >
      <div className=" mx-auto w-[95%]">
        <div className="h-20 flex justify-start items-center gap-12">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#home" className="flex items-center">
              <div className="mr-2">
                {/* Logo would be an actual SVG or image in production */}
                <div className="flex items-center">
                  <Image src="/logo.png" alt="Icon" width={197} height={28} />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 leading-6">
            <Link
              href="/"
              className="hover:text-gray-700 transition duration-300 leading-6"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="hover:text-gray-700 font-semibold transition duration-300 flex items-center">
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="hover:text-gray-700 transition duration-300 flex items-center">
                About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <Link
              href="#contact"
              className="hover:text-gray-700 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block ml-auto">
            <Link
              href="#contact"
              className="bg-[#27538E] font-semibold text-white px-4 py-3 rounded-md  transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-2 py-3`}>
          <div className="flex flex-col space-y-4 text-gray-600">
            <Link
              href="/"
              className="hover:text-gray-700 transition duration-300"
            >
              Home
            </Link>
            <Link
              href={"#services"}
              className="hover:text-gray-700 transition duration-300 text-left flex items-center justify-between"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              href={"#about"}
              className="hover:text-gray-700 transition duration-300 text-left flex items-center justify-between"
            >
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="hover:text-gray-700 transition duration-300"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#27538E] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
