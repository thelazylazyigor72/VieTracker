import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../context";
import tapMotion from "../data/tapMotion";
import { isExistInDataset } from "../helpers/helperFunctions";

// check favorite button
const WatchLaterButton = ({ id, image, title }) => {
	const { watchLater, setWatchLater } = useGlobalContext();

	const item = {
		id,
		image,
		title,
	};

	const [isExist, setIsExist] = useState(isExistInDataset(watchLater, item.id));

	useEffect(() => {
		const res = isExistInDataset(watchLater, item.id);
		setIsExist(res);
	}, [watchLater]);

	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			transition={tapMotion}
			type="button"
			className="rounded-md border border-light_purple px-6 py-3 font-grotesk text-lg font-semibold capitalize text-black hover:bg-light_purple dark:border-dark_purple dark:text-white hover:dark:bg-dark_purple xl:text-xl 2xl:px-10 2xl:py-4 2xl:text-3xl"
			onClick={() => {
				isExist
					? setWatchLater({
							...watchLater,
							data: [...watchLater.data.filter((x) => x?.id !== item.id)],
					  })
					: setWatchLater({
							...watchLater,
							data: [...watchLater.data, item],
					  });
			}}
		>
			{isExist ? "delete from watch later" : "add to watch later"}
		</motion.button>
	);
};

export default WatchLaterButton;
