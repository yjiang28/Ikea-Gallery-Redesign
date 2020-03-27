import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	button: {
		border: "none",
		outline: "none",
		cursor: "pointer",
		background: "transparent",
		padding: 0,
		"&, & svg": {
			color: "#222"
		}
	}
});

const Button = forwardRef(({ className, children, color, ...props }, ref) => {
	const classes = useStyles({ color });

	return (
		<button
			{...props}
			ref={ref}
			className={classes.button + (className ? " " + className : "")}
		>
			{children}
		</button>
	);
});

Button.propTypes = {
	color: PropTypes.string
};

export default Button;
