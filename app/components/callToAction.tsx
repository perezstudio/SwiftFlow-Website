import { Link } from "@remix-run/react"

export default function CallToAction() {
	return (
		<div className="flex flex-row max-w-full justify-center px-8 py-16 bg-gradient-to-b from-custom-primary to-custom-secondary">
			<div className="flex flex-col w-full max-w-1200 items-center gap-6 bg-white dark:bg-black rounded-3xl p-8">
				<div className="flex flex-col items-center gap-4">
					<img
					className="h-20 w-auto"
					src="app-icon.svg" // Replace with your logo path
					alt="SwiftFlow Logo"
					/>
					<span className="text-2xl font-semibold">SwiftFlow</span>
			  	</div>
				<div className="max-w-lg flex flex-col gap-1">
					<h2 className="text-4xl font-semibold text-center">Join Our Waitlist</h2>
					<p className="text-center">Bring your ideas to life quickly and easily without writing a single line of code. Sign up today and join a community of innovators turning their visions into beautifully crafted, fully functional apps.</p>
				</div>
				<Link to="/" className="flex items-center">
					<span className="text-lg font-semibold text-custom-primary">Join The Waitlist</span>
					{/* <img
					className="h-8 w-auto"
					src="app-icon.svg" // Replace with your logo path
					alt="SwiftFlow Logo"
					/> */}
			  	</Link>
			</div>
		</div>
	)
}