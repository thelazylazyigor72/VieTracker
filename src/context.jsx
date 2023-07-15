import React, { useState, useContext, useEffect } from "react";
import {
	fetchData,
	getInitialFavorites,
	getInitialWatchLater,
} from "./helpers/helperFunctions";

const AppContext = React.createContext();

export function AppProvider({ children }) {
	// basic skeleton for an dataset
	const [top250movies, setTop250Movies] = useState({
		title: "Top 250 Movie's",
		data: [],
		titleLink: "/main/top250movies",
	});

	const [top250tvs, setTop250TVs] = useState({
		title: "Top 250 TV's",
		data: [],
		titleLink: "/main/top250tvs",
	});

	const [inTheaters, setInTheaters] = useState({
		title: "In Theaters",
		data: [],
		titleLink: "/main/intheaters",
	});

	const [comingSoon, setComingSoon] = useState({
		title: "Coming Soon",
		data: [],
		titleLink: "/main/comingsoon",
	});

	const [favorites, setFavorites] = useState({
		title: "Favorites",
		data: [],
		titleLink: "/favorites/all",
	});

	const [watchLater, setWatchLater] = useState({
		title: "WatchLater",
		data: [],
		titleLink: "/watchlater/all",
	});

	// w/ helper funtion gettin data stored in localstorage
	useEffect(() => {
		const data = getInitialFavorites();
		if (data) {
			setFavorites({
				...favorites,
				data: [...data],
			});
		}
	}, []);

	useEffect(() => {
		const data = getInitialWatchLater();
		if (data) {
			setWatchLater({
				...watchLater,
				data: [...data],
			});
		}
	}, []);

	// any time a context object changes we update its localstorage instance
	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites.data));
	}, [favorites]);

	useEffect(() => {
		localStorage.setItem("watchlater", JSON.stringify(watchLater.data));
	}, [watchLater]);

	// initial loading for an api's data
	useEffect(() => {
		const fetchDataLocal = async () => {
			const { data } = await fetchData(
				`https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_API_TOKEN}`,
			);
			setTop250Movies({
				...top250movies,
				data: data?.items,
			});
		};
		try {
			fetchDataLocal();
		} catch (error) {
			if (error.status === 500) {
				fetchDataLocal();
			}
		}
	}, []);

	useEffect(() => {
		const fetchDataLocal = async () => {
			const { data } = await fetchData(
				`https://imdb-api.com/en/API/Top250TVs/${process.env.REACT_APP_API_TOKEN}`,
			);
			setTop250TVs({
				...top250tvs,
				data: data?.items,
			});
		};
		try {
			fetchDataLocal();
		} catch (error) {
			if (error.status === 500) {
				fetchDataLocal();
			}
		}
	}, []);

	useEffect(() => {
		const fetchDataLocal = async () => {
			const { data } = await fetchData(
				`https://imdb-api.com/en/API/InTheaters/${process.env.REACT_APP_API_TOKEN}`,
			);
			setInTheaters({
				...inTheaters,
				data: data?.items,
			});
		};
		try {
			fetchDataLocal();
		} catch (error) {
			if (error.status === 500) {
				fetchDataLocal();
			}
		}
	}, []);

	useEffect(() => {
		const fetchDataLocal = async () => {
			const { data } = await fetchData(
				`https://imdb-api.com/en/API/ComingSoon/${process.env.REACT_APP_API_TOKEN}`,
			);
			setComingSoon({
				...comingSoon,
				data: data?.items,
			});
		};
		try {
			fetchDataLocal();
		} catch (error) {
			if (error.status === 500) {
				fetchDataLocal();
			}
		}
	}, []);

	return (
		<AppContext.Provider
			value={{
				top250movies,
				setTop250Movies,
				top250tvs,
				setTop250TVs,
				inTheaters,
				setInTheaters,
				comingSoon,
				setComingSoon,
				favorites,
				setFavorites,
				watchLater,
				setWatchLater,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

// simple custom hook to use context variables from any place in the app
export const useGlobalContext = () => useContext(AppContext);
