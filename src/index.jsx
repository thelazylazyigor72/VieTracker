import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./context";
import "./index.css";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Index from "./routes/Index";
import Main from "./routes/Main";
import ExtendedRoute from "./routes/ExtendedRoute";
import Favorites from "./routes/Favorites";
import Item, { loader as itemLoader } from "./routes/ItemGroup/Item";
import ItemActors, {
	loader as itemActorsLoader,
} from "./routes/ItemGroup/ItemActors";
import ItemTrailer, {
	loader as itemTrailerLoader,
} from "./routes/ItemGroup/ItemTrailer";
import ItemIndex, {
	loader as itemIndexLoader,
} from "./routes/ItemGroup/ItemIndex";
import ItemReviews, {
	loader as itemReviewsLoader,
} from "./routes/ItemGroup/ItemReviews";
import WatchLater from "./routes/WatchLater";
import Search, { loader as searchLoader } from "./routes/Search";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						element: <Index />,
					},
					{
						path: "/search",
						element: <Search />,
						loader: searchLoader,
						errorElement: <ErrorPage />,
					},
					{
						path: "/search/:itemId",
						element: <Item />,
						loader: itemLoader,
						errorElement: <ErrorPage />,
						children: [
							{
								errorElement: <ErrorPage />,
								children: [
									{
										index: true,
										element: <ItemIndex />,
										loader: itemIndexLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/search/:itemId/trailer",
										element: <ItemTrailer />,
										loader: itemTrailerLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/search/:itemId/actors",
										element: <ItemActors />,
										loader: itemActorsLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/search/:itemId/reviews",
										element: <ItemReviews />,
										loader: itemReviewsLoader,
										errorElement: <ErrorPage />,
									},
								],
							},
						],
					},
					{
						path: "/main",
						element: <Main />,
						errorElement: <ErrorPage />,
					},
					{
						path: "/main/top250movies",
						element: <ExtendedRoute />,
						errorElement: <ErrorPage />,
					},
					{
						path: "/main/top250movies/:itemId",
						element: <Item />,
						loader: itemLoader,
						errorElement: <ErrorPage />,
						children: [
							{
								errorElement: <ErrorPage />,
								children: [
									{
										index: true,
										element: <ItemIndex />,
										loader: itemIndexLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/top250movies/:itemId/trailer",
										element: <ItemTrailer />,
										loader: itemTrailerLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/top250movies/:itemId/actors",
										element: <ItemActors />,
										loader: itemActorsLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/top250movies/:itemId/reviews",
										element: <ItemReviews />,
										loader: itemReviewsLoader,
										errorElement: <ErrorPage />,
									},
								],
							},
						],
					},
					{
						path: "/main/top250tvs",
						element: <ExtendedRoute />,
						errorElement: <ErrorPage />,
					},
					{
						path: "/main/top250tvs/:itemId",
						element: <Item />,
						loader: itemLoader,
						errorElement: <ErrorPage />,
						children: [
							{
								errorElement: <ErrorPage />,
								children: [
									{
										index: true,
										element: <ItemIndex />,
										loader: itemIndexLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/top250tvs/:itemId/trailer",
										element: <ItemTrailer />,
										loader: itemTrailerLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/top250tvs/:itemId/actors",
										element: <ItemActors />,
										loader: itemActorsLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/top250tvs/:itemId/reviews",
										element: <ItemReviews />,
										loader: itemReviewsLoader,
										errorElement: <ErrorPage />,
									},
								],
							},
						],
					},
					{
						path: "/main/intheaters",
						element: <ExtendedRoute />,
						errorElement: <ErrorPage />,
					},
					{
						path: "/main/intheaters/:itemId",
						element: <Item />,
						loader: itemLoader,
						errorElement: <ErrorPage />,
						children: [
							{
								errorElement: <ErrorPage />,
								children: [
									{
										index: true,
										element: <ItemIndex />,
										loader: itemIndexLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/intheaters/:itemId/trailer",
										element: <ItemTrailer />,
										loader: itemTrailerLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/intheaters/:itemId/actors",
										element: <ItemActors />,
										loader: itemActorsLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/intheaters/:itemId/reviews",
										element: <ItemReviews />,
										loader: itemReviewsLoader,
										errorElement: <ErrorPage />,
									},
								],
							},
						],
					},
					{
						path: "/main/comingsoon",
						element: <ExtendedRoute />,
						errorElement: <ErrorPage />,
					},
					{
						path: "/main/comingsoon/:itemId",
						element: <Item />,
						loader: itemLoader,
						errorElement: <ErrorPage />,
						children: [
							{
								errorElement: <ErrorPage />,
								children: [
									{
										index: true,
										element: <ItemIndex />,
										loader: itemIndexLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/comingsoon/:itemId/trailer",
										element: <ItemTrailer />,
										loader: itemTrailerLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/comingsoon/:itemId/actors",
										element: <ItemActors />,
										loader: itemActorsLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/main/comingsoon/:itemId/reviews",
										element: <ItemReviews />,
										loader: itemReviewsLoader,
										errorElement: <ErrorPage />,
									},
								],
							},
						],
					},
					{
						path: "/favorites",
						element: <Favorites />,
						errorElement: <ErrorPage />,
					},
					{
						path: "/favorites/:itemId",
						element: <Item />,
						loader: itemLoader,
						errorElement: <ErrorPage />,
						children: [
							{
								errorElement: <ErrorPage />,
								children: [
									{
										index: true,
										element: <ItemIndex />,
										loader: itemIndexLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/favorites/:itemId/trailer",
										element: <ItemTrailer />,
										loader: itemTrailerLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/favorites/:itemId/actors",
										element: <ItemActors />,
										loader: itemActorsLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/favorites/:itemId/reviews",
										element: <ItemReviews />,
										loader: itemReviewsLoader,
										errorElement: <ErrorPage />,
									},
								],
							},
						],
					},
					{
						path: "/favorites/all",
						element: <ExtendedRoute />,
						errorElement: <ErrorPage />,
					},
					{
						path: "/favorites/all/:itemId",
						element: <Item />,
						loader: itemLoader,
						errorElement: <ErrorPage />,
						children: [
							{
								errorElement: <ErrorPage />,
								children: [
									{
										index: true,
										element: <ItemIndex />,
										loader: itemIndexLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/favorites/all/:itemId/trailer",
										element: <ItemTrailer />,
										loader: itemTrailerLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/favorites/all/:itemId/actors",
										element: <ItemActors />,
										loader: itemActorsLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/favorites/all/:itemId/reviews",
										element: <ItemReviews />,
										loader: itemReviewsLoader,
										errorElement: <ErrorPage />,
									},
								],
							},
						],
					},
					{
						path: "/watchlater",
						element: <WatchLater />,
						errorElement: <ErrorPage />,
					},
					{
						path: "/watchlater/:itemId",
						element: <Item />,
						loader: itemLoader,
						errorElement: <ErrorPage />,
						children: [
							{
								errorElement: <ErrorPage />,
								children: [
									{
										index: true,
										element: <ItemIndex />,
										loader: itemIndexLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/watchlater/:itemId/trailer",
										element: <ItemTrailer />,
										loader: itemTrailerLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/watchlater/:itemId/actors",
										element: <ItemActors />,
										loader: itemActorsLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/watchlater/:itemId/reviews",
										element: <ItemReviews />,
										loader: itemReviewsLoader,
										errorElement: <ErrorPage />,
									},
								],
							},
						],
					},
					{
						path: "/watchlater/all",
						element: <ExtendedRoute />,
						errorElement: <ErrorPage />,
					},
					{
						path: "/watchlater/all/:itemId",
						element: <Item />,
						loader: itemLoader,
						errorElement: <ErrorPage />,
						children: [
							{
								errorElement: <ErrorPage />,
								children: [
									{
										index: true,
										element: <ItemIndex />,
										loader: itemIndexLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/watchlater/all/:itemId/trailer",
										element: <ItemTrailer />,
										loader: itemTrailerLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/watchlater/all/:itemId/actors",
										element: <ItemActors />,
										loader: itemActorsLoader,
										errorElement: <ErrorPage />,
									},
									{
										path: "/watchlater/all/:itemId/reviews",
										element: <ItemReviews />,
										loader: itemReviewsLoader,
										errorElement: <ErrorPage />,
									},
								],
							},
						],
					},
				],
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AppProvider>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</AppProvider>,
);
