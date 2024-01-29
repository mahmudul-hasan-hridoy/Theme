"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import UserButton from "./user-button"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex">
      <nav
        id="sideNav"
        className={`z-50 flex flex-col h-full text-white w-72 md:w-80 fixed top-0 left-0 transform bg-white text-gray-900 dark:bg-slate-800 dark:text-slate-200 flex-shrink-0 py-6 pr-4 pl-2 transition-transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="/" className="ml-2">
          <img
            src="https://www.codingnepalweb.com/wp-content/uploads/2023/01/codingnepal-navbar-logo-544x180-blue-transparent.png"
            alt="Logo"
            className="h-10"
          />
        </a>

        <ul className="mt-4">
          <li className="nav-item">
            <a
              href="/"
              className={`py-2 mt-2 flex items-center gap-2 text-gray-900 dark:text-slate-200 px-2 font-semibold rounded-md ${
                router.pathname === "/"
                  ? "bg-gray-200 text-gray-900 dark:bg-slate-700 dark:text-slate-200"
                  : "hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-slate-700 dark:hover:text-slate-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className={`py-2 mt-2 flex items-center gap-2 text-gray-900 dark:text-slate-200 px-2 font-semibold rounded-md ${
                router.pathname === "/about"
                  ? "nav-active"
                  : "hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-slate-700 dark:hover:text-slate-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              About
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className={`py-2 mt-2 flex items-center gap-2 text-gray-900 dark:text-slate-200 px-2 font-semibold rounded-md ${
                router.pathname === "/contact"
                  ? "nav-active"
                  : "hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-slate-700 dark:hover:text-slate-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
              Contact
            </a>
          </li>
        <li>
          <UserButton />
        </li>
        </ul>
      </nav>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-600 h-20 p-4 flex items-center justify-between">
          <div className="flex items-center justify-center">
            <a href="/" className="ml-2">
              <img
                src="https://www.codingnepalweb.com/wp-content/uploads/2023/01/codingnepal-navbar-logo-544x180-blue-transparent.png"
                alt="Logo"
                className="h-10"
              />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="menuToggle"
              className={`menu hamburger relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600 ${
                isNavOpen ? "active" : ""
              }`}
              onClick={toggleNav}
            >
              <div>
                <svg
                  className="w-5 h-5 fill-current text-gray-900 dark:text-slate-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <rect y="4" width="24" height="2" rx="1" />
                  <rect y="11" width="24" height="2" rx="1" />
                  <rect y="18" width="24" height="2" rx="1" />
                </svg>
              </div>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;