"use client";
import React, { useState } from "react";
import { Atomic_Age } from "next/font/google";
import { cn } from "@/lib/utils";
import { PanelLeftCloseIcon, PanelRightCloseIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const logofont = Atomic_Age({ weight: ["400"], subsets: ["latin"] });

const navLinks = [
  { Item: "Battle Arena", link: "/challenges" },
  { Item: "Leaderboard", link: "/rankings" },
  { Item: "Training", link: "/practice" },
  { Item: "Squad", link: "/community" },
  { Item: "Premium", link: "/upgrade" },
];

export default function Navbar() {
  const [mobileopen, setmobileopen] = useState(false);
  return (
    <div className="px-4 bg-black  text-white py-3 my-1 rounded-2xl">
      {/* here i am firstly creating the mobile version of the navbar */}
      <div className="mobileversion flex justify-between align-middle items-center">
        {/* ///////////////////////// */}
        {/* firstly here goes the logo */}
        <div className={cn("logo text-3xl font-bold", logofont.className)}>
          <span>CODE</span>
          <span>KAR</span>
        </div>
        {/* Logo finishes here */}

        {/* ///////////////////////// */}

        <PanelLeftCloseIcon
          className="size-8"
          onClick={() => setmobileopen((prev) => !prev)}
        />

        {/* Mobile Navbar starts here */}

        {mobileopen ? (
          <div className=" h-screen w-screen bg-black top-0 fixed">
            <div className=" bg-red-200">
              <div className=" bg-[#4E71FF] max-w-max p-2 my-5 fixed right-5 rounded-lg">
                <PanelRightCloseIcon
                  onClick={() => setmobileopen((prev) => !prev)}
                  className="text-white size-8"
                />
              </div>
              <div className="  max-w-max top-5 fixed left-10 rounded-lg">
                <Button className="text-xl bg-[#4E71FF] font-semibold py-5">
                  Battle Now
                </Button>
              </div>
            </div>
            <div className="items flex flex-col justify-center gap-5 align-middle h-full ">
              {navLinks.map((nav, idx) => (
                <Link
                  className="text-2xl text-[#4E71FF] w-full flex justify-center align-middle items-center flex-col"
                  key={idx}
                  href={nav.link}
                >
                  {nav.Item}
                  <Separator className="my-2 bg-white/20 w-10" />
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
