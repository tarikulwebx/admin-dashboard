import { Area, AreaChart, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const InfoCard = ({ title, icon: Icon, text, chartData, color }) => {
	return (
		<div className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-700">
			<div className="flex flex-row items-center gap-5 p-5 pb-3.5">
				<Icon className={`text-4xl`} style={{ color: `${color}90` }} />
				<div className="flex-1">
					<h2 className="text-xl font-bold dark:text-gray-200">
						{title}
					</h2>
					<p className="text-sm text-gray-600 dark:text-gray-400">
						{text}
					</p>
				</div>
			</div>
			<div className="h-24">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						width={500}
						height={400}
						data={chartData}
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
						}}
					>
						<Area
							type="monotone"
							dataKey="value"
							stroke="transparent"
							fill={color}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

InfoCard.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.elementType.isRequired,
	text: PropTypes.string.isRequired,
	chartData: PropTypes.array.isRequired,
	color: PropTypes.string.isRequired,
};

export default InfoCard;
