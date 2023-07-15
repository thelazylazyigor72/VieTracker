import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.min.css";
import SliderButton from "./SliderButton";
import tapMotion from "../../data/tapMotion";

const Slider = (props) => {
	const { data } = props;

	// here we getting swiper settings from props
	// expand prop is basically a link to extended route so when we have it, then we have last slide w/ link
	const { autoscroll, styles, breakpoints, expand } = props;

	// if render to make let the user know that if there's nothing to show
	if (data.length === 0) {
		return (
			<h1 className="my-10 text-center font-syne text-xl font-semibold capitalize text-black dark:text-white lg:text-2xl 2xl:text-4xl">
				Nothing to show you yet!
			</h1>
		);
	}

	// as a basis i use SwiperJS, and i use render-prop feature to make it as flexible as possible
	// also there's special functionality that allow to make a slider-that-can-expand-into-bigger-page
	return (
		<Swiper
			spaceBetween={32}
			slidesPerView={1}
			modules={[Keyboard, Autoplay]}
			keyboard={{ enabled: true }}
			grabCursor={{ enabled: true }}
			autoplay={autoscroll}
			className={styles}
			slideToClickedSlide={{ slideToClickedSlide: true }}
			breakpoints={breakpoints}
		>
			<SliderButton />
			{props.render(data)}
			<SliderButton next />
			{expand ? (
				<SwiperSlide className="group h-128 w-5/12 rounded-4xl font-syne text-base text-black transition-all duration-150 ease-in dark:text-white md:text-lg 2xl:text-3xl">
					<Link to={expand}>
						<motion.div
							whileTap={{ scale: 0.9 }}
							transition={tapMotion}
							className="group relative z-50 mb-4 h-144 w-full rounded-4xl border-[5px] border-light_purple bg-light_blue bg-opacity-30 fx_col-center_center group-hover:shadow-xl group-hover:shadow-light_purple dark:border-dark_purple dark:bg-dark_blue dark:bg-opacity-30 dark:group-hover:shadow-dark_purple"
						>
							See All
						</motion.div>
					</Link>
				</SwiperSlide>
			) : null}
		</Swiper>
	);
};

export default Slider;
