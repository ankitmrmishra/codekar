"use client";
import React, { useState } from "react";
import { Atomic_Age } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  PanelLeftCloseIcon,
  PanelRightCloseIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { redirect } from "next/navigation";

const logofont = Atomic_Age({ weight: ["400"], subsets: ["latin"] });

/**
 *
 */

const navLinks = [
  { Item: "Battle Arena", link: "/challenges" },
  { Item: "Leaderboard", link: "/rankings" },
  { Item: "Training", link: "/practice" },
  { Item: "Squad", link: "/community" },
  { Item: "Premium", link: "/upgrade" },
];

export default function Navbar() {
  const [mobileopen, setmobileopen] = useState(false);

  /**
   * this here i am getting the server session to get whether the user is signed in or not
   * if it is not signed in i will display the same login and join buttons
   * if it is signed in i have to extract the user data and i have to create the profile section
   *
   */

  const { data: session } = useSession();

  const userprofileImage: string | null | undefined = session?.user?.image;

  return (
    <div className="  text-white flex fixed z-50 justify-center items-center align-middle pb-5 left-0 right-0 top-0">
      {/* here i am firstly creating the mobile version of the navbar */}
      <div className="mobileversion backdrop-blur-3xl  min-w-[95vw]  flex justify-between align-middle items-center md:hidden py-3 my-1 rounded-2xl px-4">
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
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* Mobile Navbar starts here */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}
        {/* ///////////////////////// */}

        {mobileopen ? (
          <div className=" h-screen w-screen bg-black -top-2 fixed">
            <div className=" bg-red-200">
              <div className="  max-w-max p-2 my-5 fixed right-5 rounded-lg">
                <PanelRightCloseIcon
                  color="#9DFF08"
                  onClick={() => setmobileopen((prev) => !prev)}
                  className="text-black size-8"
                />
              </div>
              {/* <div className="  max-w-max top-5 fixed left-10 rounded-lg">
                <Button className="text-xl text-black bg-lime-green font-semibold py-5">
                  Battle Now
                </Button>
              </div> */}
            </div>
            <div className="items flex flex-col justify-center gap-5 align-middle h-full ">
              {navLinks.map((nav, idx) => (
                <Link
                  className="text-2xl hover:text-lime-green text-white w-full flex justify-center align-middle items-center flex-col"
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
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* NOW FOR THE DESKTOP VERSION */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}
      {/* ///////////////////////// */}

      <div className=" mx-auto desktopnavbar min-w-7xl bg-gradient-to-b  text-white   backdrop-blur-3xl   hidden md:flex justify-between align-middle items-center  py-3 my-1 rounded-2xl px-4">
        <div
          className={cn(
            "logo text-3xl text-white font-bold",
            logofont.className
          )}
        >
          <span>CODE</span>
          <span>KAR</span>
        </div>
        <div className="items flex items-center align-middle  justify-center  h-full  min-w-2xl gap-8">
          {navLinks.map((nav, idx) => (
            <Link
              className="text-base text-white hover:text-lime-green w-full flex justify-center align-middle items-center flex-col max-w-max"
              key={idx}
              href={nav.link}
            >
              {nav.Item}
            </Link>
          ))}
        </div>
        {/* Here we are working on the profile and login and logout and profile if session found */}
        <div className="">
          {session?.user ? (
            <div className="outline-none">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="white group ">
                    <Image
                      src={userprofileImage || ""}
                      alt=""
                      width={500}
                      height={500}
                      className="size-14 rounded-full mx-auto object-cover group-hover:border group-hover:border-lime-green"
                    />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-lime-green bg-black">
                  <DropdownMenuLabel className="text-white/20">
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      className="hover:bg-lime-green hover:text-black hover:font-medium"
                      onClick={() => redirect("/Userprofile")}
                    >
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="hover:bg-lime-green hover:text-black hover:font-medium"
                      onClick={() => signOut()}
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex gap-3 justify-center align-middle items-center">
              <Button className="bg-lime-green text-black transition duration-300 hover:cursor-pointer hover:bg-white group rounded-full text-center  flex justify-center align-middle items-center  relative h-full text-lg">
                <span>Join the Arena </span>{" "}
                <ArrowRight className="group-hover:rotate-0 -rotate-45 delay-100 duration-300 ease-in-out transition bg-black p-1 size-8 text-white rounded-full " />
              </Button>
              <Button
                onClick={() => signIn("github")}
                variant={"link"}
                className=" text-white  py-z relative h-full hover:cursor-pointer text-lg"
              >
                LogIn
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
