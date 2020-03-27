import React, { Fragment, forwardRef } from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import { AnchorMenu, Divider, FavItem, MenuItem } from "./";

const FavMenu = forwardRef(({ className, fav, anchorEl, ...props }, ref) => {
	return (
		<AnchorMenu anchorEl={anchorEl}>
			{Object.keys(fav) > 0 ? (
				Object.keys(fav).map(id => (
					<Fragment key={id}>
						<FavItem item={fav[id]} />
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
