"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialProveCarousel() {
  const logos = Array.from({ length: 6 }).map(
    (_, index) => `/carousel/${index + 1}.png`
  );
  return (
    <>
      <div className="w-ful px-10 py-10  sm:px-24 sm:py-24 flex justify-center items-center flex-col gap-8">
        <div className=" text-sm sm:text-base  md:text-md 2xl:text-lg leading-relaxed md:leading-loose lg:leading-loose font-medium">
          Join 400+ companies that trust our innovative IT solutions to drive
          growth and success.
        </div>

        <div className="overflow-hidden bg-white py-4 relative w-full">
          <motion.div
            className="flex space-x-10 w-max"
            animate={{ x: ["0%", "-50%"] }} // Moves only half to allow looping
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          >
            {[...logos, ...logos].map((src, index) => (
              <Image
                key={index}
                src={src}
                width={197}
                height={48}
                alt={`social-prove-brand-logo-carousel-${index}`}
                className="w-18  sm:w-32 md:w-40 lg:w-48"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
