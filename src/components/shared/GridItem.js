import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	gridItem: {
		margin: 16,
		backgroundRepeat: "no-repeat",
		cursor: "pointer",
		backgroundImage: props => `url(${props.image})`,
		backgroundSize: "100%"
	}
});

const GridItem = forwardRef(({ className, image, ...props }, ref) => {
	const classes = useStyles({ image });
	return (
		<div
			{...props}
			role="gridcell img"
			ref={ref}
			className={classes.gridItem + (className ? " " + className : "")}
		></div>
	);
});

GridItem.propTypes = {
	image: PropTypes.string.isRequired
};

export default GridItem;
