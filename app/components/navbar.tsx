import React, { useState } from "react";
import { Link } from "@remix-run/react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-custom-light-gray/70 dark:bg-custom-dark/70 py-2.5 px-8 flex flex-col justify-center backdrop-blur-lg gap-4">
      <div className="max-w-1200 mx-auto w-full">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex flex-row">
            <Link to="/" className="flex flex-row items-center gap-2">
              <img
                className="h-8 w-auto"
                src="app-icon.svg" // Replace with your logo path
                alt="SwiftFlow Logo"
              />
              <span className="text-xl font-semibold">SwiftFlow</span>
            </Link>
          </div>
          <div className="flex flex-grow items-center justify-end sm:items-stretch text-sm font-medium">
            <div className="hidden md:flex md:flex-row gap-6">
              <Link to="/" className="inline-flex items-center">
                Overview
              </Link>
              <Link to="/posts" className="inline-flex items-center">
                Blog
              </Link>
              <Link
                to="https://forms.fillout.com/t/cgHByMYWPXus"
                target="_blank"
                className="px-3 py-1.5 inline-flex items-center border border-transparent rounded-full shadow-sm text-white bg-custom-primary hover:bg-custom-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-secondary items-center gap-2"
              >
                Join The Waitlist
                <img
                  className="w-auto"
                  src="waitlist-icon-white.svg" // Replace with your logo path
                  alt="Waitlist Icon"
                />
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="flex flex-col space-y-1.5 p-4 focus:outline-none"
              >
                <span
                  className={`block w-6 h-0.5 bg-black dark:bg-white rounded-full transform transition duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-black dark:bg-white rounded-full transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col gap-4 py-4 text-2xl font-font-semibold">
            <Link to="/" className="py-2 slide-in-1">
              Overview
            </Link>
            <Link to="/posts" className="py-2 slide-in-2">
              Blog
            </Link>
            <Link
              to="https://forms.fillout.com/t/cgHByMYWPXus"
              target="_blank"
              className="py-2 slide-in-3"
            >
              Join The Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
