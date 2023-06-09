import {
	ArticleDeletedIcon,
	ArticleIcon,
	CardOutlineIcon,
	DashboardIcon,
	Error404Icon,
	InfoCircleOutlineIcon,
	PostAddIcon,
	PuzzleOutlineIcon,
	ServerOutlineIcon,
	SpeedoMeterIcon,
	TableIcon,
	UserCircleIcon,
	UserMinus,
	UserPlus,
	UsersIcon,
} from "../assets/icons";

export const navItems = [
	{
		id: 1,
		name: "Dashboard",
		path: "/",
		icon: DashboardIcon,
		subItems: [],
	},
	{
		id: 2,
		name: "Users",
		path: "/users",
		icon: UsersIcon,
		subItems: [],
	},
	{
		id: 3,
		name: "About",
		path: "/about",
		icon: InfoCircleOutlineIcon,
		subItems: [],
	},
	{
		id: 4,
		name: "404",
		path: "/404",
		icon: Error404Icon,
		subItems: [],
	},
	{
		id: 5,
		name: "Elements",
		path: "/elements",
		icon: PuzzleOutlineIcon,
		subItems: [
			{
				id: 1,
				name: "Tables",
				path: "/elements/tables",
				icon: TableIcon,
			},
			{
				id: 2,
				name: "Cards",
				path: "/elements/cards",
				icon: CardOutlineIcon,
			},
		],
	},
];

export const profileNavItems = [
	{
		id: 1,
		name: "Profile",
		path: "#",
		icon: UserCircleIcon,
	},
	{
		id: 2,
		name: "Articles",
		path: "#",
		icon: ArticleIcon,
	},
];

export const contactMessageExamples = [
	{
		id: 1,
		subject: "Omnis aut atque fuga",
		message:
			"Quo similique recusandae ducimus. Possimus culpa porro ab quia qui. Quisquam reprehenderit eveniet magnam sint ut ipsa iusto vel eius.",
		sent_at: "1 hour ago",
		user: {
			name: "Debra Larkin",
			picture:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/796.jpg",
		},
	},
	{
		id: 2,
		subject: "Consequuntur  facere quo",
		message:
			"Sunt corporis blanditiis quibusdam. Nihil totam explicabo ut cum odit eius.",
		sent_at: "4 hours ago",
		user: {
			name: "Glen Hoeger",
			picture:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1202.jpg",
		},
	},
	{
		id: 3,
		subject: "Commodi eos sapiente corporis",
		message:
			"Autem non itaque veniam voluptatem. Natus molestiae consequatur. Dolor veritatis modi quo.",
		sent_at: "1 day ago",
		user: {
			name: "Edna Runte",
			picture:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/163.jpg",
		},
	},
	{
		id: 4,
		subject: "Reprehenderit sed sit illum",
		message:
			"Occaecati iusto velit nihil cumque voluptatem. Assumenda fugiat quas sint.",
		sent_at: "4 days ago",
		user: {
			name: "Charlie Beier",
			picture:
				"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
		},
	},
];

export const notificationExamples = [
	{
		id: 1,
		message: "New user registered",
		icon: UserPlus,
		path: "#",
		color: "#22c55e",
	},
	{
		id: 2,
		message: "User Deleted",
		icon: UserMinus,
		path: "#",
		color: "#ef4444",
	},
	{
		id: 3,
		message: "New articles posted",
		icon: PostAddIcon,
		path: "#",
		color: "#22c55e",
	},
	{
		id: 4,
		message: "Article Deleted",
		icon: ArticleDeletedIcon,
		path: "#",
		color: "#ef4444",
	},
	{
		id: 5,
		message: "Server overloaded",
		icon: SpeedoMeterIcon,
		path: "#",
		color: "#eab308",
	},
	{
		id: 6,
		message: "Storage 80% used",
		icon: ServerOutlineIcon,
		path: "#",
		color: "#eab308",
	},
];
