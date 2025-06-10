"use client";
import React from "react";

export default function BentoGrid() {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-8 md:grid-rows-8 w-full h-screen gap-2  text-white ">
      <div className="md:col-span-3 row-span-8 md:row-span-6 border border-lime-green/20 rounded-3xl py-5 px-3 relative overflow-clip bg-[#D2FF8E]/6">
        <div className="absolute inset-0 bg-[url('/glowcircle.svg')] bg-no-repeat pointer-events-none mx-auto" />
        <h1 className="text-4xl font-bold">Explore Challenges</h1>
        <div className="py-5">
          Real-world web dev problems. Timed. Thematic. Fun.
        </div>
        <div className="absolute  w-screen top-[50%] md:top-[48%] right-0 -left-9 mx-auto md:rotate-[12deg] rotate-6">
          <MovingBanner skills={skills} />
        </div>{" "}
        <div className="absolute w-screen md:top-[10%] top-[30%] right-0 -left-9 mx-auto md:rotate-[-12deg] -rotate-6">
          <MovingBanner skills={features} />
        </div>
        <div className="">div</div>
      </div>
      <div className="md:col-span-3 md:row-span-3 border border-lime-green/20 rounded-3xl ">
        lkwejf
      </div>
      <div className="md:col-span-2 md:row-span-3 border border-lime-green/20 rounded-3xl ">
        kjenf
      </div>
      <div className="md:col-span-5 md:row-span-3 border border-lime-green/20 rounded-3xl ">
        lknjef
      </div>
    </div>
  );
}

import { motion } from "framer-motion";

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
