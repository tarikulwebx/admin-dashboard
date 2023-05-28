import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import { SidebarContext } from "../contexts";
import { useState } from "react";

const RootLayout = () => {
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);
	return (
		<SidebarContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
			<div className="lg:flex">
				<div className="lg:flex-none">
					<Sidebar />
				</div>
				<div className="lg:ml-[290px] lg:flex lg:flex-grow lg:flex-col">
					<Navbar />
					<main className="mt-[65px] lg:flex-grow">
						<div className="mx-auto w-full max-w-[1200px] px-3 sm:px-5">
							<Outlet />
						</div>
					</main>
				</div>
			</div>
		</SidebarContext.Provider>
	);
};

export default RootLayout;
