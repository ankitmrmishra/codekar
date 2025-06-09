import { Button } from "@/components/ui/button";

import MovingcardHeader from "@/components/ui/Headermovingbanner";
import { SparklesCore } from "@/components/ui/Sparkles";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#4E71FF] pb-10 rounded-2xl w-full overflow-hidden ">
      <MovingcardHeader />

      {/* Now the main hero section starts */}
      <div className="heading flex flex-col justify-center align-middle items-center relative py-14 gap-4">
        <span className=" min-w-52  flex justify-center align-middle items-center text-center bg-gradient-to-t from-white  to-black/10 font-bold py-1 border-black rounded-2xl">
          Level Up Your Web Skills
        </span>
        <span className="text-5xl font-bold text-white text-center leading-14 px-2  relative">
          Master{" "}
          <span className="bg-black px-4 relative ">
            Frontend
            <span className="bg-white absolute w-1 h-1 right-0 top-0" />
            <span className="bg-white absolute w-1 h-1 left-0 top-0" />
            <span className="bg-white absolute w-1 h-1 right-0 bottom-0" />
            <span className="bg-white absolute w-1 h-1 left-0 bottom-0" />
          </span>{" "}
          Through
          <span className="relative inline-block">
            <span>Real Challenges</span>

            {/* Sparkles inside the box */}
            <span className="absolute inset-0 w-full h-full z-10 pointer-events-none">
              <SparklesCore
                background="transparent"
                minSize={1}
                maxSize={2}
                particleColor="#ffffff"
                speed={2} // Adjust speed here
                particleDensity={60} // Lower density for less clutter
                className="rounded-md overflow-hidden"
              />
            </span>
          </span>{" "}
        </span>

        <p className="text-xl text-center font-semibold text-white/70">
          The only platform that tests your real world web development skills,
          not just algorithms
        </p>

        <div className=" flex gap-3 relative ">
          <Button className="bg-black text-xl py-6">
            Join the Arena <ArrowRight />
          </Button>
          <Button className="bg-white text-black text-xl py-6 relative">
            Battle For Free
            <span className="absolute right-2 -bottom-7 font-bold text-sm">
              (1 free game credit)
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
