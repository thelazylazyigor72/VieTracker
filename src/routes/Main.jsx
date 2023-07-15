import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { useGlobalContext } from "../context";
import SliderSection from "../components/SliderSection";
import Loading from "../components/Loading";
import ItemCard from "../components/ItemCard";

const Main = () => {
	const [states, setStates] = useState([]);

	const navigation = useNavigation();

	const commonBreakpoints = {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1280: {
			slidesPerView: 4,
		},
		1920: {
			slidesPerView: 5,
		},
	};

	const { top250movies, top250tvs, inTheaters, comingSoon } =
		useGlobalContext();

	// creating an array of states, basically to when rendering not to copy myself since all of them have exactly the same behavior
	// and i'll just iterate over them
	useEffect(() => {
		setStates([top250movies, top250tvs, inTheaters, comingSoon]);
	}, [top250movies, top250tvs, inTheaters, comingSoon]);

	useEffect(() => {
		document.title = `${process.env.REACT_APP_PROJECT_TITLE} - Main`;
	}, []);

	if (navigation.state === "loading") {
		return <Loading />;
	}

	// returning a component which function is to figure out how many items to show and how to show it
	return (
		<div className="h-full max-h-fit min-h-screen w-full px-2 pb-10 pt-14 fx_col-center_center lg:px-20">
			{states.map((dataset) => {
				return (
					<>
						<SliderSection
							styles="relative h-fit min-h-fit  w-10/12 xs:w-8/12 md:w-9/12 lg:w-full 3xl:w-10/12"
							breakpoints={commonBreakpoints}
							stateishObject={dataset}
							render={(data) => {
								return (
									<>
										{data.map((item) => {
											return (
												<SwiperSlide
													className="group h-128 w-6/12 rounded-4xl font-grotesk text-base text-black transition-all duration-150 ease-in dark:text-white md:text-lg 2xl:text-3xl"
													key={item.id}
												>
													<ItemCard
														link={`${dataset.titleLink}/${item.id}`}
														item={item}
													/>
												</SwiperSlide>
											);
										})}
									</>
								);
							}}
						/>
						<br />
					</>
				);
			})}
		</div>
	);
};

export default Main;
