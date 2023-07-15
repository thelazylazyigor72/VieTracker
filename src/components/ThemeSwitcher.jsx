import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsMoon, BsSun } from "react-icons/bs";
import { getThemeTagFromLocalStorage } from "../helpers/helperFunctions";
import tapMotion from "../data/tapMotion";

const ThemeSwitcher = () => {
	// initially getting a theme definer
	const [lightMode, setLightMode] = useState(getThemeTagFromLocalStorage());

	// on any theme definer change we define theme via tailwind rules
	useEffect(() => {
		if (lightMode) {
			document.documentElement.classList.remove("dark");
			document.body.classList.remove("darkMode");
		} else {
			document.documentElement.classList.add("dark");
			document.body.classList.add("darkMode");
		}
	}, [lightMode]);

	// any time theme definer changes we need to store it in localstorage to keep it safe from reloading
	useEffect(() => {
		localStorage.setItem("themeTag", lightMode);
	}, [lightMode]);

	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			transition={tapMotion}
			className="text-3xl text-black active:text-light_blue dark:text-white dark:active:text-light_blue lg:text-4xl 2xl:text-5xl"
			type="submit"
			onClick={() => {
				setLightMode(!lightMode);
			}}
		>
			{lightMode ? <BsMoon /> : <BsSun />}
		</motion.button>
	);
};

export default ThemeSwitcher;
