import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "SwiftFlow - The No Code Swift Editor" },
    {
      name: "SwiftFlow",
      content: "The world's first No Code editor for Swift!",
    },
  ];
};

export default function Header() {
  return (
    <div className="flex flex-row max-w-full justify-center px-4 md:px-8 py-16">
      <div className="flex flex-col w-full max-w-1200 items-center gap-10 md:gap-20">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <img
              className="h-20 w-auto"
              src="app-icon.svg" // Replace with your logo path
              alt="SwiftFlow Logo"
            />
            <span className="text-2xl font-semibold">SwiftFlow</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-center max-w-3xl">
            Leverage the Power of Swift Through a Visual Platform
          </h1>
          <p className="text-center max-w-lg">
            Generates clean, semantic Swift UI code in a visual and responsive
            canvas that’s ready to publish or hand to developers.
          </p>
          <Link
            to="https://forms.fillout.com/t/cgHByMYWPXus"
            target="_blank"
            className="flex flex-row items-center gap-2"
          >
            <span className="text-lg font-semibold text-custom-primary">
              Join The Waitlist
            </span>
            <img
              className="w-auto"
              src="waitlist-icon-color.svg" // Replace with your logo path
              alt="Waitlist Icon"
            />
          </Link>
        </div>
        <div>
          <img
            className="w-auto block dark:hidden"
            src="app-mockup-light.png"
            alt="SwiftFlow App - Light Mode"
          />
          <img
            className="w-auto hidden dark:block"
            src="app-mockup-dark.png"
            alt="SwiftFlow App - Dark Mode"
          />
        </div>
      </div>
    </div>
  );
}
