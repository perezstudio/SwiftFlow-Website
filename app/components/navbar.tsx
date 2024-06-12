// app/components/NavBar.jsx

import { Link } from "@remix-run/react";

export default function NavBar() {
  return (
	<nav className="bg-custom-light-gray dark:bg-custom-dark">
	  <div className="max-w-1200 mx-auto">
		<div className="relative flex items-center justify-between h-16">
		  <div className="absolute inset-y-0 left-0 flex flex-row gap-0.5">
			<Link to="/" className="flex items-center">
			  <img
				className="h-8 w-auto"
				src="app-icon.svg" // Replace with your logo path
				alt="SwiftFlow Logo"
			  />
			  <span className="text-xl font-semibold">SwiftFlow</span>
			</Link>
		  </div>
		  <div className="flex flex-grow items-center justify-end sm:items-stretch justify-end">
			<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
			  <Link
				to="/overview"
				className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
			  >
				Overview
			  </Link>
			  <Link
				to="/blog"
				className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
			  >
				Blog
			  </Link>
			</div>
			<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
				<Link
				  to="/waitlist"
				  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
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