import React, { useEffect } from "react";
import { useNavigation } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Loading from "../components/Loading";
import info from "../data/info";
import Slider from "../components/SliderGroup/Slider";

const Index = () => {
	const navigation = useNavigation();

	useEffect(() => {
		document.title = `${process.env.REACT_APP_PROJECT_TITLE} - Home`;
	}, []);

	if (navigation.state === "loading") {
		return <Loading />;
	}

	return (
		<div className="h-full max-h-fit min-h-screen w-full px-2 pb-10 pt-16 fx_col-center_center lg:px-20">
			<div className="h-auto w-full">
				<h1 className="text-center font-syne text-2xl font-semibold capitalize text-black dark:text-white md:mb-3 lg:mb-6 lg:text-3xl 2xl:text-5xl ">
					Quick info about this project! ✨✨✨
				</h1>
				<Slider
					data={info}
					autoscroll={{
						delay: 5000,
					}}
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 1,
						},
						1024: {
							slidesPerView: 1,
						},
					}}
					styles="relative h-auto min-h-fit  w-10/12 border-t  border-light_purple dark:border-dark_purple md:w-9/12 lg:w-6/12"
					render={(data) => {
						return (
							<>
								{data.map((item) => {
									return (
										<SwiperSlide
											className="font-grotesk text-base text-black dark:text-white md:text-lg 2xl:text-3xl"
											key={item.id}
										>
											{item.description}
										</SwiperSlide>
									);
								})}
							</>
						);
					}}
				/>
			</div>
		</div>
	);
};

export default Index;
