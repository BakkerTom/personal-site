"use client";
import Project from "@/components/project";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="container mx-auto p-4 flex flex-col md:flex-row-reverse gap-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0 }}
            className="flex lg:w-1/2 md:items-center"
          >
            <Image
              src="/photo.jpg"
              width={500}
              height={500}
              className="w-full aspect-[1.4] md:aspect-[0.85] rounded-[56px] lg:rounded-[80px] object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
              alt="Tom Bakker"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0, delay: 0.5 }}
            className="flex items-center lg:w-1/2"
          >
            <div className="lg:max-w-96">
              <h1 className="text-5xl lg:text-6xl tracking-tight font-semibold">
                Hello! <br />
                My name is
                <br />
                <span className="highlight">Tom Bakker.</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-zinc-700 mt-6">
                I’m a developer and designer currently working at Efteling.
              </p>
              <p className="text-2xl lg:text-3xl text-zinc-700 mt-4">
                I like to build apps using React Native and Swift.
              </p>
              <div className="mt-10">
                <motion.a
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.1 }}
                  href="#work"
                  className="cursor-pointer inline-flex items-center bg-dark px-6 py-4 text-white text-xl lg:text-2xl gap-x-4 rounded-full"
                >
                  View my work
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div id="work" className="container mx-auto px-4 space-y-6 pt-8">
        <Project title="Annual Passes" client="Efteling" year="2023">
          <div className="relative">
            <Image
              src="/annual-pass/gmb.png"
              width={242}
              height={283}
              alt="parking icon"
              className="absolute -bottom-16 -right-32 sm:-right-48 md:-right-64 scale-50 sm:scale-75 md:scale-100"
            />
            <Image
              src="/annual-pass/screenshot.png"
              width={320}
              height={693}
              alt="annual pass screenshot"
              className="rotate-6 -mt-3 sm:mt-6 drop-shadow shadow-black scale-90 sm:scale-100"
            />
            <Image
              src="/annual-pass/parking.png"
              width={242}
              height={283}
              alt="parking icon"
              className="absolute -top-8 sm:top-0 -left-20 scale-75 sm:scale-100 sm:-left-32 md:-left-52"
            />
          </div>
        </Project>
      </div>
      <div className="h-24"></div>
    </>
  );
}
