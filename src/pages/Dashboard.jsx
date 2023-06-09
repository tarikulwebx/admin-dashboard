import {
	Breadcrumb,
	InfoCards,
	SectionGap,
	StatisticsChart,
	VisitorsTable,
} from "../components";

const breadcrumbItems = [
	{
		label: "Home",
		path: "/",
	},
];

const Dashboard = () => {
	return (
		<>
			<Breadcrumb
				breadcrumbItems={breadcrumbItems}
				pageTitle="Dashboard"
			/>
			<InfoCards />
			<SectionGap />
			<VisitorsTable />
			<SectionGap />
			<StatisticsChart />
		</>
	);
};

export default Dashboard;
