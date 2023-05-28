import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts";
import { ArrowDown, ArrowUp, Stack3DIcon } from "../assets/icons";
import { navItems } from "../data";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";

const Sidebar = () => {
	const { isOpenSidebar, setIsOpenSidebar } = useContext(SidebarContext);
	const [isOpenControl, setIsOpenControl] = useState(false);

	// sidebar open useeffect
	useEffect(() => {
		setIsOpenControl(isOpenSidebar);
	}, [isOpenSidebar]);

	// handle close sidebar
	const handleCloseSidebar = () => {
		setIsOpenControl(false);
		setTimeout(() => {
			setIsOpenSidebar(false);
		}, 300);
	};

	return (
		<>
			<div
				className={`pointer-events-auto fixed left-0 top-0 z-50 flex h-screen w-[290px]  flex-none transform flex-col bg-white shadow-sm transition-transform duration-300 dark:bg-gray-700 dark:shadow-inner dark:shadow-white/5 ${
					isOpenControl
						? "translate-x-0"
						: "-translate-x-full lg:translate-x-0"
				}`}
			>
				{/* Sidebar Header */}
				<h1 className="flex h-16 w-full items-center gap-3 border-b border-slate-50 bg-primary/5 px-4 text-2xl font-extrabold text-primary dark:border-b-gray-600/50 dark:bg-transparent lg:px-5">
					<Stack3DIcon className="text-3xl" /> Admin CMS
				</h1>

				{/* Side navigation */}
				<div className="custom-scrollbar h-full flex-1 overflow-y-auto overflow-x-hidden px-2.5 py-5">
					<nav className="flex flex-col">
						{navItems.map((item) => {
							return item.subItems.length === 0 ? (
								<NavLink
									key={item.id}
									to={item.path}
									className="group flex flex-row items-center gap-3 rounded px-3 py-2 text-base font-semibold text-gray-600 transition-colors duration-200 hover:bg-primary/5 hover:text-primary dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-gray-300 [&.active]:text-primary dark:[&.active]:bg-white/5 dark:[&.active]:text-gray-300"
									onClick={() => handleCloseSidebar()}
								>
									{item.icon ? (
										<item.icon className="w-5 text-lg text-gray-400 transition-colors duration-200 group-hover:text-primary group-[.active]:text-primary dark:text-gray-400" />
									) : (
										<span className="w-5"></span>
									)}
									{item.name}
								</NavLink>
							) : (
								<Disclosure key={item.id}>
									{({ open }) => (
										<>
											<Disclosure.Button
												as={NavLink}
												to={item.path}
												className="group flex flex-row items-center justify-between gap-3 rounded px-3 py-2 text-base font-semibold text-gray-600 transition-colors duration-200 hover:bg-primary/5 hover:text-primary dark:text-gray-300  dark:hover:bg-white/5 dark:hover:text-gray-300 [&.active]:text-primary dark:[&.active]:bg-white/5 dark:[&.active]:text-gray-300"
												onClick={() =>
													handleCloseSidebar()
												}
											>
												<div className="flex flex-row items-center gap-3">
													{item.icon ? (
														<item.icon className="w-5 text-lg text-gray-400 transition-colors duration-200 group-hover:text-primary group-[.active]:text-primary dark:text-gray-400" />
													) : (
														<span className="w-5"></span>
													)}
													{item.name}
												</div>
												{open ? (
													<ArrowUp className="text-gray-500 dark:text-gray-400" />
												) : (
													<ArrowDown className="text-gray-400" />
												)}
											</Disclosure.Button>
											<Disclosure.Panel className="flex flex-col px-2">
												{item.subItems.map(
													(subItem) => (
														<NavLink
															to={subItem.path}
															key={subItem.id}
															className="group flex flex-row items-center gap-3 rounded px-3 py-2 text-base font-semibold text-gray-600 transition-colors duration-200 hover:bg-primary/5 hover:text-primary dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-gray-300 [&.active]:text-primary dark:[&.active]:bg-white/5 dark:[&.active]:text-gray-300"
															onClick={() =>
																handleCloseSidebar()
															}
														>
															{subItem.icon ? (
																<subItem.icon className="w-5 text-lg text-gray-400 transition-colors duration-200 group-hover:text-primary group-[.active]:text-primary dark:text-gray-400" />
															) : (
																<span className="w-5 "></span>
															)}
															{subItem.name}
														</NavLink>
													)
												)}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							);
						})}
					</nav>
				</div>
			</div>

			{/* Background effect */}
			<div
				className={`fixed bottom-0 left-0 top-0 z-40 h-full w-full bg-black/20 transition-opacity duration-300 dark:bg-black/30 lg:pointer-events-none lg:hidden ${
					isOpenControl
						? "opacity-100"
						: "pointer-events-none opacity-0 xl:opacity-100 "
				}`}
				onClick={() => handleCloseSidebar()}
			/>
		</>
	);
};

export default Sidebar;
