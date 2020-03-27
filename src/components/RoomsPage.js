import React from "react";
import PropTypes from "prop-types";
import { Slide, SlideItem } from "./shared";
import { getRooms } from "../scripts/data";

const RoomsPage = ({ store, slide }) => {
	const rooms = getRooms();
	return (
		<Slide store={store} slide={slide}>
			{rooms.map(room => (
				<SlideItem
					src={room.src}
					name={room.name}
					description={room.description}
					hidden
				/>
			))}
		</Slide>
	);
};

RoomsPage.propTypes = {
	store: PropTypes.object.isRequired,
	slide: PropTypes.number.isRequired
};

export default RoomsPage;
