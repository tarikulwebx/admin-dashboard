import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumb = ({ breadcrumbItems, pageTitle }) => {
	return (
		<section className="py-5">
			<h1 className=" text-2xl font-extrabold text-gray-600 dark:text-gray-200">
				{pageTitle ?? "..."}
			</h1>
			<nav>
				<ol className="flex items-center text-sm font-medium text-gray-400 dark:text-gray-400">
					{breadcrumbItems &&
						breadcrumbItems.map((item, index) => (
							<li key={index}>
								{index !== 0 && <div className="px-2.5">/</div>}
								{item.path ? (
									<Link
										to={item.path}
										className="text-primary"
									>
										{item.label}
									</Link>
								) : (
									<span>{item.label}</span>
								)}
							</li>
						))}
					{/* <li>
						<Link to={"/"} className="text-primary">
							Home
						</Link>
					</li> */}
					{/* <li>/</li> */}
					{/* <li>
						<Link className="text-primary">Articles</Link>
					</li>
					<li>/</li>
					<li>Lorem ipsum dolor sit ame</li> */}
					{/* <li>Dashboard</li> */}
				</ol>
			</nav>
		</section>
	);
};

Breadcrumb.propTypes = {
	breadcrumbItems: PropTypes.array.require,
	pageTitle: PropTypes.string.require,
};

export default Breadcrumb;
