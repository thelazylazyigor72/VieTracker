import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoCopyOutline } from "react-icons/io5";
import tapMotion from "../data/tapMotion";

const ItemHeader = ({ title }) => {
	// basic text size
	const [headerTextSize, setHeaderTextSize] = useState("text-2xl");

	// initially we want to know if header is too long and then we just decrease its size
	useEffect(() => {
		if (title.length > 40) {
			setHeaderTextSize("text-xl");
		}
	}, []);

	return (
		<motion.a
			whileTap={{ scale: 0.9 }}
			transition={tapMotion}
			type="button"
			onClick={() => {
				navigator.clipboard.writeText(title);
			}}
			className={`w-fit max-w-fit cursor-pointer text-right font-syne font-bold ${headerTextSize} font-semibold capitalize text-black dark:text-white md:text-3xl lg:text-3xl 2xl:text-5xl`}
		>
			<IoCopyOutline
				className={`${headerTextSize} mr-1 inline text-black dark:text-white lg:text-3xl 2xl:text-4xl`}
			/>
			{title}
		</motion.a>
	);
};

export default ItemHeader;
