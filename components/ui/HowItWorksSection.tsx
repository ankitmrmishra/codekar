import Image from "next/image";
import React from "react";

export default function HowItWorksSection() {
  return (
    <div>
      <div className="heading text-white lg:w-7xl flex flex-col justify-center align-middle items-center gap-[20px] ">
        <div className="heading lg:text-6xl text-3xl text-center font-medium">
          Get Started in 3 easy Steps
        </div>
        <div className="heading lg:text-2xl text-white/50">
          No fluff. Just code, compete, and grow.
        </div>
        <div className="flex justify-center  items-center w-full">
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-[20px] ">
            <div className="col-span-3 bg-white/10 border-lime-green/20 border lg:w-[24rem]  h-[30rem] rounded-2xl p-5 flex justify-start align-middle items-start gap-3 flex-col relative overflow-hidden">
              <div className="bg-white/25 text-lime-green font-bold rounded-full shadow shadow-white/70 size-10 flex justify-center align-middle items-center border border-lime-green ">
                1
              </div>
              <div className="">
                <h1 className="lg:text-4xl font-medium">Sign Up on CodeKar</h1>
                <span className="lg:text-lg text-white/50">
                  Start your journey by creating a free account. Just your name,
                  email, and you&apos;re all set.
                </span>
              </div>
              <div className="absolute  left-0 right-0 -bottom-[20rem] ">
                <Image
                  src={"/99shots_so.png"}
                  alt=""
                  width={500}
                  height={600}
                  className="h-full w-[20rem] object-cover mx-auto "
                />
              </div>
            </div>
            <div className="col-span-3 bg-white/10 border-lime-green/20 border lg:w-[24rem]  h-[30rem] rounded-2xl p-5 flex justify-start align-middle items-start gap-3 flex-col relative overflow-hidden">
              <div className="bg-white/25 text-lime-green font-bold rounded-full shadow shadow-white/70 size-10 flex justify-center align-middle items-center border border-lime-green ">
                2
              </div>

              <div className="">
                <h1 className="lg:text-4xl font-medium">
                  Pick a Track That Suits You
                </h1>
                <span className="lg:text-lg text-white/50">
                  Frontend, CSS Battles, or Fullstack? Select your challenge
                  type and skill bracket.
                </span>
              </div>
              <div className="absolute  left-0 right-0 -bottom-16 md:-bottom-32 ">
                <div className="flex md:-ml-20 relative opacity-75 py-10  ">
                  {/* <div className="absolute bg-gradient-to-b from-transparent to-black w-[50rem] h-96 z-40 bottom-0 -right-48" />
                                        <div className="absolute bg-gradient-to-b from-black to-transparent w-[50rem] h-96 z-40 -top-10 -right-48" /> */}
                  <Image
                    src={"/CardCSS.svg"}
                    alt="CSSCARD"
                    width={100}
                    height={100}
                    className=" size-[20rem]  -rotate-6"
                  />
                  <Image
                    src={"/budget.svg"}
                    alt="CSSCARD"
                    width={100}
                    height={100}
                    className=" size-[20rem] rotate-6"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-3 bg-white/10 border-lime-green/20 border lg:w-[24rem]  h-[30rem] rounded-2xl p-5 flex justify-start align-middle items-start gap-3 flex-col relative overflow-hidden">
              <div className="bg-white/25 text-lime-green font-bold rounded-full shadow shadow-white/70 size-10 flex justify-center align-middle items-center border border-lime-green ">
                3
              </div>

              <div className="">
                <h1 className="lg:text-4xl font-medium">Submit & Get Ranked</h1>
                <span className="lg:text-lg text-white/50">
                  Build in our live editor, get points, and see where you stand
                  on the leaderboard.
                </span>
              </div>
              <div className="absolute  left-0 right-0 -bottom-[20rem] ">
                <Image
                  src={"/37shots_so.png"}
                  alt=""
                  width={500}
                  height={600}
                  className="h-full w-[20rem] object-cover mx-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
