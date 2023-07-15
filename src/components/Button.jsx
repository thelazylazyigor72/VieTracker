import React from "react";
import { motion } from "framer-motion";
import tapMotion from "../data/tapMotion";

const Button = ({ styling, handler, text }) => {
	// simple button wrapper
	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			transition={tapMotion}
			className={styling}
			onClick={handler}
			type="button"
		>
			{text}
		</motion.button>
	);
};

export default Button;
