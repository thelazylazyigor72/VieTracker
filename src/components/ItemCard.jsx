import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tapMotion from "../data/tapMotion";

const ItemCard = ({ link, item }) => {
	// basically a simple div w/ passed data to fill in and link to something
	return (
		<Link to={link} className="inline-block h-full w-full">
			<motion.div
				whileTap={{ scale: 0.9 }}
				transition={tapMotion}
				className="group relative z-50  mb-4 h-144 w-full rounded-4xl fx_col-center_center group-hover:shadow-xl group-hover:shadow-light_purple dark:group-hover:shadow-dark_purple"
			>
				<div className="h-full w-full">
					<img
						className="h-full w-full rounded-4xl border border-light_purple object-cover dark:border-dark_purple"
						src={item.image}
						alt="thats a poster actually"
					/>
				</div>
				<p className="absolute left-7 top-7 w-fit bg-light_purple p-1 font-syne text-xl text-black transition-all duration-150 ease-in group-hover:opacity-100 dark:bg-dark_purple dark:text-white lg:opacity-0">
					{item.title}
				</p>
			</motion.div>
		</Link>
	);
};

export default ItemCard;
