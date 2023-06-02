import { Breadcrumb } from "../components";

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
			<div className="flex justify-between">
				<h1>Dashboard</h1>
				<p>Test</p>
			</div>
		</>
	);
};

export default Dashboard;
