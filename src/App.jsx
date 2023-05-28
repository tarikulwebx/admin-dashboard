import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
	const router = createBrowserRouter(createRoutesFromElements(AllRoutes));
	return <RouterProvider router={router} />;
};

export default App;
