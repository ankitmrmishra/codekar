import React from "react";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="lg:max-w-7xl w-full gap-11 bg-gradient-to-t from-white/50   to-black min-h-96 rounded-4xl grid lg:grid-cols-2 grid-cols-1 text-white px-5 my-20 relative overflow-y-hidden lg:overflow-visible">
      <div className="col-span-1 flex flex-col justify-center align-middle items-start gap-4 ">
        <span className=" lg:min-w-52 w-96 max-w-max px-5  flex justify-center align-middle items-center text-center  border  text-white bg-lime-green/25 border-lime-green  py-1  rounded-2xl font-semibold">
          Start Your Web Dev Challenge Today
        </span>
        <div className="flex flex-col justify-start align-middle items-start gap-3">
          <div className="lg:text-6xl text-3xl font-semibold">
            Your Dev Journey Starts Today
          </div>
          <div className="lg:text-2xl ">
            Your first real-world coding challenge <br /> is one click away.
          </div>
        </div>
        <Button className="bg-lime-green text-black transition duration-300 hover:cursor-pointer hover:bg-white group rounded-full text-center  flex justify-center align-middle items-center max-w-max relative h-12 text-lg">
          <span>Start Your First Challenge</span>{" "}
          <ArrowRight className="group-hover:rotate-0 -rotate-45 delay-100 duration-300 ease-in-out transition bg-black p-1 size-8 text-white rounded-full " />
        </Button>
      </div>
      <div className="col-span-1   flex justify-end align-middle items-end max-h-max ">
        <Image
          src={"/frma.svg"}
          alt=""
          width={500}
          height={500}
          className="  "
        />
      </div>
    </div>
  );
}
