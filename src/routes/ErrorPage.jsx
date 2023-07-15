import React, { useEffect } from "react";
import { useRouteError, useNavigate, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";
import Button from "../components/Button";

// !approved
const ErrorPage = () => {
	const error = useRouteError();

	const navigate = useNavigate();

	const navigation = useNavigation();

	useEffect(() => {
		document.title = `${process.env.REACT_APP_PROJECT_TITLE} - Error`;
	}, []);

	if (navigation.state === "loading") {
		return <Loading />;
	}

	return (
		<div className="h-screen w-full px-2 fx_col-center_center lg:px-20">
			<h1 className="text-center font-syne text-3xl text-black dark:text-white 2xl:text-5xl">
				Oops! Nothing bad happened, it&apos;s not your fault, just try again a
				little bit later ! 😌
			</h1>
			<p className="my-7 block text-center text-xl text-black underline dark:text-white 2xl:text-3xl">
				<i>{error.statusText || error.message}</i>
			</p>
			<div>
				<Button
					styling="mr-8 rounded-md border border-light_purple px-6 py-3 font-grotesk text-lg font-semibold capitalize text-black hover:bg-light_purple dark:border-dark_purple dark:text-white hover:dark:bg-dark_purple xl:text-xl 2xl:px-12 2xl:py-6 2xl:text-3xl"
					handler={() => navigate(-1)}
					text="go back"
				/>
				<Button
					styling="rounded-md border border-light_purple px-6 py-3 font-grotesk text-lg font-semibold capitalize text-black hover:bg-light_purple dark:border-dark_purple dark:text-white hover:dark:bg-dark_purple xl:text-xl 2xl:px-12 2xl:py-6 2xl:text-3xl"
					handler={() => navigate("/")}
					text="go home"
				/>
			</div>
		</div>
	);
};

export default ErrorPage;
