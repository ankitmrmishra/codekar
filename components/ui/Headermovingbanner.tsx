"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

interface cardprops {
  id: number;
  username: string;
  avatar: string;
  action: "won" | "challenging" | "joined";
  challenge: string;
  timeAgo: string;
  score: number | null;
  actionColor: string;
}
interface MovingcardHeaderProps {
  data: cardprops[];
}

export function Headermovingbanner({ data }: MovingcardHeaderProps) {
  const getGlassEffect = (action: string) => {
    const baseGlass =
      "backdrop-blur-xl bg-gradient-to-br border shadow-lg hover:shadow-xl transition-all duration-300 ease-out";

    const actionEffects = {
      won: "from-white to-[#00ff88]/80 border-black shadow-[0_8px_32px_rgba(0,255,136,0.15)] hover:shadow-[0_8px_32px_rgba(0,255,136,0.25)] hover:from-white/25 hover:to-[#00ff88]/15",
      challenging:
        "from-white to-[#ff6b35]/80 text-black border-black shadow-[0_8px_32px_rgba(255,107,53,0.15)] hover:shadow-[0_8px_32px_rgba(255,107,53,0.25)] hover:from-white/25 hover:to-[#ff6b35]/15",
      joined:
        "from-white to-[#00d4ff] border-black shadow-[0_8px_32px_rgba(0,212,255,0.15)] hover:shadow-[0_8px_32px_rgba(0,212,255,0.25)] hover:from-white/25 hover:to-[#00d4ff]/15",
    };

    return `${baseGlass} ${
      actionEffects[action as keyof typeof actionEffects]
    }`;
  };
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-4"
        animate={{
          x: ["0%", `-${100 / 1.5}%`],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Adjust speed here (lower = faster)
            ease: "linear",
          },
        }}
        style={{ width: `${200 * data.length}%` }}
      >
        {[...data, ...data, ...data].map((item, index) => {
          return (
            <div
              key={`${item.id}-${index}`}
              className={cn(
                "flex items-center gap-2 border p-2  min-w-[18rem] rounded-2xl",
                getGlassEffect(item.action)
              )}
            >
              <img
                src={item.avatar}
                alt={item.username}
                className="w-8 h-8 rounded-full"
              />
              <div className="w-full">
                <p className="flex justify-between  w-full">
                  <span className="font-semibold">{item.username}</span>{" "}
                  <span className="uppercase font-semibold">
                    {" "}
                    {item.action}{" "}
                  </span>
                </p>
                <span className="text-sm text-white hidden">
                  {item.challenge}
                </span>

                <p className="text-xs text-white hidden">{item.timeAgo}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function MovingcardHeader() {
  return (
    <div className="">
      <Headermovingbanner data={liveActivity} />
    </div>
  );
}

const liveActivity: cardprops[] = [
  {
    id: 1,
    username: "priya_codes",
    avatar: "https://i.pravatar.cc/40?img=1",
    action: "won",
    challenge: "CSS Battle: Responsive Card",
    timeAgo: "2s ago",
    score: 98,
    actionColor: "#00ff88",
  },
  {
    id: 2,
    username: "arjun_dev",
    avatar: "https://i.pravatar.cc/40?img=3",
    action: "challenging",
    challenge: "React Component Builder",
    timeAgo: "5s ago",
    score: null,
    actionColor: "#ff6b35",
  },
  {
    id: 3,
    username: "sneha_frontend",
    avatar: "https://i.pravatar.cc/40?img=9",
    action: "joined",
    challenge: "Machine Coding: Todo App",
    timeAgo: "8s ago",
    score: null,
    actionColor: "#00d4ff",
  },
  {
    id: 4,
    username: "vikram_js",
    avatar: "https://i.pravatar.cc/40?img=7",
    action: "won",
    challenge: "Performance Optimization",
    timeAgo: "12s ago",
    score: 94,
    actionColor: "#00ff88",
  },
  {
    id: 5,
    username: "ananya_react",
    avatar: "https://i.pravatar.cc/40?img=5",
    action: "challenging",
    challenge: "CSS Grid Mastery",
    timeAgo: "15s ago",
    score: null,
    actionColor: "#ff6b35",
  },
  {
    id: 6,
    username: "rohit_fullstack",
    avatar: "https://i.pravatar.cc/40?img=8",
    action: "joined",
    challenge: "API Integration Challenge",
    timeAgo: "18s ago",
    score: null,
    actionColor: "#00d4ff",
  },
  {
    id: 7,
    username: "kavya_css",
    avatar: "https://i.pravatar.cc/40?img=2",
    action: "won",
    challenge: "Animation Showdown",
    timeAgo: "22s ago",
    score: 96,
    actionColor: "#00ff88",
  },
  {
    id: 8,
    username: "dev_aditya",
    avatar: "https://i.pravatar.cc/40?img=6",
    action: "challenging",
    challenge: "TypeScript Ninja",
    timeAgo: "25s ago",
    score: null,
    actionColor: "#ff6b35",
  },
  {
    id: 9,
    username: "nisha_ui",
    avatar: "https://i.pravatar.cc/40?img=4",
    action: "joined",
    challenge: "Mobile-First Design",
    timeAgo: "28s ago",
    score: null,
    actionColor: "#00d4ff",
  },
  {
    id: 10,
    username: "karan_backend",
    avatar: "https://i.pravatar.cc/40?img=12",
    action: "won",
    challenge: "Database Query Speed",
    timeAgo: "32s ago",
    score: 91,
    actionColor: "#00ff88",
  },
];
