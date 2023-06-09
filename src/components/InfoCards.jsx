import {
	BooksFillIcon,
	TrafficSolidIcon,
	UsersFillIcon,
} from "../assets/icons";
import InfoCard from "./InfoCard";

const infoChartData1 = [
	{
		value: 4000,
	},
	{
		value: 3000,
	},
	{
		value: 2000,
	},
	{
		value: 2780,
	},
	{
		value: 1890,
	},
	{
		value: 2390,
	},
	{
		value: 3490,
	},
];

const infoChartData2 = [
	{
		value: 3000,
	},
	{
		value: 2500,
	},
	{
		value: 4000,
	},
	{
		value: 2780,
	},
	{
		value: 4090,
	},
	{
		value: 5090,
	},
	{
		value: 4590,
	},
];

const infoChartData3 = [
	{
		value: 4000,
	},
	{
		value: 2000,
	},
	{
		value: 2800,
	},
	{
		value: 2980,
	},
	{
		value: 2290,
	},
	{
		value: 3090,
	},
	{
		value: 2090,
	},
];

const InfoCards = () => {
	return (
		<section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
			<InfoCard
				title="Daily Visitors"
				icon={UsersFillIcon}
				text="12345 avg."
				chartData={infoChartData1}
				color="#22c55e"
			/>
			<InfoCard
				title="Daily Traffic"
				icon={TrafficSolidIcon}
				text="12345 avg."
				chartData={infoChartData2}
				color="#0ea5e9"
			/>
			<InfoCard
				title="Monthly Articles"
				icon={BooksFillIcon}
				text="12345 avg."
				chartData={infoChartData3}
				color="#a855f7"
			/>
		</section>
	);
};

export default InfoCards;
