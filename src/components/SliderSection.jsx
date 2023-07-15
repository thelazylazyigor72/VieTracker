import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineLink } from "react-icons/ai";
import Slider from "./SliderGroup/Slider";
import tapMotion from "../data/tapMotion";

const SliderSection = ({ stateishObject, breakpoints, styles, render }) => {
	// state when true - section header becomes a link and slider shows exactly ten items and last one also a link, to the page w/ extended list
	// false - then we dont need a header to be a link and the slider shows everything that comes inside him
	const [expandTag, setExpandTag] = useState(true);

	// as soon as the render we want to define a state value
	useEffect(() => {
		setExpandTag(stateishObject?.data?.length > 10 ? true : false);
	}, [stateishObject]);

	return (
		<div className="h-auto w-full fx_col-center_center">
			{expandTag ? (
				<Link to={stateishObject.titleLink}>
					<motion.div
						whileTap={{ scale: 0.9 }}
						transition={tapMotion}
						className="mb-3 fx-center_center lg:mb-6"
					>
						<AiOutlineLink className="text-2xl text-black dark:text-white lg:text-3xl 2xl:text-5xl" />
						<h1 className="text-center font-syne text-3xl font-semibold capitalize text-black dark:text-white lg:text-4xl 2xl:text-5xl">
							{stateishObject.title}
						</h1>
					</motion.div>
				</Link>
			) : (
				<h1 className="mb-3 text-center font-syne text-3xl font-semibold capitalize text-black dark:text-white md:mb-3 lg:mb-6 lg:text-4xl 2xl:text-5xl">
					{stateishObject.title}
				</h1>
			)}
			<Slider
				breakpoints={breakpoints}
				styles={styles}
				data={
					expandTag ? stateishObject?.data?.slice(0, 9) : stateishObject.data
				}
				expand={expandTag ? stateishObject.titleLink : null}
				render={render}
			/>
		</div>
	);
};

export default SliderSection;
