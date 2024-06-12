// app/components/NavBar.jsx

import { Link } from "@remix-run/react";

export default function NavBar() {
  return (
	<nav className="bg-custom-light-gray dark:bg-custom-dark py-2.5 px-2 flex flex-row justify-center">
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
			<div className="flex flex-row gap-6">
			  <Link
				to="/overview"
				className="inline-flex items-center"
			  >
				Overview
			  </Link>
			  <Link
				to="/blog"
				className="inline-flex items-center"
			  >
				Blog
			  </Link>
			  <Link
				  to="/waitlist"
				  className="px-3 py-1.5 inline-flex items-center border border-transparent rounded-full shadow-sm text-white bg-custom-primary hover:bg-custom-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-secondary"
				>
				Join The Waitlist
			    </Link>
			</div>
		  </div>
		</div>
	  </div>
	</nav>
  );
}