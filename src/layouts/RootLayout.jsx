import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import { SidebarContext } from "../contexts";
import { useState } from "react";

const RootLayout = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);
	return (
		<SidebarContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
			<Sidebar />
			<Navbar />
			<div className="mt-[65px] lg:ml-[290px]">
				<div className="mx-auto max-w-[1200px] px-3 sm:px-5">
					<main>
						<Outlet />
					</main>
				</div>
				<footer className="mt-8 bg-white dark:bg-gray-700">
					<div className="mx-auto max-w-[1200px] px-3 sm:px-5">
						<div>
							<p className="py-5 text-center text-sm font-light text-gray-500/90 dark:text-gray-300/90">
								Copyright &copy;{new Date().getFullYear()} All
								Rights Reserved by{" "}
								<a
									href="https://www.linkedin.com/in/tarikulwebx/"
									target="_blank"
									rel="noreferrer"
									className="text-primary transition-all hover:underline hover:underline-offset-2"
								>
									Tarikul
								</a>
							</p>
						</div>
					</div>
				</footer>
			</div>
		</SidebarContext.Provider>
	);
};

export default RootLayout;
