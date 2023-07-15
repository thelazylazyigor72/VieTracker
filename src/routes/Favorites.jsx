import React, { useState, useEffect } from "react";
import { useNavigation } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { useGlobalContext } from "../context";
import SliderSection from "../components/SliderSection";
import ItemCard from "../components/ItemCard";
import Loading from "../components/Loading";

const Favorites = () => {
	const navigation = useNavigation();

	const { favorites } = useGlobalContext();

	const [dataset, setDataset] = useState(favorites);

	useEffect(() => {
		document.title = `${process.env.REACT_APP_PROJECT_TITLE} - Favorites`;
	}, []);

	if (navigation.state === "loading") {
		return <Loading />;
	}

	// little difference w/ fe main page is basically how we making each items link, again based on length of upcoming data
	// cuz of that we will get a better semantic urls experience and better, more obvious/readable routes defenition
	return (
		<div className="h-full max-h-fit min-h-screen w-full px-2 pb-10 pt-16 fx_col-center_center lg:px-20">
			<SliderSection
				styles="relative h-fit min-h-fit  w-10/12 border-t  border-light_purple dark:border-dark_purple xs:w-8/12 md:w-9/12 lg:w-full 3xl:w-10/12"
				breakpoints={{
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
				}}
				stateishObject={favorites}
				render={(data) => {
					return (
						<>
							{data.map((item) => {
								return (
									<SwiperSlide
										className="group h-128 w-6/12 rounded-4xl font-grotesk text-base text-black dark:text-white md:text-lg 2xl:text-3xl"
										key={item.id}
									>
										<ItemCard
											link={
												dataset.data.length > 10
													? `${dataset.titleLink}/${item.id}`
													: `/${dataset.title.toLowerCase()}/${item.id}`
											}
											item={item}
										/>
									</SwiperSlide>
								);
							})}
						</>
					);
				}}
			/>
		</div>
	);
};

export default Favorites;
