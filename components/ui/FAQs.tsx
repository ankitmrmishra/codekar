"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

export default function FAQs() {
  const [question, setQuestion] = useState<number | null>(null);
  const [categoryies, setCategory] = useState<number | null>(0);
  const toggleQuestion = (index: number) => {
    setQuestion(question === index ? null : index);
  };
  const toggleCategory = (index: number) => {
    setCategory(categoryies === index ? 0 : index);
  };
  return (
    <div className="lg:max-w-7xl max-w-max flex justify-center align-middle items-center flex-col gap-10 lg:min-h-screen h-full   lg:py-50 py-5">
      <div className="headingsandsubheadings text-white text-center">
        <div className="heading lg:text-6xl text-3xl ">
          Frequently Asked Questions
        </div>
        <div className="subheading lg:text-2xl text-lg py-3">
          Still curious? Here&apos;s everything you might want to know about
          CodeKar, how it works, who it&apos;s for, and how it can help you
          level up your web dev journey.
        </div>
      </div>
      <div className="system lg:min-w-3xl flex  lg:max-w-6xl ">
        <div className="lg:p-10 relative  lg:w-7xl ">
          {/* 
          
          
          */}
          {FAQdata.map((category, index) => (
            <div key={index} className="grid md:grid-cols-6 grid-cols-1  ">
              <div className=" col-span-1 flex flex-col justify-center align-middle items-start  ">
                <div
                  onClick={() => toggleCategory(index)}
                  className={cn(
                    "text-white  hover:cursor-pointer hover:bg-lime-green hover:text-black  max-w-max px-3 py-1 rounded-lg flex justify-start align-middle items-start   gap-2 text-xl my-2  ",
                    categoryies === index && "text-lime-green"
                  )}
                >
                  <div
                    className={cn(
                      "w-[5px] h-[1.5rem] bg-lime-green rounded-2xl",
                      index !== categoryies ? "hidden" : "block"
                    )}
                  />
                  {category.category}
                </div>
              </div>
              <div className="lg:col-span-5 lg:absolute  left-[20rem] top-10">
                {categoryies === index ? (
                  <div className="text-white   flex justify-start align-top items-start flex-col  transition ease-in-out duration-1000 ">
                    {category.faqs.map((questions, index) => (
                      <div
                        onClick={() => toggleQuestion(index)}
                        key={index}
                        className=" "
                      >
                        <div className="lg:px-10 py-2 ">
                          <div
                            className={cn(
                              "bg-lime-green/10 rounded-2xl px-4 py-5 hover:cursor-pointer   text-white border-lime-green border  text-lg  lg:w-[50rem] w-[95vw] ",
                              index === question &&
                                "rounded-b-none border-b-lime-green/10"
                            )}
                          >
                            {questions.question}
                          </div>
                          {question == index ? (
                            <div className="bg-lime-green/20 border-l border-r border-b border-lime-green rounded-b-2xl p-10  text-white text-lg  lg:w-[50rem] w-[95vw] ">
                              {questions.answer}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const FAQdata = [
  {
    category: "About",
    faqs: [
      {
        question: "What is CodeKar?",
        answer:
          "CodeKar is a competitive coding platform tailored for web developers. From CSS battles to real-world machine coding rounds, we help you sharpen your frontend and full-stack skills through practical, hands-on challenges.",
      },
      {
        question: "Who is CodeKar for?",
        answer:
          "Whether you're a frontend beginner, a React enthusiast, or a job-seeking web developer preparing for interviews, CodeKar is designed for anyone looking to level up their real-world coding skills.",
      },
      {
        question: "Will solving challenges here help me get a job?",
        answer:
          "Yes — our challenges are modeled after real interview rounds. Many of our users have landed frontend roles at startups and top tech companies by consistently practicing here.",
      },
    ],
  },
  {
    category: "Platform",
    faqs: [
      {
        question:
          "How are the challenges different from LeetCode or HackerRank?",
        answer:
          "Unlike traditional platforms focused on data structures and algorithms, CodeKar focuses on challenges you'll actually face in tech roles — building components, styling layouts, writing performant and accessible code.",
      },
      {
        question: "What are CSS Battles?",
        answer:
          "CSS Battles are time-boxed styling challenges where you recreate a UI layout as pixel-perfect as possible using only HTML and CSS. It’s fun, fast, and incredibly effective for mastering frontend visuals.",
      },
      {
        question: "Are the challenges timed?",
        answer:
          "Yes! Many of our challenges are time-bound to simulate real-world interview conditions. But we also offer untimed practice modes for learning at your own pace.",
      },
      {
        question: "Can I track my progress?",
        answer:
          "Absolutely. We provide dashboards to track your skill growth, leaderboard rankings, and domain-specific strengths like layout skills, responsiveness, and component design.",
      },
      {
        question: "Can I submit my own challenges?",
        answer:
          "We’re working on a community-driven challenge submission feature! Stay tuned — you’ll soon be able to design your own challenges and share them with the community.",
      },
    ],
  },
  {
    category: "Getting Started",
    faqs: [
      {
        question: "Do I need to know React or any framework?",
        answer:
          "Not necessarily. While many challenges use React, we also offer plain HTML/CSS challenges and progressively introduce frameworks based on your comfort level.",
      },
      {
        question: "How do I get started?",
        answer:
          "Sign up for a free account, explore available challenges under each category, and start solving. You’ll gain points, unlock badges, and climb the leaderboard!",
      },
    ],
  },
  {
    category: "Pricing",
    faqs: [
      {
        question: "Is CodeKar free?",
        answer:
          "CodeKar offers both free and premium challenges. You can get started with free challenges, and unlock deeper mock interviews and exclusive battles with a Pro subscription.",
      },
      {
        question: "What does the Pro subscription include?",
        answer:
          "Pro includes access to advanced machine coding rounds, private CSS battles, real interview simulations, exclusive feedback tools, and future AI code reviews.",
      },
    ],
  },
];
