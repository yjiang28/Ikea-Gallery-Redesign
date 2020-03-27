import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { LeftArrowIcon, RightArrowIcon } from "./Icons";

const SlideButton = forwardRef(({ direction, className, ...props }, ref) => (
	<Button
		{...props}
		ref={ref}
		className={className ? " " + className : ""}
		title={direction === "left" ? "Previous room" : "Next room"}
		aria-label={direction === "left" ? "Previous room" : "Next room"}
	>
		{direction === "left" ? <LeftArrowIcon /> : <RightArrowIcon />}
	</Button>
));

SlideButton.propTypes = {
	direction: PropTypes.oneOf(["left", "right"])
};

export default SlideButton;
