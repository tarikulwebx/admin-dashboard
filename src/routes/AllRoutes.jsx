import { Route } from "react-router-dom";
import { RootLayout } from "../layouts";
import { About, Dashboard, Elements, Error, Loader } from "../pages";

const AllRoutes = (
	<Route
		path="/"
		element={<RootLayout />}
		loader={Loader}
		errorElement={<Error />}
	>
		<Route index element={<Dashboard />} />
		<Route path="about" element={<About />} />
		<Route path="elements" element={<Elements />} />
	</Route>
);

export default AllRoutes;
