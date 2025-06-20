import {
  Github,
  Twitter,
  DiscIcon as Discord,
  Mail,
  Code,
  Trophy,
  Users,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="md:max-w-7xl max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold tracking-wider">
                <span className="text-white">CODE</span>
                <span className="text-[oklch(0.8475_0.2785_132.9)]">KAR</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Master frontend development through real coding challenges. Level
              up your skills with our interactive platform.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors"
              >
                <Discord className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm flex items-center space-x-2"
                >
                  <Code className="h-4 w-4" />
                  <span>Battle Arena</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm flex items-center space-x-2"
                >
                  <Trophy className="h-4 w-4" />
                  <span>Leaderboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm flex items-center space-x-2"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Training</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm flex items-center space-x-2"
                >
                  <Users className="h-4 w-4" />
                  <span>Squad</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[oklch(0.8475_0.2785_132.9)] transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex-1 max-w-md">
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest challenges and updates delivered to your inbox.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[oklch(0.8475_0.2785_132.9)] transition-colors"
                />
                <button className="px-6 py-2 bg-[oklch(0.8475_0.2785_132.9)] text-black font-semibold rounded-lg hover:bg-[oklch(0.8475_0.2785_132.9)]/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded-lg border border-gray-800">
                <div className="w-2 h-2 bg-[oklch(0.8475_0.2785_132.9)] rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">
                  <span className="text-[oklch(0.8475_0.2785_132.9)] font-semibold">
                    1,247
                  </span>{" "}
                  developers online
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 CodeKar. All rights reserved.
          </div>
          <div className="  text-sm">
            <span className="text-gray-400">Made with </span>
            <span className="text-[oklch(0.8475_0.2785_132.9)]">❤️ </span>
            <span className="text-gray-400">
              for developers by{" "}
              <Link
                className="text-lime-green"
                href={"https://github.com/ankitmrmishra"}
              >
                Ankit Mishra
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
