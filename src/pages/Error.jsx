import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "../assets/icons";
import { lost_picture } from "../assets/images";

const Error = () => {
	return (
		<div
			className="relative flex h-screen w-screen items-center justify-center bg-cover bg-center"
			style={{ backgroundImage: `url(${lost_picture})` }}
		>
			<div className="absolute left-0 top-0 h-full  w-full bg-black/50" />
			<div className="z-10 text-center text-white">
				<h1 className="text-9xl font-black">404</h1>
				<h2 className="mb-2 text-2xl font-bold uppercase">
					Page not found!
				</h2>
				<p>Sorry, we couldn’t find the page you’re looking for.</p>
				<div className="mt-14">
					<Link
						to="/"
						className="inline-flex flex-row items-center justify-center gap-2 font-bold"
					>
						<ArrowLeftIcon />
						Back to home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Error;
