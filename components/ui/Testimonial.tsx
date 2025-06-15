import React from "react";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

import Person1 from "@/public/people/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg";
import Person2 from "@/public/people/christina-wocintechchat-com-_5_CBVCLBsY-unsplash.jpg";
import Person3 from "@/public/people/gabriel-dizzi-La4ACd7UA8Q-unsplash.jpg";
import Person4 from "@/public/people/hunter-newton-scBTgeG5K5c-unsplash.jpg";
import Person5 from "@/public/people/jack-finnigan-rriAI0nhcbc-unsplash.jpg";
import Person6 from "@/public/people/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import Person7 from "@/public/people/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import Person8 from "@/public/people/laura-chouette-nkWnc-W_GP8-unsplash.jpg";
import Person9 from "@/public/people/ludovic-migneault-EZ4TYgXPNWk-unsplash.jpg";
import Person10 from "@/public/people/medicalert-uk-uXB-7la5vqA-unsplash.jpg";
import Person11 from "@/public/people/ph-m-duy-quang-QGr6H7pri-Q-unsplash.jpg";
import Person12 from "@/public/people/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg";
import Person13 from "@/public/people/tony-luginsland-ZAo0cKz_IKM-unsplash.jpg";
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="bg-white/10 max-h-max py-10 w-screen rounded-4xl max-w-7xl relative overflow-hidden flex flex-col justify-start align-middle">
      <div className="grid md:grid-cols-9 grid-cols-3 -mt-[50rem] md:-mt-0  md:px-10  ">
        <div className="col-span-1 flex flex-col gap-3 -mt-20">
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl" />
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            <Image
              src={Person1}
              alt=""
              width={500}
              height={500}
              className="object-cover  h-[150px] w-[120px] rounded-2xl"
            />
          </div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            <Image
              src={Person2}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3 -mt-36">
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            {" "}
            <Image
              src={Person3}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            {" "}
            <Image
              src={Person4}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3 -mt-48">
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            <Image
              src={Person5}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3 -mt-60">
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            <Image
              src={Person6}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3 -mt-52">
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            <Image
              src={Person7}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3 -mt-60">
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            <Image
              src={Person8}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3 -mt-48">
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            <Image
              src={Person9}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3 -mt-36">
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            {" "}
            <Image
              src={Person10}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            {" "}
            <Image
              src={Person11}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-3 -mt-20">
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl"></div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            {" "}
            <Image
              src={Person12}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
          <div className="bg-white/5 h-[150px] w-[120px] rounded-2xl">
            {" "}
            <Image
              src={Person13}
              alt=""
              width={500}
              height={500}
              className="object-cover h-[150px] w-[120px] rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-5 justify-center align-middle items-center md:py-8 py-4">
        <div className="bg-white/50  max-w-max px-5 font-medium text-lg flex justify-center align-middle items-center rounded-full">
          Testimonial
        </div>
        <div className=" flex-col flex md:text-6xl text-3xl px-2 text-white text-center font-medium md:gap-2 ">
          <span>Trusted By Developers</span>
          <span className="text-white/50">From All Over the World</span>
        </div>
        <Button className="bg-lime-green text-black transition duration-300 hover:cursor-pointer hover:bg-white group rounded-full text-center  flex justify-center align-middle items-center max-w-max relative h-12 text-lg">
          <span>Explore More about CodeKar</span>{" "}
          <ArrowRight className="group-hover:rotate-0 -rotate-45 delay-100 duration-300 ease-in-out transition bg-black p-1 size-8 text-white rounded-full " />
        </Button>
      </div>
    </div>
  );
}
