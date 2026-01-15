import { useState } from "react";
import {
	Calendar,
	MapPin,
	Trophy,
	Users,
	Clock,
	Star,
	Shield,
	ArrowRight,
	ChevronRight,
	Plus,
	Minus,
	Zap,
	Globe,
	Cpu,
	Code,
	Terminal,
} from "lucide-react";

const Events = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [openFAQ, setOpenFAQ] = useState(null);

	const EVENTS_DATA = {
		featured: {
			id: "featured",
			title: "HackSecure 2026:",
			subtitle: "The Neural Nexus",
			description:
				"Join 500+ developers for a 48-hour intense coding journey focused on AI, Cybersecurity, and Blockchain. Build the future of secure intelligence.",
			date: "Oct 15 - 17, 2026",
			time: "48 Hours",
			location: "IIT Prayagraj (Hybrid)",
			prizePool: "₹2,00,000",
			teamSize: "2-4 Members",
			spots: "500+ Participants",
			category: "hackathon",
			status: "featured",
		},
		events: [
			{
				id: 1,
				title: "Zero Trust Architecture",
				description:
					"A deep dive into securing enterprise networks using modern zero-trust principles and identity management.",
				date: "Sept 20, 2026",
				time: "10:00 AM",
				location: "Zoom / Online",
				mode: "online",
				category: "workshop",
				status: "open",
				difficulty: "Advanced",
				seats: 50,
			},
			{
				id: 2,
				title: "Capture The Flag: Alpha",
				description:
					"Our flagship CTF competition. Solve cryptographic puzzles, find hidden flags, and top the leaderboard.",
				date: "Sept 28, 2026",
				time: "09:00 PM",
				location: "CTF Platform",
				mode: "online",
				category: "competition",
				status: "filling",
				difficulty: "Intermediate",
				seats: 100,
			},
			{
				id: 3,
				title: "Future of Quantum Cryptography",
				description:
					"Keynote by Dr. Sarah Chen on how quantum computing will redefine encryption in the next decade.",
				date: "Oct 05, 2026",
				time: "05:00 PM",
				location: "Auditorium B",
				mode: "offline",
				category: "talk",
				status: "closed",
				difficulty: "All Levels",
				seats: 200,
			},
			{
				id: 4,
				title: "Web3 & Smart Contracts",
				description:
					"Hands-on session on building secure Solidity contracts and auditing common vulnerabilities.",
				date: "Nov 12, 2026",
				time: "02:00 PM",
				location: "Innovation Hub",
				mode: "offline",
				category: "workshop",
				status: "upcoming",
				difficulty: "Intermediate",
				seats: 40,
			},
			{
				id: 5,
				title: "Career in Cybersecurity",
				description:
					"Interact with CISOs from top tech companies and learn about the evolving landscape of security careers.",
				date: "Nov 15, 2026",
				time: "04:00 PM",
				location: "Discord Stage",
				mode: "online",
				category: "talk",
				status: "open",
				difficulty: "All Levels",
				seats: 500,
			},
			{
				id: 6,
				title: "Bug Bounty Hunter Pro",
				description:
					"Learn real-world bug hunting techniques from industry experts and earn your first bounty.",
				date: "Nov 20, 2026",
				time: "11:00 AM",
				location: "Online + Lab",
				mode: "hybrid",
				category: "workshop",
				status: "upcoming",
				difficulty: "Advanced",
				seats: 30,
			},
		],
	};

	const FAQ_DATA = [
		{
			question: "Who can participate?",
			answer: "Any student currently enrolled in a university or a recent graduate (within 1 year) can participate. We also have open categories for working professionals in specific workshops.",
		},
		{
			question: "Is there a registration fee?",
			answer: "Registration for the Main Hackathon is completely FREE. Some specialized workshops may have a nominal fee for certificates and resources.",
		},
		{
			question: "What is the team size?",
			answer: "For HackSecure 2026, teams must consist of 2 to 4 members. Solo entries are not allowed for the main hackathon but are welcome for CTF and Tech Talks.",
		},
		{
			question: "What are the prizes?",
			answer: "The main hackathon has a prize pool of ₹2,00,000 distributed across 1st, 2nd, and 3rd positions. Plus, we have special awards for Best Security Implementation, Most Innovative Idea, and more.",
		},
		{
			question: "How do I get to the venue?",
			answer: "IIT Prayagraj is well-connected by rail and air. We provide shuttle services from the railway station to the campus. Detailed travel guides will be shared post-registration.",
		},
	];

	const CATEGORIES = [
		{ id: "all", label: "All Events" },
		{ id: "hackathon", label: "Main Hackathon" },
		{ id: "workshop", label: "Workshops" },
		{ id: "competition", label: "CTF & Games" },
		{ id: "talk", label: "Tech Talks" },
	];

	const getStatusConfig = (status) => {
		switch (status) {
			case "open":
				return {
					label: "Registration Open",
					color: "text-green-400",
					bg: "bg-green-400/10",
					dot: "bg-green-400",
				};
			case "filling":
				return {
					label: "Filling Fast",
					color: "text-yellow-400",
					bg: "bg-yellow-400/10",
					dot: "bg-yellow-400",
				};
			case "upcoming":
				return {
					label: "Upcoming",
					color: "text-blue-400",
					bg: "bg-blue-400/10",
					dot: "bg-blue-400",
				};
			case "closed":
				return {
					label: "Registration Closed",
					color: "text-gray-500",
					bg: "bg-gray-500/10",
					dot: "bg-gray-500",
				};
			default:
				return {
					label: "Unknown",
					color: "text-gray-400",
					bg: "bg-gray-500/10",
					dot: "bg-gray-500",
				};
		}
	};

	const getCategoryIcon = (category) => {
		switch (category) {
			case "workshop":
				return "🧠";
			case "competition":
				return "🎯";
			case "talk":
				return "🎤";
			case "hackathon":
				return "🚀";
			default:
				return "📅";
		}
	};

	const filteredEvents =
		activeCategory === "all"
			? EVENTS_DATA.events
			: EVENTS_DATA.events.filter((e) => e.category === activeCategory);

	return (
		<div className="min-h-screen bg-[#0a0a0a] text-white">
			{/* Hero Section */}
			<section className="pt-32 pb-16 px-4 relative overflow-hidden">
				<div className="absolute top-1/4 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
				<div
					className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "700ms" }}
				/>

				<div className="max-w-4xl mx-auto text-center relative z-10">
					<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-600/40 bg-red-600/5 mb-8">
						<div className="w-3 h-3 bg-red-500 rounded-full animate-spin" />
						<span className="text-xs font-bold uppercase tracking-widest text-red-500">
							National Level Hackathon
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
						<span className="text-white">Events / </span>
						<span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
							Hackathon Events
						</span>
					</h1>

					<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
						Explore all Hack Secure events & activities. From
						deep-dive workshops to the nation's most competitive
						coding battles.
					</p>

					<div className="flex flex-wrap justify-center gap-8 md:gap-16">
						<div className="text-center group cursor-pointer">
							<div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-red-500 transition-colors duration-300">
								10+
							</div>
							<div className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
								Events
							</div>
						</div>
						<div className="text-center group cursor-pointer">
							<div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-red-500 transition-colors duration-300">
								500+
							</div>
							<div className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
								Participants
							</div>
						</div>
						<div className="text-center group cursor-pointer">
							<div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-red-500 transition-colors duration-300">
								₹2L+
							</div>
							<div className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
								Prizes
							</div>
						</div>
						<div className="text-center group cursor-pointer">
							<div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-red-500 transition-colors duration-300">
								50+
							</div>
							<div className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
								Speakers
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Category Filter */}
			<section className="max-w-7xl mx-auto px-4 mb-16">
				<div className="flex flex-wrap justify-center gap-3">
					{CATEGORIES.map((category) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${
								activeCategory === category.id
									? "bg-red-600 border-red-600 shadow-lg shadow-red-600/30 text-white"
									: "border-white/10 hover:border-red-600/50 bg-[#111] text-gray-400 hover:text-white"
							}`}
						>
							<span className="text-sm font-semibold">
								{category.label}
							</span>
						</button>
					))}
				</div>
			</section>

			{/* Featured Event */}
			{(activeCategory === "all" || activeCategory === "hackathon") && (
				<section className="max-w-7xl mx-auto px-4 pb-16">
					<div className="relative group">
						<div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-60 transition-opacity duration-500" />

						<div className="relative bg-[#0d0d0d] rounded-2xl p-8 md:p-10 border border-red-600/20 flex flex-col lg:flex-row items-center gap-10">
							<div className="lg:w-1/2">
								<div className="flex items-center gap-3 mb-4">
									<span className="bg-gradient-to-r from-red-600 to-red-700 text-[10px] font-black uppercase px-3 py-1.5 rounded-lg tracking-widest text-white shadow-lg">
										Featured Event
									</span>
									<span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider flex items-center gap-1">
										<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
										Registration Open
									</span>
								</div>

								<h2 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
									{EVENTS_DATA.featured.title}{" "}
									<span className="text-red-500">
										{EVENTS_DATA.featured.subtitle}
									</span>
								</h2>

								<p className="text-gray-400 mb-8 text-lg leading-relaxed">
									{EVENTS_DATA.featured.description}
								</p>

								<div className="grid grid-cols-2 gap-5 mb-8">
									<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-red-600/30 transition-colors duration-300">
										<div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
											<Calendar
												size={14}
												className="text-red-500"
											/>
										</div>
										<div>
											<div className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
												Date
											</div>
											<div className="text-sm font-medium text-gray-200">
												{EVENTS_DATA.featured.date}
											</div>
										</div>
									</div>
									<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-red-600/30 transition-colors duration-300">
										<div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
											<Clock
												size={14}
												className="text-red-500"
											/>
										</div>
										<div>
											<div className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
												Duration
											</div>
											<div className="text-sm font-medium text-gray-200">
												{EVENTS_DATA.featured.time}
											</div>
										</div>
									</div>
									<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-red-600/30 transition-colors duration-300">
										<div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
											<MapPin
												size={14}
												className="text-red-500"
											/>
										</div>
										<div>
											<div className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
												Location
											</div>
											<div className="text-sm font-medium text-gray-200">
												{EVENTS_DATA.featured.location}
											</div>
										</div>
									</div>
									<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-red-600/30 transition-colors duration-300">
										<div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
											<Users
												size={14}
												className="text-red-500"
											/>
										</div>
										<div>
											<div className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
												Team Size
											</div>
											<div className="text-sm font-medium text-gray-200">
												{EVENTS_DATA.featured.teamSize}
											</div>
										</div>
									</div>
									<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-red-600/30 transition-colors duration-300">
										<div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
											<Trophy
												size={14}
												className="text-red-500"
											/>
										</div>
										<div>
											<div className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
												Prize Pool
											</div>
											<div className="text-sm font-medium text-gray-200">
												{EVENTS_DATA.featured.prizePool}
											</div>
										</div>
									</div>
									<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-red-600/30 transition-colors duration-300">
										<div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
											<Star
												size={14}
												className="text-red-500"
											/>
										</div>
										<div>
											<div className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">
												Participants
											</div>
											<div className="text-sm font-medium text-gray-200">
												{EVENTS_DATA.featured.spots}
											</div>
										</div>
									</div>
								</div>

								<div className="flex flex-wrap gap-4">
									<button className="group relative bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold uppercase tracking-tighter transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50">
										<span className="relative z-10 flex items-center gap-2">
											Register Now
											<ArrowRight
												size={16}
												className="group-hover:translate-x-1 transition-transform"
											/>
										</span>
									</button>
									<button className="group px-8 py-3.5 rounded-lg font-bold uppercase tracking-tighter transition-all duration-300 border border-white/20 hover:border-red-600 text-white hover:bg-red-600/10">
										View Handbook
									</button>
								</div>
							</div>

							<div className="lg:w-1/2 w-full h-64 lg:h-96 bg-gradient-to-br from-red-900/20 via-black to-[#0a0a0a] rounded-xl border border-white/5 overflow-hidden relative">
								<div
									className="absolute inset-0 opacity-20"
									style={{
										backgroundImage:
											"linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)",
										backgroundSize: "30px 30px",
									}}
								/>

								<img
									src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
									alt="Hackathon"
									className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
								/>

								<div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-red-600/30">
									<span className="text-xs font-bold text-red-500 uppercase tracking-wider">
										🚀 Main Event
									</span>
								</div>

								<div className="absolute bottom-4 left-4 text-xs font-mono text-red-500/50">
									<div>{">"} Initialize hackathon.exe</div>
									<div>{">"} Loading neural_core...</div>
									<div className="text-green-500">
										{">"} System Ready
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Events Grid */}
			<main className="max-w-7xl mx-auto px-4 pb-24">
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-2xl font-bold uppercase tracking-tighter flex items-center gap-3 text-white">
						<span className="w-1 h-8 bg-red-600 rounded-full" />
						{activeCategory === "all"
							? "All Events"
							: CATEGORIES.find((c) => c.id === activeCategory)
									?.label}
					</h2>
					<span className="text-sm text-gray-500">
						{filteredEvents.length} event
						{filteredEvents.length !== 1 ? "s" : ""} found
					</span>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredEvents.map((event) => {
						const statusConfig = getStatusConfig(event.status);
						return (
							<div
								key={event.id}
								className="group bg-[#0d0d0d] p-6 rounded-xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/10 flex flex-col h-full"
							>
								<div className="flex justify-between items-start mb-4">
									<div className="flex items-center gap-2">
										<span className="text-2xl">
											{getCategoryIcon(event.category)}
										</span>
										<span className="bg-white/5 text-[10px] font-bold px-2.5 py-1 rounded text-gray-300 uppercase tracking-tighter">
											{event.category}
										</span>
									</div>
									<span
										className={`text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider flex items-center gap-1.5 ${statusConfig.bg} ${statusConfig.color}`}
									>
										<span
											className={`w-1.5 h-1.5 rounded-full ${
												statusConfig.dot
											} ${
												event.status === "open"
													? "animate-pulse"
													: ""
											}`}
										/>
										{statusConfig.label}
									</span>
								</div>

								<h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors duration-300">
									{event.title}
								</h3>

								<p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
									{event.description}
								</p>

								<div className="space-y-3 mb-6">
									<div className="flex items-center gap-3 text-xs text-gray-500">
										<Calendar
											size={12}
											className="text-red-500"
										/>
										<span>
											{event.date} • {event.time}
										</span>
									</div>
									<div className="flex items-center gap-3 text-xs text-gray-500">
										<MapPin
											size={12}
											className="text-red-500"
										/>
										<span>{event.location}</span>
									</div>
									<div className="flex items-center gap-3 text-xs text-gray-500">
										<Shield
											size={12}
											className="text-red-500"
										/>
										<span>
											{event.difficulty} • {event.seats}{" "}
											seats
										</span>
									</div>
								</div>

								<button
									className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
										event.status === "closed"
											? "border border-white/10 text-gray-600 cursor-not-allowed"
											: "border border-red-600/40 text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600"
									}`}
								>
									{event.status === "open" && "Register Now"}
									{event.status === "filling" && "Join Now"}
									{event.status === "upcoming" && "Notify Me"}
									{event.status === "closed" &&
										"View Recording"}
								</button>
							</div>
						);
					})}
				</div>

				{filteredEvents.length === 0 && (
					<div className="text-center py-20">
						<div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
							<Calendar className="w-8 h-8 text-gray-600" />
						</div>
						<h3 className="text-xl font-bold text-gray-400 mb-2">
							No events found
						</h3>
						<p className="text-gray-600">
							Try selecting a different category
						</p>
					</div>
				)}
			</main>

			{/* Stats Section */}
			<section className="py-16 px-4 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10" />

				<div className="max-w-6xl mx-auto relative z-10">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{
								icon: Code,
								value: "500+",
								label: "Devs Competing",
								color: "text-red-500",
							},
							{
								icon: Trophy,
								value: "₹2L+",
								label: "Total Prizes",
								color: "text-yellow-500",
							},
							{
								icon: Clock,
								value: "48hrs",
								label: "Non-Stop Coding",
								color: "text-blue-500",
							},
							{
								icon: Users,
								value: "50+",
								label: "Mentors",
								color: "text-green-500",
							},
						].map((stat, index) => (
							<div
								key={index}
								className="group text-center p-6 rounded-2xl bg-[#0d0d0d] border border-white/10 hover:border-red-600/30 transition-all duration-300"
							>
								<div className="w-14 h-14 bg-gradient-to-br from-red-600/20 to-transparent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
									<stat.icon
										size={24}
										className={stat.color}
									/>
								</div>
								<div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-red-500 transition-colors duration-300">
									{stat.value}
								</div>
								<div className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Venue Section */}
			<section className="bg-[#0a0a0a] py-20 px-4 border-y border-white/5">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col lg:flex-row items-center gap-12">
						<div className="lg:w-1/2">
							<h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase tracking-tighter">
								Event{" "}
								<span className="text-red-600">Venue</span>
							</h2>

							<div className="space-y-8">
								<div className="flex items-start gap-5 group cursor-pointer">
									<div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 text-2xl flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
										<MapPin className="w-6 h-6" />
									</div>
									<div>
										<h4 className="font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">
											IIT Prayagraj Campus
										</h4>
										<p className="text-gray-400 leading-relaxed">
											Main Auditorium & CS Block, Jhalwa,
											Prayagraj, Uttar Pradesh 211015
										</p>
										<div className="mt-2 text-red-500 text-sm font-medium flex items-center gap-1 group-hover:translate-x-2 transition-transform">
											Get Directions{" "}
											<ArrowRight size={14} />
										</div>
									</div>
								</div>

								<div className="flex items-start gap-5 group cursor-pointer">
									<div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 text-2xl flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
										<Globe className="w-6 h-6" />
									</div>
									<div>
										<h4 className="font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">
											Accommodation
										</h4>
										<p className="text-gray-400 leading-relaxed">
											Campus hostelling available for
											shortlisted outstation participants.
											Limited slots - register early to
											secure your stay.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-5 group cursor-pointer">
									<div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 text-2xl flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
										<Cpu className="w-6 h-6" />
									</div>
									<div>
										<h4 className="font-bold text-xl mb-2 group-hover:text-red-500 transition-colors">
											Transport
										</h4>
										<p className="text-gray-400 leading-relaxed">
											Free shuttle services from Prayagraj
											Junction & Airport. Registered
											participants will receive detailed
											transport guides via email.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="lg:w-1/2 w-full">
							<div className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 group">
								<img
									src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000"
									className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000"
									alt="IIT Prayagraj"
								/>

								<div
									className="absolute inset-0 opacity-30"
									style={{
										backgroundImage:
											"linear-gradient(rgba(255,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px)",
										backgroundSize: "40px 40px",
									}}
								/>

								<div className="absolute inset-0 flex items-center justify-center">
									<div className="relative">
										<div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-25" />
										<div className="relative bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-red-600/50 animate-bounce">
											<MapPin className="w-8 h-8 text-white" />
										</div>
									</div>
								</div>

								<div className="absolute bottom-6 left-6 right-6">
									<div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-xl p-4">
										<div className="flex items-center justify-between">
											<div>
												<div className="text-sm font-bold text-white">
													IIT Prayagraj
												</div>
												<div className="text-xs text-gray-400">
													Main Auditorium
												</div>
											</div>
											<div className="text-right">
												<div className="text-xs text-gray-400">
													Hybrid Event
												</div>
												<div className="text-xs text-red-500 font-medium">
													Online + Offline
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="max-w-3xl mx-auto px-4 py-24">
				<h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center uppercase tracking-tighter">
					Event <span className="text-red-600">FAQs</span>
				</h2>
				<p className="text-gray-400 text-center mb-12">
					Find answers to common questions about Hack Secure events
				</p>

				<div className="space-y-4">
					{FAQ_DATA.map((faq, index) => (
						<div
							key={index}
							className={`bg-[#0d0d0d] border rounded-xl overflow-hidden transition-all duration-300 ${
								openFAQ === index
									? "border-red-600/30"
									: "border-white/10 hover:border-white/20"
							}`}
						>
							<button
								onClick={() =>
									setOpenFAQ(openFAQ === index ? null : index)
								}
								className="w-full p-6 text-left flex justify-between items-center group"
							>
								<span className="font-bold text-gray-200 group-hover:text-white transition-colors pr-4">
									{faq.question}
								</span>
								<span
									className={`text-red-600 transform transition-transform duration-300 ${
										openFAQ === index ? "rotate-180" : ""
									}`}
								>
									{openFAQ === index ? (
										<Minus size={20} />
									) : (
										<Plus size={20} />
									)}
								</span>
							</button>

							<div
								className={`transition-all duration-300 ease-in-out overflow-hidden ${
									openFAQ === index
										? "max-h-48 opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
									{faq.answer}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 px-4 text-center relative overflow-hidden">
				<div className="absolute inset-0 bg-red-600/5 -z-10" />
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)",
					}}
				/>

				<div className="max-w-3xl mx-auto relative z-10">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-8">
						<Zap size={14} className="text-red-500" />
						<span className="text-xs font-bold uppercase tracking-widest text-red-500">
							Limited Spots Available
						</span>
					</div>

					<h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight uppercase">
						Ready to <span className="text-red-600">Innovate?</span>
					</h2>

					<p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
						Don't miss your chance to build something incredible and
						compete with the best minds in the country.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<button className="group relative bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 overflow-hidden">
							<span className="relative z-10 flex items-center gap-2">
								Register Now
								<ArrowRight
									size={20}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</span>
						</button>

						<button className="px-12 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all duration-300 border border-white/20 hover:border-red-600 text-white hover:bg-red-600/10">
							Download Brochure
						</button>
					</div>

					<div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
						<div className="flex items-center gap-2">
							<Star size={14} className="text-yellow-500" />
							<span>4.9/5 Rating</span>
						</div>
						<div className="flex items-center gap-2">
							<Users size={14} />
							<span>10K+ Community Members</span>
						</div>
						<div className="flex items-center gap-2">
							<svg
								className="w-3.5 h-3.5 text-red-500"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
									clipRule="evenodd"
								/>
							</svg>
							<span>98% Satisfaction</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Events;