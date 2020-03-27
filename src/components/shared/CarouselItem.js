import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	carouselItem: {
		color: "white",
		fontSize: "2rem",
		width: props => props.width,
		height: props => props.width,
		paddingBottom: 0,
		cursor: "pointer",

		"& img": {
			margin: 0,
			width: props => props.width
		}
	}
});

const CarouselItem = forwardRef(
	({ name, alt, src, width, children, className, ...props }, ref) => {
		const classes = useStyles({ width });

		return (
			<div
				{...props}
				className={
					classes.carouselItem + (className ? " " + className : "")
				}
				ref={ref}
			>
				<img name={name} src={src} alt={alt} />
			</div>
		);
	}
);

CarouselItem.propTypes = {
	name: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	width: PropTypes.number
};

export default CarouselItem;
