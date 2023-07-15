import { React } from "react";
import { motion } from "framer-motion";
import { useSwiper } from "swiper/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function SliderButton({ next }) {
	const swiper = useSwiper();

	// button for slider w/ next!flag to define either its a next or prev btn
	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			transition={{
				type: "spring",
				stiffness: 400,
				damping: 17,
			}}
			type="button"
			className={`${next ? "float-right" : "float-left"} cursor-pointer`}
			onClick={next ? () => swiper.slideNext() : () => swiper.slidePrev()}
		>
			{next ? (
				<FiArrowRight className="hidden rounded-half border-[3px] border-light_purple text-5xl text-light_purple  active:border-dark_purple active:text-dark_purple dark:border-dark_purple dark:text-dark_purple dark:active:border-light_purple dark:active:text-light_purple lg:block 2xl:text-7xl " />
			) : (
				<FiArrowLeft className="hidden rounded-half border-[3px] border-light_purple text-5xl text-light_purple  active:border-dark_purple active:text-dark_purple dark:border-dark_purple dark:text-dark_purple dark:active:border-light_purple dark:active:text-light_purple lg:block 2xl:text-7xl " />
			)}
		</motion.button>
	);
}
