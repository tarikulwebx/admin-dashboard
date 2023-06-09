import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";
import {
	CalendarOutlineIcon,
	GraphUpArrowIcon,
	RefreshOutlineIcon,
} from "../assets/icons";
import PropTypes from "prop-types";

const data = [
	{
		name: "Jan",
		Users: 4000,
		Views: 2400,
	},
	{
		name: "Feb",
		Users: 3000,
		Views: 1398,
	},
	{
		name: "Mar",
		Users: 2000,
		Views: 5800,
	},
	{
		name: "Apr",
		Users: 2780,
		Views: 3908,
	},
	{
		name: "May",
		Users: 1890,
		Views: 4800,
	},
	{
		name: "Jun",
		Users: 2390,
		Views: 3800,
	},
	{
		name: "Jul",
		Users: 3490,
		Views: 4300,
	},
	{
		name: "Aug",
		Users: 4000,
		Views: 2400,
	},
	{
		name: "Sep",
		Users: 3000,
		Views: 1398,
	},
	{
		name: "Oct",
		Users: 2000,
		Views: 5800,
	},
	{
		name: "Nov",
		Users: 2780,
		Views: 3908,
	},
	{
		name: "Dec",
		Users: 1890,
		Views: 4800,
	},
];

function CustomTooltip({ payload, label, active }) {
	if (active) {
		return (
			<div className="rounded-md bg-white p-2 text-sm shadow dark:bg-gray-700 dark:shadow-gray-500">
				<p className="mb-1 flex flex-row items-center gap-1.5 font-medium text-gray-500/90 dark:text-gray-200">
					<CalendarOutlineIcon />
					{label}
				</p>
				{payload.length > 0 &&
					payload.map((payItem, index) => (
						<p
							key={index}
							style={{ color: payItem.color }}
						>{`${payItem.name} : ${payItem.value}`}</p>
					))}
			</div>
		);
	}

	return null;
}

CustomTooltip.propTypes = {
	payload: PropTypes.arrayOf(PropTypes.object),
	label: PropTypes.string,
	active: PropTypes.bool,
};

const StatisticsChart = () => {
	return (
		<section className=" w-full max-w-full overflow-hidden rounded-xl bg-white shadow dark:bg-gray-700">
			<div className="flex items-center justify-between border-b border-b-gray-100 px-5 py-4 dark:border-b-gray-600">
				<h3 className="flex items-center gap-2 text-xl font-bold dark:text-gray-200">
					<GraphUpArrowIcon /> Statistics
				</h3>
				<button className="flex  items-center gap-2 rounded-md px-1.5 py-0.5 font-medium text-primary transition-all active:bg-primary/10">
					<RefreshOutlineIcon className="text-lg" /> Refresh
				</button>
			</div>
			<div className="relative block h-[450px] w-full p-5">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
						}}
					>
						<CartesianGrid
							stroke="rgba(59, 130, 246, 0.15)"
							strokeDasharray="5 5"
						/>
						<XAxis dataKey="name" stroke="#22c55e" />
						{/* <YAxis /> */}
						<Legend />
						{/* <Tooltip /> */}
						<Tooltip
							content={<CustomTooltip />}
							cursor={{ fill: "rgba(34, 197, 94, 0.075)" }}
						/>
						<Bar dataKey="Users" fill="#a855f7" barSize={20} />
						<Bar dataKey="Views" fill="#22c55e" barSize={20} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
};

export default StatisticsChart;
