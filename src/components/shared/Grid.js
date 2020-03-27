import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	grid: {
		display: "grid",
		gridTemplateColumns: "360px 360px 360px 360px 360px",
		gridTemplateRows: 360,

		"@media (max-width: 600px)": {
			gridTemplateRows: "320px 320px 320px 320px 320px",
			gridTemplateColumns: 320,
			margin: "auto"
		}
	}
});

const Grid = forwardRef(({ images, children, className, ...props }, ref) => {
	const classes = useStyles(props);

	return (
		<div
			{...props}
			role="grid"
			ref={ref}
			className={classes.grid + (className ? " " + className : "")}
		>
			{children}
		</div>
	);
});

export default Grid;
