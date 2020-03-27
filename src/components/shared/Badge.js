import React, { cloneElement, forwardRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	badge: {
		position: "relative",

		"&::before": {
			position: "absolute",
			content: props => `'${props.content}'`,
			top: "-0.5rem",
			right: "-0.5rem",
			width: "1rem",
			height: "1rem",
			border: "solid 1px #222",
			borderRadius: "0.5rem",
			fontSize: "0.7rem",
			color: "#222",
			background: "white"
		}
	}
});

const Badge = forwardRef(
	({ className, children, visible, content, ...props }, ref) => {
		const classes = useStyles({ content });

		return (
			<div className={className ? " " + className : ""} ref={ref}>
				{cloneElement(children, {
					...props,
					className:
						children.props.className +
						(visible ? " " + classes.badge : "")
				})}
			</div>
		);
	}
);

Badge.propTypes = {
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	visible: PropTypes.bool.isRequired,
	children: PropTypes.element.isRequired
};

export default Badge;
