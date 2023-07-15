import React, { useEffect, useRef, useState } from "react";
import {
	useLoaderData,
	useSearchParams,
	useNavigation,
} from "react-router-dom";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import Slider from "../components/SliderGroup/Slider";
import ItemCard from "../components/ItemCard";
import Loading from "../components/Loading";
import { fetchData } from "../helpers/helperFunctions";
import tapMotion from "../data/tapMotion";

export async function loader({ request }) {
	// get a query parameter and if its exist in url then load a data if not then return a null-ish object
	const url = new URL(request.url);
	const { pathname } = url;
	const q = url.searchParams.get("q");
	if (q) {
		const requestUrl = `https://imdb-api.com/en/API/Search/${process.env.REACT_APP_API_TOKEN}/${q}`;
		const { data } = await fetchData(requestUrl);
		return { data, q, pathname };
	}
	return {};
}

const Search = () => {
	// state for controlled-ish component
	const [inputExpression, setInputExpression] = useState("");

	const inputRef = useRef(null);

	// useful react router hook check docs
	const [searchParams, setSearchParams] = useSearchParams();

	const navigation = useNavigation();

	const { data, q, pathname } = useLoaderData();

	useEffect(() => {
		q
			? (document.title = `${process.env.REACT_APP_PROJECT_TITLE} - Search - ${q}`)
			: (document.title = `${process.env.REACT_APP_PROJECT_TITLE} - Search`);
	}, []);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	if (navigation.state === "loading") {
		return <Loading />;
	}

	// basically, when submitting a form we set an query parameter which causes rerender of a route and loader do his job
	return (
		<div className="h-full max-h-fit min-h-screen w-full px-2 pb-10 pt-14 fx_col-center_center lg:px-20">
			<h1 className="mb-4 text-center font-syne text-2xl font-semibold capitalize text-black dark:text-white md:mb-3 lg:mb-6 lg:text-3xl 2xl:text-5xl ">
				Search whatever you want
			</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setSearchParams({ q: inputExpression });
				}}
				className="w-full"
			>
				<label
					htmlFor="default-search"
					className="sr-only mb-2 text-sm font-medium text-black dark:text-white"
				>
					Search
				</label>
				<div className="relative">
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<svg
							className="h-4 w-4 text-light_purple dark:text-dark_purple"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						ref={inputRef}
						type="search"
						name="q"
						defaultValue={q}
						id="default-search"
						className="block w-full rounded-xl border border-dark_purple bg-white p-4 pl-10 font-syne text-base text-black focus:border-light_blue focus:ring-light_blue dark:border-light_purple dark:bg-white dark:text-black dark:placeholder-black dark:focus:border-dark_blue dark:focus:ring-dark_blue"
						placeholder="Search..."
						required
						onChange={(e) => {
							setInputExpression(e.target.value);
						}}
					/>
					<motion.button
						whileTap={{ scale: 0.9 }}
						transition={tapMotion}
						type="submit"
						className="absolute bottom-2.5 right-2.5 rounded-lg bg-light_purple px-4 py-2 font-syne text-base font-medium text-black hover:bg-dark_purple focus:outline-none focus:ring-4 focus:ring-light_blue dark:bg-dark_purple dark:text-white dark:hover:bg-light_purple dark:focus:ring-dark_blue"
					>
						Search
					</motion.button>
				</div>
			</form>
			{data && (
				<Slider
					data={data?.results}
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
					render={(results) => {
						return (
							<>
								{results.map((result) => {
									return (
										<SwiperSlide
											className="group h-128 w-6/12 rounded-4xl font-grotesk text-base text-black transition-all duration-150 ease-in dark:text-white md:text-lg 2xl:text-3xl"
											key={result.id}
										>
											<ItemCard
												link={`${pathname}/${result.id}`}
												item={result}
											/>
										</SwiperSlide>
									);
								})}
							</>
						);
					}}
				/>
			)}
		</div>
	);
};

export default Search;
