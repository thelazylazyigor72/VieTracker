import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../components/Loading";
import { fetchData } from "../../helpers/helperFunctions";

export async function loader({ params }) {
	const url = `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_API_TOKEN}/${params.itemId}/Wikipedia`;
	const { data } = await fetchData(url);
	return { data };
}

const ItemIndex = () => {
	const { data } = useLoaderData();

	const navigation = useNavigation();

	if (navigation.state === "loading") {
		return <Loading />;
	}

	return (
		<div className="mb-2 h-fit w-full fx_col-center_center md:fx-between_center lg:w-9/12 2xl:w-6/12">
			<div className="hidden h-144 w-1/2 px-4 md:block 2xl:px-12">
				<img
					className="h-full w-full rounded-4xl border border-light_purple object-cover dark:border-dark_purple"
					src={data.image}
					alt="thats a poster actually"
				/>
			</div>
			<div className="w-full px-4 fx_col-center_center md:w-1/2">
				<div className="grow-0">
					{data?.directors ? (
						<h1 className="self-center text-center font-syne text-xl font-bold text-black dark:text-white 2xl:text-2xl">
							Directed by {data?.directors}
						</h1>
					) : null}
					{data?.writers ? (
						<h1 className="self-center text-center font-syne text-xl font-bold text-black dark:text-white 2xl:text-2xl">
							Written by {data?.writers}
						</h1>
					) : null}
				</div>
				<div className="my-2 grow text-center font-syne text-xl font-medium text-black dark:text-white 2xl:text-2xl">
					{data?.plot}
				</div>
				<ul className="h-fit w-full grow-0 flex-wrap fx-evenly_center">
					{data?.genreList.map((genre, index) => {
						return (
							<li
								className="rounded-2xl bg-light_purple px-2 py-1 font-syne text-lg text-black dark:bg-dark_purple dark:text-white 2xl:text-2xl"
								key={index}
							>
								{genre.value}
							</li>
						);
					})}
				</ul>
				<div className="my-2 h-fit w-full grow-0 flex-wrap fx-evenly_center">
					{data?.year ? (
						<span className="mt-1 rounded-2xl bg-light_purple px-2 py-1 font-syne text-lg text-black dark:bg-dark_purple dark:text-white 2xl:text-2xl">
							Year:{data?.year}
						</span>
					) : null}
					{data?.imDbRating ? (
						<span className="mt-1 rounded-2xl bg-light_purple px-2 py-1 font-syne text-lg text-black dark:bg-dark_purple dark:text-white 2xl:text-2xl">
							IMDBrating:{data?.imDbRating}
						</span>
					) : null}
					{data?.runtimeStr ? (
						<span className="mt-1 rounded-2xl bg-light_purple px-2 py-1 font-syne text-lg text-black dark:bg-dark_purple dark:text-white 2xl:text-2xl">
							Runtime:{data?.runtimeStr}
						</span>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ItemIndex;
