import React, { Fragment, forwardRef } from "react";
import PropTypes from "prop-types";
import { AnchorMenu, Divider, FavItem, MenuItem } from "./";

const FavMenu = forwardRef(({ className, fav, anchorEl, ...props }, ref) => {
	const items = Object.keys(fav).reduce(
		(acc, id) => (fav[id] ? [...acc, fav[id]] : acc),
		[]
	);

	return (
		<AnchorMenu anchorEl={anchorEl}>
			{items.length > 0 ? (
				items.map(item => (
					<Fragment key={item.id}>
						<FavItem item={item} />
						<Divider />
					</Fragment>
				))
			) : (
				<MenuItem>
					<span style={{ margin: "auto" }}>
						Your haven't liked any items.
					</span>
				</MenuItem>
			)}
		</AnchorMenu>
	);
});

FavMenu.propTypes = {
	anchorEl: PropTypes.object,
	fav: PropTypes.object.isRequired
};

export default FavMenu;
