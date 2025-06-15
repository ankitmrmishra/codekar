import { Button } from "@/components/ui/button";
import { Roboto } from "next/font/google";
import {
  AppWindowMac,
  ArrowRight,
  BarChart,
  Codesandbox,
  FileCode2,
  Globe,
  SwordsIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BentoGrid from "@/components/ui/BentoGrid";
import Testimonial from "@/components/ui/Testimonial";

const HeroFont = Roboto({ weight: ["600"], subsets: ["cyrillic"] });

export default function Home() {
  return (
    <div className="  flex flex-col justify-center align-middle items-center md:px-32 md:py-32 gap-10 overflow-hidden  ">
      <div className="absolute inset-0 bg-[url('/Grid.svg')] opacity-5 pointer-events-none" />

      {/* this is hero section */}
      <div className="max-w-7xl py-24  pb-10 min-h-max  rounded-2xl  flex md:flex-row flex-col justify-center align-middle items-center">
        {/* Now the main hero section starts */}
        <div className="heading flex flex-col justify-start align-middle items-start relative md:py-14 py-5 gap-4  max-w-3xl">
          <span className=" min-w-52  flex justify-center align-middle items-center text-center  border border- text-white bg-lime-green/25 border-lime-green  py-1  rounded-2xl font-semibold">
            Level Up Your Web Skills
          </span>
          <span
            className={cn(
              "text-5xl md:text-7xl font-bold text-white text-start   relative",
              HeroFont.className
            )}
          >
            Master{" "}
            <span className="bg-lime-green/10 text-white md:px-4 px-1 relative text-start ">
              Frontend
              <span className="bg-lime-green absolute w-1 h-1 right-0 top-0" />
              <span className="bg-lime-green absolute w-1 h-1 left-0 top-0" />
              <span className="bg-lime-green absolute w-1 h-1 right-0 bottom-0" />
              <span className="bg-lime-green absolute w-1 h-1 left-0 bottom-0" />
            </span>{" "}
            Through{" "}
            <span className="relative inline-block">
              <span>Real Challenges</span>
            </span>{" "}
          </span>

          <div className="md:text-base text-sm text-start font-semibold text-white/70 flex flex-col gap-2">
            <span className="flex justify-start  align-middle items-center gap-3">
              <Codesandbox className="" color="#9dff08" /> Real Interview Prep -
              Practice actual machine coding rounds
            </span>
            <span className="flex justify-start  align-middle items-center gap-3">
              <Codesandbox className="" color="#9dff08" /> CSS Battle Arena -
              Creative challenges, pixel-perfect solutions
            </span>
            <span className="flex justify-start  align-middle items-center gap-3">
              <Codesandbox className="" color="#9dff08" /> Global Leaderboards -
              Compete with developers worldwide
            </span>
            <span className="flex justify-start  align-middle items-center gap-3">
              <Codesandbox className="" color="#9dff08" /> Skill Tracking -
              Monitor progress across different domains
            </span>
          </div>

          <div className=" flex gap-3 relative ">
            <Button className="bg-lime-green text-black transition duration-300 hover:cursor-pointer hover:bg-white group rounded-full text-center  flex justify-center align-middle items-center  relative h-full text-lg">
              <span>Join the Arena </span>{" "}
              <ArrowRight className="group-hover:rotate-0 -rotate-45 delay-100 duration-300 ease-in-out transition bg-black p-1 size-8 text-white rounded-full " />
            </Button>
            <Button className="bg-white text-black text-xl py-6 relative hover:bg-black hover:text-white rounded-full">
              Battle For Free
              <span className="absolute right-2 -bottom-7 font-bold text-sm">
                (1 free game credit)
              </span>
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex md:-ml-20 relative opacity-75 ">
          {/* <div className="absolute bg-gradient-to-b from-transparent to-black w-[50rem] h-96 z-40 bottom-0 -right-48" />
          <div className="absolute bg-gradient-to-b from-black to-transparent w-[50rem] h-96 z-40 -top-10 -right-48" /> */}
          <Image
            src={"/CardCSS.svg"}
            alt="CSSCARD"
            width={100}
            height={100}
            className="md:size-[30rem] size-72  -rotate-6"
          />
          <Image
            src={"/budget.svg"}
            alt="CSSCARD"
            width={100}
            height={100}
            className="md:size-[30rem]  size-72 rotate-6"
          />
        </div>
      </div>

      {/* this is why us section */}
      <section className="flex  md:flex-row flex-col gap-10 py-10   min-[]:h-[100vh] justify-center  align-middle items-center ">
        <div className="leftpart max-w-2xl">
          <h1 className="md:text-6xl text-4xl font-medium text-white">
            Why <span className="text-lime-green">CodeKar</span>? <br />
            Because Web Dev Isn&apos;t Just Code It&apos;s Craft.
          </h1>
          <div className="text-white/70 max-w-2xl py-4 md:text-xl text-base">
            Real projects. Real battles. Real growth. Forget toy problems —
            CodeKar helps you build like a pro, think like a system designer,
            and compete like a champ. Level up where it matters most.
          </div>
          <Button className="bg-lime-green text-black transition duration-300 hover:cursor-pointer hover:bg-white group rounded-full text-center  flex justify-center align-middle items-center  relative h-12 text-lg">
            <span>Start Your First Challenge</span>{" "}
            <ArrowRight className="group-hover:rotate-0 -rotate-45 delay-100 duration-300 ease-in-out transition bg-black p-1 size-8 text-white rounded-full " />
          </Button>
        </div>
        <div className="border border-white/20 rounded-4xl w-full max-w-max grid md:grid-cols-2 grid-cols-1 text-white items-center place-content-center place-items-center p-2 relative gap-2 ">
          <div className="absolute left-0 right-0">
            <Globe
              color="#9DFF08"
              className="bg-black size-24 mx-auto  p-3 rounded-full z-40 border border-white/10"
            />
          </div>
          <div className="topleft gap-4 py-10 h-60 md:w-72 md:min-w-full min-w-[93vw] drop-shadow-sm bg-black drop-shadow-white/20 border-white/10 border rounded-3xl flex justify-around align-middle items-center flex-col text-center -z-30">
            <AppWindowMac
              color="#9DFF08"
              className="bg-black size-20 p-5 rounded-xl"
            />
            <div className="text-2xl font-base">Built for the Real World</div>
          </div>
          <div className="topleft gap-4 py-10 h-60 md:w-72 md:min-w-full min-w-[93vw] drop-shadow-sm bg-black drop-shadow-white/20 border-white/10 border rounded-3xl flex justify-around align-middle items-center flex-col text-center -z-30">
            <SwordsIcon
              color="#9DFF08"
              className="bg-black size-20 p-5 rounded-xl"
            />
            <div className="text-2xl font-base">Battle-Tested Challenges</div>
          </div>
          <div className="topleft gap-4 py-10 h-60 md:w-72 md:min-w-full min-w-[93vw] drop-shadow-sm bg-black drop-shadow-white/20 border-white/10 border rounded-3xl flex justify-around align-middle items-center flex-col text-center -z-30">
            <BarChart
              color="#9DFF08"
              className="bg-black size-20 p-5 rounded-xl"
            />
            <div className="text-2xl font-base">Progress That Shows</div>
          </div>
          <div className="topleft gap-4 py-10 h-60 md:w-72 md:min-w-full min-w-[93vw] drop-shadow-sm bg-black drop-shadow-white/20 border-white/10 border rounded-3xl flex justify-around align-middle items-center flex-col text-center -z-30">
            <FileCode2
              color="#9DFF08"
              className="bg-black size-20 p-5 rounded-xl"
            />
            <div className="text-2xl font-base">Global Dev Arena</div>
          </div>
        </div>
      </section>

      <BentoGrid />
      <Testimonial />
    </div>
  );
}
