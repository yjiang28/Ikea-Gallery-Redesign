import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	input: {
		outline: "none",
		padding: "0.5rem",
		border: "none",
		borderBottom: "solid 1px white"
	}
});

const Input = forwardRef(
	({ className, required, labelText, ...props }, ref) => {
		const classes = useStyles();
		return (
			<input
				{...props}
				aria-label={labelText}
				aria-required={required}
				ref={ref}
				className={classes.input + (className ? " " + className : "")}
			/>
		);
	}
);

Input.propTypes = {
	labelText: PropTypes.string
};

export default Input;
