import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { AiOutlineUser } from "react-icons/ai";
import Loading from "../../components/Loading";
import Slider from "../../components/SliderGroup/Slider";
import tapMotion from "../../data/tapMotion";
import { fetchData } from "../../helpers/helperFunctions";

export async function loader({ params }) {
	const url = `https://imdb-api.com/API/Reviews/${process.env.REACT_APP_API_TOKEN}/${params.itemId}`;
	const { data } = await fetchData(url);
	return { data };
}

const ItemReviews = () => {
	const { data } = useLoaderData();

	const navigation = useNavigation();

	if (navigation.state === "loading") {
		return <Loading />;
	}

	return (
		<Slider
			data={data?.items}
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
			styles="relative h-fit min-h-fit  w-10/12 items-baseline xs:w-8/12 md:w-9/12 lg:w-full 3xl:w-10/12"
			render={(dt) => {
				return (
					<>
						{dt.map((review, index) => {
							return (
								<SwiperSlide
									className="font-grotesk text-base text-black dark:text-white md:text-lg 2xl:text-3xl"
									key={index}
								>
									<motion.div
										whileTap={{ scale: 0.9 }}
										transition={tapMotion}
										className="group relative z-50 mb-4 h-128 w-full rounded-4xl border border-light_purple fx_col-center_center group-hover:shadow-xl group-hover:shadow-light_purple dark:border-dark_purple dark:group-hover:shadow-dark_purple"
									>
										<h1 className="mb-4 grow text-center font-syne text-2xl font-medium capitalize text-black underline fx-center_center dark:text-white">
											<AiOutlineUser /> {review.username}
										</h1>
										{review.warningSpoilers === true ? (
											<p className="rounded-lg bg-light_red p-1 font-syne text-base text-black">
												Spoiler alert
											</p>
										) : null}

										<h2 className="my-3 grow text-center font-syne text-xl font-normal capitalize text-black dark:text-white">
											&quot;{review.title}&quot;
										</h2>
										<p className="w-full grow-[3] overflow-y-auto rounded-4xl border-t border-light_purple bg-light_blue bg-opacity-25 p-4 text-center font-grotesk text-lg font-normal text-black dark:border-dark_purple dark:text-white">
											{review.content}
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

export default ItemReviews;
