import React, { useEffect, useState } from "react";
import {
	NavLink,
	Outlet,
	useLoaderData,
	useMatches,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import { motion } from "framer-motion";
import { IoReturnDownBack } from "react-icons/io5";
import Loading from "../../components/Loading";
import tapMotion from "../../data/tapMotion";
import ItemHeader from "../../components/ItemHeader";
import Tooltip from "../../components/Tooltip";
import itemCategories from "../../data/itemCategories";
import Button from "../../components/Button";
import { createBackURL, fetchData } from "../../helpers/helperFunctions";
import FavoritesButton from "../../components/favoritesButton";
import WatchLaterButton from "../../components/watchLaterButton";

export async function loader({ params }) {
	// simply fetching required data
	const url = `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_API_TOKEN}/${params.itemId}/Wikipedia`;
	const { data } = await fetchData(url);
	return { data };
}

const Item = () => {
	// get data from loader
	const { data } = useLoaderData();

	// get matches to create different useful urls
	const matches = useMatches();

	// creating a link for a back button, basically it should return to previous route
	const [backURL, setBackURL] = useState(createBackURL(matches[2]?.pathname));

	// creating a link for tabs buttons, basically it always should return a given to current route link
	const [baseURL, setBaseURL] = useState(matches[2]?.pathname);

	const navigate = useNavigate();

	const navigation = useNavigation();

	// create browser tab title for better ux
	useEffect(() => {
		document.title = `${process.env.REACT_APP_PROJECT_TITLE} - ${data.title}`;
	}, []);

	// on loading state show a loader component
	if (navigation.state === "loading") {
		return <Loading />;
	}

	return (
		<div className="h-full max-h-fit min-h-screen w-full px-2 pb-10 pt-16 fx_col-center_center lg:px-20">
			<header className="w-full border-b-[0.5px] border-light_purple pb-4 fx-between_center dark:border-dark_purple">
				<Button
					handler={() => navigate(backURL)}
					text={<IoReturnDownBack />}
					styling="rounded-half border border-light_purple p-3 font-grotesk text-2xl font-semibold capitalize text-black hover:bg-light_purple dark:border-dark_purple dark:text-white hover:dark:bg-dark_purple lg:rounded-xl lg:px-8 lg:py-3 xl:text-xl 2xl:px-10 2xl:py-4 2xl:text-2xl"
				/>
				<Tooltip text="click to copy" alternativeText="copied !">
					<ItemHeader title={data.title} />
				</Tooltip>
			</header>
			<main className="h-full w-full fx_col-center_center">
				<div className="w-11/12">
					<ul className="w-full flex-wrap fx-between_center">
						{itemCategories.map((category) => {
							return (
								<motion.li
									whileTap={{ scale: 0.9 }}
									transition={tapMotion}
									className="relative p-1 font-syne text-2xl capitalize text-black dark:text-white lg:text-3xl 2xl:text-4xl"
									key={category.id}
								>
									<NavLink
										className={({ isActive }) =>
											isActive
												? "relative before:absolute before:left-0 before:top-2 before:-z-10 before:h-4/6 before:w-full before:-skew-y-6 before:bg-light_red dark:before:bg-dark_purple "
												: ""
										}
										to={
											category.name === "about"
												? `${baseURL}`
												: `${baseURL}/${category.name}`
										}
										end
									>
										{category.name}
									</NavLink>
								</motion.li>
							);
						})}
					</ul>
				</div>
				<div className="h-fit max-h-fit w-full py-4 fx-center_center lg:py-2 lg:pt-0">
					<Outlet />
				</div>
			</main>
			<footer className=" w-full fx_col-center_center md:fx-between_center">
				<FavoritesButton
					id={data?.id}
					title={data?.title}
					image={data?.image}
				/>
				<WatchLaterButton
					id={data?.id}
					title={data?.title}
					image={data?.image}
				/>
			</footer>
		</div>
	);
};

export default Item;
