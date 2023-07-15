import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Root = () => {
	const horizontalLine = {
		hidden: {
			x: "-100%",
		},
		visible: {
			x: 0,
		},
	};

	const verticalLine = {
		hidden: {
			y: "100%",
		},
		visible: {
			y: 0,
		},
	};

	const spotVariables = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<>
			<Navbar />
			<motion.div
				variants={spotVariables}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 3,
				}}
				className="fixed right-[-7.5%]  top-[-22.5%] -z-10 h-[300px] w-[300px] rounded-half bg-light_red blur-[75px] dark:bg-dark_red dark:blur-[150px] lg:h-[550px] lg:w-[550px] lg:blur-[150px] lg:dark:blur-[250px] 2xl:h-[700px] 2xl:w-[700px] 2xl:blur-[220px] dark:2xl:blur-[400px]"
			/>
			<motion.div
				variants={spotVariables}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 3,
				}}
				className="fixed bottom-[-22.5%] left-[-7.5%] -z-10 h-[300px] w-[300px] rounded-half bg-light_blue blur-[75px] dark:bg-dark_blue dark:blur-[150px] lg:h-[550px] lg:w-[550px] 2xl:h-[900px] 2xl:w-[900px] 2xl:blur-[170px] dark:2xl:blur-[400px]"
			/>
			<motion.div
				variants={horizontalLine}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 3,
				}}
				className="fixed top-5 -z-20 hidden h-[1px] w-full bg-light_purple dark:bg-dark_purple md:block 2xl:top-10"
			/>
			<motion.div
				variants={verticalLine}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 3,
				}}
				className="fixed right-5 -z-20 hidden h-full w-[1px] bg-light_purple dark:bg-dark_purple md:block 2xl:right-10"
			/>
			<Outlet />
		</>
	);
};

export default Root;
