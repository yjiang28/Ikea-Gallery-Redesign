import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	container: {
		width: "100%",
		marginTop: "8rem",
		paddingLeft: 32,
		paddingRight: 32,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",

		"@media (max-width: 600px)": {
			marginTop: "4rem"
		}
	}
});

const Container = forwardRef(({ className, ...props }, ref) => {
	const classes = useStyles(props);

	return (
		<main
			{...props}
			ref={ref}
			className={classes.container + (className ? " " + className : "")}
		>
			{props.children}
		</main>
	);
});

export default Container;
