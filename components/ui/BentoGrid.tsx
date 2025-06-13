"use client";
import React from "react";
import Jadeja from "@/public/people/jadeja.jpg";
import Kohli from "@/public/people/virat.jpg";
import Pant from "@/public/people/pant.jpg";

export default function BentoGrid() {
  return (
    <div className="grid   grid-cols-1 md:grid-cols-8 md:grid-rows-8 w-full md:h-screen gap-2  text-white ">
      {/* bento Card 1 */}
      <div className="md:col-span-3   row-span-8 md:row-span-6 border border-lime-green/20 rounded-3xl py-5 px-3 relative  overflow-clip bg-[#D2FF8E]/6">
        <div className="absolute -z-50 inset-0 bg-[url('/glowcircle.svg')] bg-no-repeat pointer-events-none mx-auto" />
        <h1 className="text-4xl font-bold">Explore Challenges</h1>
        <div className="py-5">
          Real-world web dev problems. Timed. Thematic. Fun.
        </div>
        <div className="absolute md:block hidden w-screen top-[50%] md:top-[48%] right-0 -left-9 mx-auto md:rotate-[12deg] rotate-6">
          <MovingBanner skills={skills} />
        </div>{" "}
        <div className="absolute md:block hidden w-screen md:top-[10%] top-[30%] right-0 -left-9 mx-auto md:rotate-[-12deg] -rotate-6">
          <MovingBanner skills={features} />
        </div>
        <div className="md:absolute  md:-bottom-20 -bottom-10   md:w-96  left-0 right-0 mx-auto px-4">
          <div className="top3 flex justify-around align-middle items-center w-full   ">
            <div className="1 flex flex-col justify-center align-middle items-center gap-2">
              <div className=" flex flex-col justify-center align-middle items-center">
                <Image
                  src={Jadeja}
                  alt=""
                  width={800}
                  height={800}
                  className="size-12 object-cover rounded-full border border-lime-green"
                />
                <div className="name text-xs text-white/66">Jadeja_sir</div>
              </div>
              <div className="rating text-sm">1625</div>
            </div>
            <div className="2 flex flex-col justify-center align-middle items-center gap-2 mb-20">
              <div className=" flex flex-col justify-center align-middle items-center">
                <Image
                  src={Kohli}
                  alt=""
                  width={800}
                  height={800}
                  className="size-12 object-cover rounded-full border border-lime-green "
                />
                <div className="name text-xs text-white/66">The_GOAT</div>
              </div>
              <div className="rating text-sm">1978</div>
            </div>
            <div className="3 flex flex-col justify-center align-middle items-center gap-2">
              <div className=" flex flex-col justify-center align-middle items-center">
                <Image
                  src={Pant}
                  alt=""
                  width={800}
                  height={800}
                  className="size-12 object-cover rounded-full border border-lime-green"
                />
                <div className="name text-xs text-white/66">Spider-pant</div>
              </div>
              <div className="rating text-sm">1532</div>
            </div>
          </div>
          <div className=" flex flex-col gap-2 ">
            <div className="rest flex justify-between align-middle items-center bg-[#252728] px-3 py-3 rounded-2xl">
              <div className="flex justify-start gap-2 align-middle items-center">
                <div className="num">4</div>
                <Image
                  src={Pant}
                  alt=""
                  width={800}
                  height={800}
                  className="size-8 object-cover rounded-full border border-lime-green"
                />
                <div className="name">Pawan Singh</div>
              </div>
              <div className="pt">1526</div>
            </div>
            <div className="rest flex justify-between align-middle items-center bg-[#252728] px-3 py-3 rounded-2xl">
              <div className="flex justify-start gap-2 align-middle items-center">
                <div className="num">5</div>
                <Image
                  src={Pant}
                  alt=""
                  width={800}
                  height={800}
                  className="size-8 object-cover rounded-full border border-lime-green"
                />
                <div className="name">Pawan Singh</div>
              </div>
              <div className="pt">1526</div>
            </div>
            <div className="rest flex justify-between align-middle items-center bg-[#252728] px-3 py-3 rounded-2xl">
              <div className="flex justify-start gap-2 align-middle items-center">
                <div className="num">6</div>
                <Image
                  src={Pant}
                  alt=""
                  width={800}
                  height={800}
                  className="size-8 object-cover rounded-full border border-lime-green"
                />
                <div className="name">Pawan Singh</div>
              </div>
              <div className="pt">1526</div>
            </div>
          </div>
        </div>
      </div>
      {/* this is card 2 */}
      <div className="md:col-span-3 md:row-span-3 border border-lime-green/20 rounded-3xl relative overflow-clip ">
        <div className="absolute  bg-[url('/eliipse8.svg')] bg-no-repeat pointer-events-none  bg-cover  w-full bg-right inset-0 " />

        <div className="chatUI py-5 flex flex-col justify-start align-middle items-start gap-4">
          <div className="flex  justify-center align-middle items-center gap-2 w-full md:w-[30rem] mx-auto ">
            <Image
              src={Kohli}
              alt=""
              width={100}
              height={100}
              className="object-cover size-12 rounded-full"
            />
            <div className="bg-lime-green rounded-tl-2xl rounded-tr-2xl rounded-br-2xl h-8 px-6 justify-center flex items-center align-middle text-black w-3/4 py-6 text-lg font-medium ">
              Badhia Khele Ho ekdm
            </div>
          </div>
          <div className="flex  justify-center align-middle items-center gap-2 w-full md:w-[30rem] mx-auto ">
            <Image
              src={Kohli}
              alt=""
              width={100}
              height={100}
              className="object-cover size-12 rounded-full"
            />
            <div className="bg-lime-green rounded-tl-2xl rounded-tr-2xl rounded-br-2xl h-8 px-6 justify-center flex items-center align-middle text-black w-3/4 py-6 text-lg font-medium ">
              Badhia Khele Ho ekdm
            </div>
          </div>
        </div>
        <div className="px-1 py-5">
          <h1 className="text-3xl font-semibold px-6">Get Instant Feedback</h1>
          <span className="px-6">No More Waiting, Know where you stand.</span>
        </div>
      </div>
      {/* This is CARD 3 */}
      <div className="md:col-span-2 md:row-span-3 border border-lime-green/20 rounded-3xl relative overflow-clip ">
        <div className="absolute inset-0 bg-[url('/ellipse7.svg')] bg-no-repeat pointer-events-none mx-auto" />
        <div className="headings p-2">
          <h1 className="text-3xl font-semibold">Compete Globally</h1>
          <span>Compete with developers all over the world</span>
        </div>
        <div className="md:absolute bottom-0 right-0 left-0 mx-auto">
          <Image src={"/map.svg"} alt="" width={800} height={800} />
        </div>
      </div>
      {/* this is card 4 */}
      <div className="md:col-span-5 md:row-span-3 border border-lime-green/20 rounded-3xl relative overflow-clip flex flex-col h-full ">
        <div className="absolute inset-0 bg-[url('/Mask.svg')] bg-no-repeat pointer-events-none mx-auto  bg-cover -z-40 " />
        <div className="absolute inset-0 bg-[url('/io.svg')] bg-no-repeat pointer-events-none mx-auto  bg-cover z-50  " />

        <div className="absolute inset-0 bg-[url('/ed.svg')]  pointer-events-none  bg-no-repeat mx-auto left-0 right-0  bg-center hidden md:block -bottom-52  " />
        <div className="z-10 p-5">
          <h1 className="text-3xl font-semibold">Code in the Cloud</h1>
          <span>Compete with developers all over the world</span>
        </div>
        <Image
          src={"/ed.svg"}
          alt=""
          width={500}
          height={500}
          className="object-contain p-2 md:hidden block"
        />
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "MongoDB",
];

const features = [
  "Interview Prep",
  "CSS Battles",
  "Machine Coding Rounds",
  "Frontend Challenges",
  "Live Coding Contests",
  "HTML/CSS Projects",
  "JavaScript Puzzles",
  "Responsive Design Practice",
  "UI/UX Design Tasks",
  "Portfolio Builder",
  "Real-world Mock Interviews",
  "System Design for Frontend",
  "Framework Practice (React, Vue)",
  "Component-based Design",
  "Design to Code Workflows",
];

export function MovingBanner({ skills }: { skills: string[] }) {
  // Duplicate skills list to simulate infinite loop
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="bg-lime-500 w-full p-1 overflow-hidden">
      <motion.div
        className="flex gap-2"
        animate={{ x: ["0%", `-50%`] }} // scroll only half the container since we have 2 copies
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        style={{ width: "200%" }}
      >
        {[1, 2].map((_, i) => (
          <div key={i} className="flex gap-1 shrink-0" style={{ width: "80%" }}>
            {repeatedSkills.map((skill, index) => (
              <motion.div
                key={`${i}-${index}`}
                className="bg-black text-white text-sm rounded-lg px-5  py-1 h-[34px] whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
