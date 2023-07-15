import { v4 as uuidv4 } from "uuid";

const navigationLinks = [
	{
		id: uuidv4(),
		name: "Home",
		url: "/",
	},
	{
		id: uuidv4(),
		name: "Main",
		url: "main",
	},
	{
		id: uuidv4(),
		name: "Search",
		url: "search",
	},
	{
		id: uuidv4(),
		name: "Favorites",
		url: "favorites",
	},
	{
		id: uuidv4(),
		name: "Watch Later",
		url: "watchlater",
	},
];

export default navigationLinks;
