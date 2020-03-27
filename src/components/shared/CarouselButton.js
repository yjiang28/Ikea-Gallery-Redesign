import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const CarouselButton = forwardRef(({ direction, className, ...props }, ref) => {
	return (
		<Button {...props} ref={ref} className={className ? className : ""}>
			{direction === "left" ? "<" : ">"}
		</Button>
	);
});

CarouselButton.propTypes = {
	direction: PropTypes.oneOf(["left", "right"])
};

export default CarouselButton;
