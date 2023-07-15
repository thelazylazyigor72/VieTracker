import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsCameraReels } from "react-icons/bs";
import { HiBars3, HiXMark } from "react-icons/hi2";
import navigationLinks from "../data/links";
import ThemeSwitcher from "./ThemeSwitcher";
import tapMotion from "../data/tapMotion";

const Navbar = () => {
	// burger menu flag
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigate = useNavigate();

	// nothing really special, burger menu on mobiles and navigation bar on bigger screens
	return (
		<div className="fixed left-0 top-0 z-[100] w-full bg-light_red bg-opacity-[0.25] px-2 transition duration-300 ease-in-out fx-between_center hover:bg-opacity-80 dark:bg-dark_purple dark:bg-opacity-25 dark:hover:bg-opacity-75 lg:px-20 ">
			<motion.div
				whileTap={{ scale: 0.9 }}
				transition={tapMotion}
				className="hidden md:block"
			>
				<BsCameraReels
					onClick={() => navigate("/")}
					className="hidden cursor-pointer text-3xl text-black active:text-light_blue dark:text-white dark:active:text-light_blue md:block lg:text-4xl 2xl:text-5xl"
				/>
			</motion.div>
			<ul
				className={`fixed left-0 top-0 z-[50] transition-transform duration-300 ease-linear fx_col-center_center ${
					isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
				} h-full w-full bg-white dark:bg-[#0D1B2A] md:static md:inline-flex md:h-auto md:w-fit md:translate-x-0 md:flex-row md:items-center md:justify-between md:bg-transparent dark:md:bg-transparent`}
			>
				{navigationLinks?.map((link) => {
					return (
						<motion.li
							whileTap={{ scale: 0.9 }}
							transition={tapMotion}
							className={`${
								link.name === "Home" ? "md:hidden" : ""
							}  cursor-pointer py-5 font-syne text-2xl font-normal text-black fx-center_center first:pt-0 last:pb-0 active:text-light_blue dark:text-white dark:active:text-light_blue md:px-8 md:py-0 md:text-2xl lg:text-3xl 2xl:px-20 2xl:text-4xl`}
							key={link.id}
						>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "relative before:absolute before:left-0 before:top-2 before:-z-10 before:h-4/6 before:w-full before:-skew-y-6 before:bg-light_red dark:before:bg-dark_purple "
										: ""
								}
								to={link.url}
								onClick={() => {
									setIsMenuOpen(false);
								}}
							>
								{link.name}
							</NavLink>
						</motion.li>
					);
				})}
			</ul>
			<ThemeSwitcher />
			<motion.button
				whileTap={{ scale: 0.9 }}
				transition={tapMotion}
				type="button"
				className="z-[60] float-right text-5xl text-black active:text-light_blue dark:text-white dark:active:text-light_blue md:hidden 2xl:text-7xl"
			>
				{isMenuOpen ? (
					<HiXMark
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					/>
				) : (
					<HiBars3
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					/>
				)}
			</motion.button>
		</div>
	);
};

export default Navbar;
