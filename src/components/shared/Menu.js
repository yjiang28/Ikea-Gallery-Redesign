import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	menu: {
		width: 275,
		maxWidth: "100%",
		boxShadow: "0 0 4px #AAAAAA",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		background: "white",
		zIndex: 10
	}
});

const Menu = forwardRef(({ children, className, ...props }, ref) => {
	const classes = useStyles();
	return (
		<div
			{...props}
			ref={ref}
			role="list"
			className={classes.menu + (className ? " " + className : "")}
		>
			{children}
		</div>
	);
});

export default Menu;
