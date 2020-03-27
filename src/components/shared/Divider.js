import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	divider: {
		width: "100%",
		height: 1,
		background: "#AAAAAA"
	}
});

const Divider = forwardRef(({ className, ...props }, ref) => {
	const classes = useStyles();

	return (
		<div
			{...props}
			ref={ref}
			className={classes.divider + (className ? " " + className : "")}
		></div>
	);
});

export default Divider;
