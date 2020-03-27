import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	menuItem: {
		width: "100%",
		height: 64,
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		padding: "0.5rem",
		"& *": {
			maxHeight: "100%",
			width: "auto",
			color: "#222"
		}
	}
});

const MenuItem = forwardRef(({ children, className, ...props }, ref) => {
	const classes = useStyles();

	return (
		<div
			{...props}
			role="listitem"
			className={classes.menuItem + (className ? " " + className : "")}
		>
			{children}
		</div>
	);
});

export default MenuItem;
