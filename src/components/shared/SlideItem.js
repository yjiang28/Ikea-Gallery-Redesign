import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	slideItem: {
		position: "absolute",
		left: 0,
		top: 0,
		width: "100%",
		height: "100%",
		backgroundPosition: "center center",
		backgroundSize: "cover",
		transition: "0.64s 0.32s",
		backgroundImage: props => `url(${props.src})`,
		opacity: props => (props.hidden ? 0 : 1)
	}
});

const SlideItem = forwardRef(({ className, src, hidden, ...props }, ref) => {
	const classes = useStyles({ src, hidden });

	return (
		<div
			{...props}
			ref={ref}
			className={classes.slideItem + (className ? " " + className : "")}
		></div>
	);
});

SlideItem.propTypes = {
	hidden: PropTypes.bool.isRequired,
	src: PropTypes.string.isRequired
};

export default SlideItem;
