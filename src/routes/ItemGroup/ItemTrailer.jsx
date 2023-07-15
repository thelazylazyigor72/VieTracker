import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../components/Loading";
import { fetchData } from "../../helpers/helperFunctions";

export async function loader({ params }) {
	const url = `https://imdb-api.com/en/API/Trailer/${process.env.REACT_APP_API_TOKEN}/${params.itemId}`;
	const { data } = await fetchData(url);
	return { data };
}

const ItemTrailer = () => {
	const { data } = useLoaderData();

	const navigation = useNavigation();

	if (navigation.state === "loading") {
		return <Loading />;
	}

	return (
		<div className="my-4 h-fit w-full text-center md:w-11/12 lg:w-8/12 2xl:w-[43%]">
			<iframe
				className="aspect-video w-full overflow-hidden border-[none]"
				src={data?.linkEmbed}
				title="video"
				width="100%"
				allowFullScreen
				loading="eager"
				autoPlay
			></iframe>
		</div>
	);
};

export default ItemTrailer;
