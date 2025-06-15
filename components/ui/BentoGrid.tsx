"use client";
import React from "react";

import Kohli from "@/public/people/virat.jpg";

import Image from "next/image";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

export default function BentoGrid() {
  return (
    <div className=" flex justify-center align-middle items-center flex-col  gap-6 ">
      <div className="head w-full text-start text-white text-4xl font-medium px-2 py-5">
        What is on Codekar
      </div>
      <div className="grid  max-h-max  grid-cols-1 md:grid-cols-8 md:grid-rows-7 w-full  gap-5  text-white ">
        {/* bento Card 1 */}
        <div className="md:col-span-3 flex flex-col justify-end items-start gap-5   row-span-8 md:row-span-7 border border-lime-green/20 rounded-3xl py-5 px-3 relative  overflow-clip bg-[#D2FF8E]/6">
          <div className="bg-lime-green py-1 rounded-full px-5 text-black font-medium shadow-lg/20 border-white/70 border shadow-lime-green  top-5 left-5">
            Explore Challenges
          </div>
          <div className=" min-h-max h-full w-full relative ">
            <div className="h-10 w-screen bg-lime-green/50 top-52 blur-2xl  absolute -z-20" />
            <Image
              src={"/FolderCard.svg"}
              alt=""
              width={500}
              height={500}
              className="md:blur-xs hover:blur-none transition ease-in-out duration-700 focus:blur-none"
            />
          </div>
          <div className="absolute -z-50 inset-0 bg-[url('/glowcircle.svg')] bg-no-repeat pointer-events-none mx-auto bg-cover opacity-50 " />
          <div className="headings">
            <h1 className="md:text-3xl text-2xl font-bold">
              Conquer Frontend Challenges
            </h1>
            <div className="text-white/60">
              From navbars to dashboards, build what real devs face. Daily
              design problems, leaderboard pressure, and zero fluff.
            </div>
            <Button className="mt-5 bg-lime-green text-black transition duration-300 hover:cursor-pointer hover:bg-white group rounded-full text-center  flex justify-center align-middle items-center  relative py-6 text-lg">
              <span>Start Your Challenge </span>{" "}
              <ArrowRight className="group-hover:rotate-0 -rotate-45 delay-100 duration-300 ease-in-out transition bg-black p-1 size-8 text-white rounded-full " />
            </Button>
          </div>
        </div>
        <div className="md:col-span-5 md:row-span-4 border border-lime-green/20 rounded-3xl relative overflow-clip flex flex-col h-full ">
          <div className="absolute inset-0 bg-[url('/ed.svg')]  pointer-events-none  bg-no-repeat mx-auto left-0 right-0  bg-center hidden md:block -bottom-24  " />
          <div className="z-10 p-5">
            <h1 className="text-3xl font-semibold">Code in the Cloud</h1>
            <span>Compete with developers all over the world</span>
          </div>
          <Image
            src={"/ed.svg"}
            alt=""
            width={500}
            height={500}
            className="object-contain px-2 md:hidden block"
          />
        </div>
        {/* this is card 2 */}
        <div className="md:col-span-3 md:row-span-3 border border-lime-green/20 rounded-3xl relative overflow-clip ">
          <div className="absolute  bg-[url('/eliipse8.svg')] bg-no-repeat pointer-events-none  bg-cover  w-full bg-right inset-0 " />

          <div className="chatUI py-5 flex flex-col justify-start align-middle items-start gap-4 px-7">
            <div className="flex  justify-start align-middle items-center gap-2 w-full md:w-[30rem] mx-auto ">
              <Image
                src={Kohli}
                alt=""
                width={100}
                height={100}
                className="object-cover size-12 rounded-full"
              />
              <div className="bg-lime-green rounded-tl-2xl rounded-tr-2xl rounded-br-2xl h-8 px-6 justify-center flex items-center align-middle text-black w-2/4 py-3 text-lg font-medium ">
                Badhia Khele Ho ekdm
              </div>
            </div>
            <div className="flex  justify-start align-middle items-center gap-2 w-full md:w-[30rem] mx-auto ">
              <Image
                src={Kohli}
                alt=""
                width={100}
                height={100}
                className="object-cover size-12 rounded-full"
              />
              <div className="bg-lime-green rounded-tl-2xl rounded-tr-2xl rounded-br-2xl h-8 px-6 justify-center flex items-center align-middle text-black w-3/4 md:py-5 py-8 text-lg font-medium  leading-4">
                Badhia Khele Ho ekdm, thoda sudhar ki jarurat hai
              </div>
            </div>
          </div>
          <div className="px-1 py-5">
            <h1 className="text-3xl font-semibold px-6">
              Get Instant Feedback
            </h1>
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
      </div>
      <div className="">
        <Button className="bg-lime-green text-black transition duration-300 hover:cursor-pointer hover:bg-white group rounded-full text-center  flex justify-center align-middle items-center  relative h-12 text-lg">
          <span>Explore More about CodeKar</span>{" "}
          <ArrowRight className="group-hover:rotate-0 -rotate-45 delay-100 duration-300 ease-in-out transition bg-black p-1 size-8 text-white rounded-full " />
        </Button>
      </div>
    </div>
  );
}
