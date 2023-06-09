import {
	BarChartIcon,
	LoaderSingleCircleIcon,
	RefreshOutlineIcon,
} from "../assets/icons";

const visitorsTableData = {
	headers: [
		"#",
		"Id",
		"IP",
		"Device",
		"Network",
		"Browser",
		"Location",
		"Time Zone",
		"Visited",
	],
	rows: [
		{
			id: 1001,
			ip: "100.200.300.1",
			device: "Desktop",
			network: "LAN",
			browser: "Chrome",
			location: "Dhaka, Bangladesh",
			time_zone: "Asia/Dhaka",
			visited: "Thu May 23, 2069 11:22:18",
		},
		{
			id: 1002,
			ip: "100.200.300.3",
			device: "Phone",
			network: "WiFi",
			browser: "Firefox",
			location: "Dhaka, Bangladesh",
			time_zone: "Asia/Dhaka",
			visited: "Thu May 23, 2069 11:22:18",
		},
		{
			id: 1003,
			ip: "100.200.300.5",
			device: "Phone",
			network: "Mobile",
			browser: "Opera",
			location: "Dhaka, Bangladesh",
			time_zone: "Asia/Dhaka",
			visited: "Thu May 23, 2069 11:22:18",
		},
		{
			id: 1004,
			ip: "100.200.300.10",
			device: "Phone",
			network: "Mobile",
			browser: "Chrome",
			location: "Dhaka, Bangladesh",
			time_zone: "Asia/Dhaka",
			visited: "Thu May 23, 2069 11:22:18",
		},
		{
			id: 1005,
			ip: "100.200.300.15",
			device: "Desktop",
			network: "LAN",
			browser: "Edge",
			location: "Dhaka, Bangladesh",
			time_zone: "Asia/Dhaka",
			visited: "Thu May 23, 2069 11:22:18",
		},
		{
			id: 1006,
			ip: "100.200.300.15",
			device: "Laptop",
			network: "WiFi",
			browser: "Chrome",
			location: "Dhaka, Bangladesh",
			time_zone: "Asia/Dhaka",
			visited: "Thu May 23, 2069 11:22:18",
		},
		{
			id: 1007,
			ip: "100.200.300.45",
			device: "Laptop",
			network: "LAN",
			browser: "Firefox",
			location: "Rangpur, Bangladesh",
			time_zone: "Asia/Dhaka",
			visited: "Thu May 23, 2069 11:22:18",
		},
		{
			id: 1008,
			ip: "100.200.300.105",
			device: "Phone",
			network: "Mobile",
			browser: "Chrome",
			location: "Dhaka, Bangladesh",
			time_zone: "Asia/Dhaka",
			visited: "Thu May 23, 2069 11:22:18",
		},
	],
};

const VisitorsTable = () => {
	return (
		<section className=" w-full max-w-full overflow-hidden rounded-xl bg-white shadow dark:bg-gray-700">
			<div className="flex items-center justify-between border-b border-b-gray-100 px-5 py-4 dark:border-b-gray-600">
				<h3 className="flex items-center gap-2 text-xl font-bold dark:text-gray-200">
					<BarChartIcon /> Visitors
				</h3>
				<button className="flex  items-center gap-2 rounded-md px-1.5 py-0.5 font-medium text-primary transition-all active:bg-primary/10">
					<RefreshOutlineIcon className="text-lg" /> Refresh
				</button>
			</div>
			<div className="relative block overflow-x-auto p-5">
				<table className="w-full whitespace-nowrap text-left">
					<thead className="border-b-2 border-b-gray-100 bg-gray-50 text-sm uppercase text-gray-700 dark:border-b-gray-600/60 dark:bg-gray-600/50 dark:text-gray-200">
						<tr>
							{visitorsTableData.headers.map((header, index) => (
								<th
									key={index}
									scope="col"
									className="px-4 py-3.5"
								>
									{header}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="text-[0.925rem]">
						{visitorsTableData.rows.map((row, index) => (
							<tr
								key={index}
								className={`border-b border-b-gray-100 dark:border-b-gray-600/20 ${
									index % 2 === 0
										? "bg-white dark:bg-gray-700"
										: "bg-gray-50/80 dark:bg-gray-600/30"
								}`}
							>
								<td className="px-4 py-3">{index + 1}</td>
								<td className="px-4 py-3">{row.id}</td>
								<td className="px-4 py-3">{row.ip}</td>
								<td className="px-4 py-3">{row.device}</td>
								<td className="px-4 py-3">{row.network}</td>
								<td className="px-4 py-3">{row.browser}</td>
								<td className="px-4 py-3">{row.location}</td>
								<td className="px-4 py-3">{row.time_zone}</td>
								<td className="px-4 py-3">{row.visited}</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="mt-5 text-center">
					<button className="inline-flex items-center gap-2 rounded-full border border-primary px-3 py-1.5 text-[0.95rem] text-sm font-semibold text-primary active:bg-primary/10">
						<LoaderSingleCircleIcon className="text-lg" />
						Load More
					</button>
				</div>
			</div>
		</section>
	);
};

export default VisitorsTable;
