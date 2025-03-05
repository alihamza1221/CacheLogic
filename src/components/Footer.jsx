import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      <div className="max-w-[90%] mx-auto">
        <div className="container mx-auto px-4 py-8 space-y-12">
          {/* Top row: Title + Subtext on left, CTA buttons on right */}
          <div className="flex flex-col lg:flex-row items-start justify-between space-y-4 lg:space-y-0">
            {/* Headline + subtext */}
            <div>
              <h3 className="font-semibold text-[24px] md:text-[38px] leading-[38px] tracking-normal">
                Innovating IT solutions for the modern world.
              </h3>
              <p className="text-gray-200 mt-4 max-w-xl text-base md:text-xl font-normal">
                Empowering businesses with cutting-edge technology and tailored
                solutions.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex space-x-4">
              <a href="#" className="inline-block">
                <Image
                  src={"/footer/discover_btn.png"}
                  width={244}
                  height={60}
                  alt="Discover Our Services"
                />
              </a>
              <a href="#" className="inline-block">
                <Image
                  src={"/footer/contact_us.png"}
                  width={181}
                  height={60}
                  alt="Contact Us"
                />
              </a>
            </div>
          </div>

          <hr className="border-gray-700" />

          {/* Bottom row: Logo + info, company links, social links */}
          <div className="flex flex-col lg:flex-row items-start justify-between space-y-6 ">
            {/* Left side: Logo & short description */}
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12">
              <div className="max-w-sm gap-8 flex flex-col ">
                <div className="flex items-center space-x-2  ">
                  <Image
                    src={"/footer/logo.png"}
                    width={197}
                    height={28}
                    alt="Cache Logic Logo"
                  />
                </div>
                <p className="text-sm text-gray-400">
                  Cache Logic is a global IT services firm committed to powering
                  your business with innovative tech solutions.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  © 2027 Cache Logic. All rights reserved.
                </p>
              </div>
              {/* Company Links */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Company</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Center/Right side: Links + Social */}
            <div className="mt-auto">
              {/* Social Links */}
              <div>
                <div className="flex items-center space-x-4 h-full">
                  {/* Replace # with actual profile URLs */}
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Image
                      src={"/footer/x.png"}
                      width={24}
                      height={24}
                      alt="X"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Image
                      src={"/footer/linkedin.png"}
                      width={24}
                      height={24}
                      alt="LinkedIn"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Image
                      src={"/footer/facebook.png"}
                      width={24}
                      height={24}
                      alt="Facebook"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Image
                      src={"/footer/github.png"}
                      width={24}
                      height={24}
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full pointer-events-none border-gray-800 border-t-[1px]">
            <h1 className="text-7xl md:text-8xl lg:text-9xl  italic font-bold text-white leading-none opacity-30  text-center">
              cache logic
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
