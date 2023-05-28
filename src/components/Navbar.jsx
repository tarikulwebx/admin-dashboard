import { useContext, useEffect, useState } from "react";
import {
	BellOutlineIcon,
	EnvelopeIcon,
	LogOutIcon,
	MoonStarsOutlineIcon,
	SearchIcon,
	SunIcon,
	ThreeBarIcon,
} from "../assets/icons";
import { SidebarContext } from "../contexts";
import { profile_placeholder } from "../assets/images";
import { Menu } from "@headlessui/react";
import {
	contactMessageExamples,
	notificationExamples,
	profileNavItems,
} from "../data";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { setIsOpenSidebar } = useContext(SidebarContext);
	const [themeMode, setThemeMode] = useState(null);

	// first load
	useEffect(() => {
		if (localStorage.theme === "dark") {
			setThemeMode("dark");
		} else {
			setThemeMode("light");
		}
	}, []);

	// handle theme mode
	const handleThemeMode = (selectedThemeMode) => {
		if (selectedThemeMode === "dark") {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
			setThemeMode("dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.removeItem("theme");
			setThemeMode("light");
		}
	};
	return (
		<div className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between gap-5 bg-white px-3 shadow-sm dark:bg-gray-700 sm:px-5 lg:left-[290px]">
			<div className="flex flex-1 items-center gap-3">
				<button
					className="p-1 text-[28px] text-gray-400 transition-colors dark:text-gray-400 dark:hover:text-gray-300 lg:hidden"
					onClick={() => setIsOpenSidebar(true)}
				>
					<ThreeBarIcon />
				</button>
				<form className="w-full">
					<label className="relative block">
						<span className="sr-only">Search</span>
						<span className="absolute inset-y-0 left-0 flex  items-center">
							<SearchIcon className="h-5 w-5 text-gray-300 dark:text-gray-400" />
						</span>
						<input
							className="block w-full rounded-md border border-none !bg-transparent py-2 pl-[30px] pr-3  text-[0.975em] text-gray-500 outline-none placeholder:text-gray-400 focus-within:bg-transparent focus:bg-transparent dark:text-gray-300"
							placeholder="Search for..."
							type="text"
							name="search"
							autoComplete="off"
						/>
					</label>
				</form>
			</div>
			<div className="flex items-center gap-4">
				{themeMode === "light" ? (
					<button
						onClick={() => handleThemeMode("dark")}
						className="text-xl  text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
						title="Dark"
					>
						<MoonStarsOutlineIcon />
					</button>
				) : (
					<button
						onClick={() => handleThemeMode("light")}
						className="text-xl  text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
						title="Light"
					>
						<SunIcon />
					</button>
				)}
				{/* Notification Menu */}
				<Menu as="div" className="relative flex h-full items-center">
					<Menu.Button
						className="relative flex h-8 w-8 items-center justify-center rounded-full  text-xl text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
						title="Notifications"
					>
						<BellOutlineIcon />
						<span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-400  text-xs font-semibold  text-white   dark:bg-red-500 dark:text-gray-100">
							7
						</span>
					</Menu.Button>
					<Menu.Items className="absolute right-0 top-8 flex w-[250px] flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md dark:border-gray-600/50 dark:bg-gray-700">
						<h4 className="mb-1 truncate border-b border-b-gray-50 bg-slate-100 px-3 py-2 text-left text-[0.98rem] font-bold text-gray-500 dark:border-b-gray-600/50 dark:bg-gray-800 dark:text-gray-300">
							You have 5 notifications
						</h4>
						<div className="">
							{notificationExamples.map((notification) => (
								<Menu.Item
									key={notification.id}
									as={Link}
									to={"#"}
									className="flex flex-row items-center gap-3 px-3.5 py-2 text-[0.95rem] text-sm  transition-colors hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-600/50"
								>
									<span>
										{notification.icon && (
											<notification.icon
												className="text-base"
												style={
													notification.color
														? {
																color: notification.color,
																// eslint-disable-next-line no-mixed-spaces-and-tabs
														  }
														: null
												}
											/>
										)}
									</span>
									{notification.message}
								</Menu.Item>
							))}
							<Link
								to={"#"}
								className="mt-1 block border-t border-t-gray-100 px-3.5 py-2 text-center text-sm font-medium hover:bg-gray-50 dark:border-t-gray-600/50 dark:hover:bg-gray-600/50"
							>
								View All Notifications
							</Link>
						</div>
					</Menu.Items>
				</Menu>
				{/* Messages Menu */}
				<Menu as="div" className="relative flex h-full items-center">
					<Menu.Button
						className="relative flex h-8 w-8 items-center justify-center rounded-full text-xl  text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
						title="Messages"
					>
						<EnvelopeIcon />
						<span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-400  text-xs font-semibold   text-white dark:bg-blue-500 dark:text-gray-100">
							9
						</span>
					</Menu.Button>
					<Menu.Items className="absolute right-0 top-8 flex w-[300px] flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md dark:border-gray-600/50 dark:bg-gray-700 sm:w-[380px] md:w-[400px]">
						<h4 className="mb-1 truncate border-b border-b-gray-50 bg-slate-100 px-3 py-2 text-left text-[0.98rem] font-bold text-gray-500 dark:border-b-gray-600/50 dark:bg-gray-800 dark:text-gray-300">
							You have 5 messages
						</h4>
						<div className="">
							{contactMessageExamples.map((message) => (
								<Menu.Item
									key={message.id}
									as={Link}
									to={"#"}
									className="flex flex-row items-center gap-3 px-3.5 py-2 text-sm  transition-colors hover:bg-gray-50 dark:hover:bg-gray-600/50"
								>
									<img
										src={message.user.picture}
										alt={message.user.name}
										className="h-9 w-9 rounded-full object-cover"
									/>
									<div className=" flex-grow">
										<div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
											<h5>{message.user.name}</h5>
											<span className="text-xs text-gray-500 dark:text-gray-400">
												{message.sent_at}
											</span>
										</div>
										<div className="relative w-full">
											<p className="text-truncate line-clamp-1 overflow-hidden font-semibold text-gray-600 dark:text-gray-200">
												{message.subject}
											</p>
											<p className="text-truncate line-clamp-1 overflow-hidden font-light text-gray-400">
												{message.message}
											</p>
										</div>
									</div>
								</Menu.Item>
							))}
							<Link
								to={"#"}
								className="mt-1 block border-t border-t-gray-100 px-3.5 py-2 text-center text-sm font-medium hover:bg-gray-50 dark:border-t-gray-600/50 dark:hover:bg-gray-600/50"
							>
								View All Messages
							</Link>
						</div>
					</Menu.Items>
				</Menu>
				{/* Profile Menu */}
				<Menu as="div" className="relative flex h-full items-center">
					<Menu.Button
						className="h-9 w-9 rounded-full"
						title="Profile"
					>
						<img
							src={profile_placeholder}
							alt="User name"
							className="h-full w-full rounded-full object-cover"
						/>
					</Menu.Button>
					<Menu.Items className="absolute right-0 top-10 flex w-[190px] flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md dark:border-gray-600/50 dark:bg-gray-700">
						<h4 className="mb-1 truncate border-b border-b-gray-50 bg-slate-100 px-3 py-2 text-center text-[0.98rem] font-bold text-gray-500 dark:border-b-gray-600/50 dark:bg-gray-800 dark:text-gray-300">
							Orval Hintz
						</h4>
						<div className="">
							{profileNavItems.map((item) => (
								<Menu.Item
									key={item.id}
									as={Link}
									to={item.path}
									className="group flex flex-row items-center gap-3 px-3.5 py-2 text-[0.98rem] text-sm transition-colors hover:bg-primary/5 hover:text-primary dark:hover:bg-gray-600/50 dark:hover:text-gray-300"
								>
									<span className="w-5 text-lg text-gray-400 group-hover:text-primary">
										{item.icon && <item.icon />}
									</span>
									{item.name}
								</Menu.Item>
							))}
							<button className="group mt-1 flex w-full items-center gap-3 border-t border-t-gray-50 px-3.5 py-2 text-[0.98rem] text-sm transition-colors hover:bg-primary/5 hover:text-primary dark:border-t-gray-600/50 dark:text-gray-300 dark:hover:bg-gray-600/50 dark:hover:text-gray-300">
								<span className="w-5 text-lg text-gray-400 group-hover:text-primary">
									<LogOutIcon />
								</span>
								Sign Out
							</button>
						</div>
					</Menu.Items>
				</Menu>
			</div>
		</div>
	);
};

export default Navbar;
