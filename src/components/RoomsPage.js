import React from "react";
import PropTypes from "prop-types";
import { Slide, SlideItem } from "./shared";

const RoomsPage = ({ store, slide }) => {
	return (
		<Slide store={store} slide={slide}>
			<SlideItem
				src="https://www.ikea.com/images/eket-cabinet-in-anthracite-in-a-living-room-with-cream-leath-235441c5fc0309c162129ca1eed37d87.jpg?f=xxxl"
				name="Modern"
				description="A “store in style” kind of living room"
				hidden={false}
			/>
			<SlideItem
				src="https://www.ikea.com/images/4-seat-lidhult-corner-sofa-in-dark-brown-leather-in-a-living-25ec4a87ce4bb639f803b29d5a4986dc.jpg?f=xxxl"
				name="Traditional"
				description="Me and my multigenerational home"
				hidden
			/>
			<SlideItem
				src="https://www.ikea.com/images/natural-leather-sofa-with-pink-and-grey-cushions-in-a-living-e9be5877243d7227cd81143281ac4da0.jpg?f=xxxl"
				name="Cozy"
				description="A comfortable spot with your name on it"
				hidden
			/>
		</Slide>
	);
};

RoomsPage.propTypes = {
	store: PropTypes.object.isRequired,
	slide: PropTypes.number.isRequired
};

export default RoomsPage;
