import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context";
import tapMotion from "../data/tapMotion";
import { isExistInDataset } from "../helpers/helperFunctions";

const FavoritesButton = ({ id, image, title }) => {
	// get a list from context
	const { favorites, setFavorites } = useGlobalContext();

	// creating lightweighted version of data to store it in localStorage, basically to reduce size
	const item = {
		id,
		image,
		title,
	};

	// via helper function we define a flag which will define btn behaviour
	const [isExist, setIsExist] = useState(isExistInDataset(favorites, item.id));

	// we wanna keep isExist flag up-to-date on any change
	useEffect(() => {
		const res = isExistInDataset(favorites, item.id);
		setIsExist(res);
	}, [favorites.data]);

	// via handlers we change context list
	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			transition={tapMotion}
			type="button"
			className="mb-4 rounded-md border border-light_purple px-6 py-3 font-grotesk text-lg font-semibold capitalize text-black hover:bg-light_purple dark:border-dark_purple dark:text-white hover:dark:bg-dark_purple md:mb-0 xl:text-xl 2xl:px-10 2xl:py-4 2xl:text-3xl"
			onClick={() => {
				isExist
					? setFavorites({
							...favorites,
							data: [...favorites.data.filter((x) => x?.id !== item.id)],
					  })
					: setFavorites({
							...favorites,
							data: [...favorites.data, item],
					  });
			}}
		>
			{isExist ? "delete from favorites" : "add to favorites"}
		</motion.button>
	);
};

export default FavoritesButton;
