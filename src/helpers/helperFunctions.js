// if theres no themetag we returning a false
export const getThemeTagFromLocalStorage = () => {
	let themeTag = localStorage.getItem("themeTag");
	themeTag ? themeTag : (themeTag = false);
	return JSON.parse(themeTag);
};

// data fetching function, w/ special error handler
export const fetchData = async (url) => {
	try {
		const response = await fetch(url, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		const data = await response.json();
		if (data.errorMessage) {
			throw new Error(data.errorMessage);
		}
		return { data };
	} catch (error) {
		if (error.status === 500) {
			const response = await fetch(url, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			const data = await response.json();
			if (data.errorMessage) {
				throw new Error(data.errorMessage);
			}
			return { data };
		}
		throw new Error(error.message);
	}
};

// function that check if passed dataset have an item w/ passed id
export const isExistInDataset = (dataset, id) => {
	const res = dataset?.data.find((obj) => obj.id === id);
	if (res) {
		return true;
	}
	return false;
};

// initial getter for favorites context list
export const getInitialFavorites = () => {
	let data = localStorage.getItem("favorites");
	if (data) {
		data = JSON.parse(data);
	} else {
		data = null;
	}
	return data;
};

export const getInitialWatchLater = () => {
	let data = localStorage.getItem("watchlater");
	if (data) {
		data = JSON.parse(data);
	} else {
		data = null;
	}
	return data;
};

export const createBackURL = (str) => {
	const arr = str.split("/");
	const res = arr.slice(0, -1);
	return res.join("/");
};
