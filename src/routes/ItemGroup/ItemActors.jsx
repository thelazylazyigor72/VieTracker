import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";
import Slider from "../../components/SliderGroup/Slider";
import tapMotion from "../../data/tapMotion";
import { fetchData } from "../../helpers/helperFunctions";

export async function loader({ params }) {
	const url = `https://imdb-api.com/API/FullCast/${process.env.REACT_APP_API_TOKEN}/${params.itemId}`;
	const { data } = await fetchData(url);
	return { data };
}

const ItemActors = () => {
	const { data } = useLoaderData();

	const navigation = useNavigation();

	if (navigation.state === "loading") {
		return <Loading />;
	}

	return (
		<Slider
			data={data.actors}
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
			styles="relative h-fit min-h-fit  w-10/12 xs:w-8/12 md:w-9/12 lg:w-full 3xl:w-10/12"
			render={(dt) => {
				return (
					<>
						{dt.map((actor) => {
							return (
								<SwiperSlide
									className="font-grotesk text-base text-black dark:text-white md:text-lg 2xl:text-3xl"
									key={actor.id}
								>
									<motion.div
										whileTap={{ scale: 0.9 }}
										transition={tapMotion}
										className="group relative z-50  mb-4 h-128 w-full rounded-4xl fx_col-center_center group-hover:shadow-xl group-hover:shadow-light_purple dark:group-hover:shadow-dark_purple"
									>
										<div className="h-full w-full">
											<img
												className="h-full w-full rounded-4xl border border-light_purple object-cover dark:border-dark_purple"
												src={actor.image}
												alt="thats a poster actually"
											/>
										</div>
										<p className="absolute left-7 top-7 w-fit bg-light_purple p-1 font-syne text-xl text-black transition-all duration-150 ease-in group-hover:opacity-100 dark:bg-dark_purple dark:text-white lg:opacity-0">
											{actor.name} as {actor.asCharacter}
										</p>
									</motion.div>
								</SwiperSlide>
							);
						})}
					</>
				);
			}}
		/>
	);
};

export default ItemActors;
