import React, { useEffect, useRef, useState } from "react";

const Tooltip = ({ text, alternativeText, children }) => {
	// store a default text for a tooltip
	const [tip, setTip] = useState(text);

	const tooltip = useRef(null);

	const wrapper = useRef(null);

	// anytime tip changes we have a breaking effect thing
	useEffect(() => {
		const timeout = setTimeout(() => {
			setTip(text);
		}, "1000");
		return () => {
			clearTimeout(timeout);
		};
	}, [tip]);

	// and if tooltip have an alternative text it shows anytime we click on it
	return (
		<button
			type="button"
			onClick={() => {
				alternativeText && setTip(alternativeText);
			}}
			onMouseEnter={({ clientX }) => {
				if (!tooltip.current || !wrapper.current) return;
				const { left } = wrapper.current.getBoundingClientRect();
				tooltip.current.style.left = `${clientX - left}px`;
			}}
			ref={wrapper}
			className="group relative inline-block"
		>
			{children}
			{tooltip ? (
				<span
					ref={tooltip}
					className="absolute bottom-full mt-2 hidden whitespace-nowrap rounded-lg bg-dark_purple px-2 py-1 text-base capitalize text-white opacity-0 transition-all duration-100 ease-in group-hover:block group-hover:opacity-100 dark:bg-light_purple dark:text-black 2xl:text-2xl"
				>
					{tip}
				</span>
			) : null}
		</button>
	);
};

export default Tooltip;
