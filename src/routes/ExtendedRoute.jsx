import React, { useEffect, useState } from "react";
import {
	useHref,
	useNavigation,
	useNavigate,
	useMatches,
} from "react-router-dom";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";
import ItemCard from "../components/ItemCard";
import Button from "../components/Button";
import { createBackURL } from "../helpers/helperFunctions";

// very flexible route, it works for many alike-ish cases, so I made it exactly like this
// at first i tried to make a route for every case, but i figured that im just copypasting things all the way
// so intvented simple mechanism that allows to use this route for all the cases in my application
// maybe its wrong and there's a better ideas, but rn thats the way i implemented this
// it works, it flexible and saves tones of code and imo still readable
const ExtendedRoute = () => {
	const matches = useMatches();

	const [backURL, setBackURL] = useState(createBackURL(matches[2]?.pathname));

	const navigation = useNavigation();

	const navigate = useNavigate();

	const path = useHref();

	const {
		top250movies,
		top250tvs,
		inTheaters,
		comingSoon,
		favorites,
		watchLater,
	} = useGlobalContext();

	const [datasetToShow, setDatasetToShow] = useState({});

	// this effect might be a little hard, since we iterate, and probably i could make a component out of a return statement and
	// make a six different routes, dont iterate and stuff, but
	// i think its not really heavy and thats why i left this flexible route as it is.
	useEffect(() => {
		const data = [
			top250movies,
			top250tvs,
			inTheaters,
			comingSoon,
			favorites,
			watchLater,
		].filter((x) => x.titleLink === path);
		setDatasetToShow(data[0]);
	}, [top250movies, top250tvs, inTheaters, comingSoon, favorites, watchLater]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		document.title = `${process.env.REACT_APP_PROJECT_TITLE} - ${datasetToShow.title}`;
	}, [datasetToShow]);

	if (navigation.state === "loading") {
		return <Loading />;
	}

	return (
		<div className="h-full max-h-fit min-h-screen w-full px-2 pb-10 pt-16 fx_col-center_center lg:px-20">
			<div className="relative mb-8 w-full fx-between_center  md:fx-center_center">
				<Button
					styling="md:absolute block left-0 top-0 rounded-xl border border-light_purple px-6 py-3 font-syne text-2xl font-semibold capitalize text-black hover:bg-light_purple dark:border-dark_purple dark:text-white hover:dark:bg-dark_purple lg:text-3xl xl:text-xl 2xl:px-12 2xl:py-6 2xl:text-3xl"
					text="go back"
					handler={() => navigate(backURL)}
				/>
				<h1 className="text-center font-syne text-2xl font-semibold capitalize text-black dark:text-white md:mb-3 lg:mb-6 lg:text-3xl 2xl:text-5xl">
					{datasetToShow.title}
				</h1>
			</div>
			<div className="grid w-full grid-cols-1 items-center justify-items-center gap-4 xs:w-3/4 sm:grid-cols-2 md:w-full md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
				{datasetToShow?.data?.map((item) => {
					return (
						<ItemCard
							link={`${datasetToShow.titleLink}/${item.id}`}
							item={item}
							key={item.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ExtendedRoute;
