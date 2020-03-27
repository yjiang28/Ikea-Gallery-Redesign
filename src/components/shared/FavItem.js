import React, { forwardRef } from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import { MenuItem } from "./";

const useStyles = createUseStyles({
	menuItem: { position: "relative" },
	menuItemText: { fontSize: 12, marginLeft: 16 },
	menuItemQty: {
		position: "absolute",
		top: "50%",
		right: 8,
		transform: "translateY(-50%)"
	}
});

const FavItem = forwardRef(
	({ className, displayQty = false, item, ...props }, ref) => {
		const classes = useStyles();

		return (
			<MenuItem className={classes.menuItem}>
				<img src={item.avatar} alt={item.name} />
				<div className={classes.menuItemText}>
					<div>{item.brand}</div>
					<div>{item.name}</div>
					{displayQty ? (
						<div className={classes.menuItemQty}>
							x {item.quantity}
						</div>
					) : null}
				</div>
			</MenuItem>
		);
	}
);

FavItem.propTypes = {
	displayQty: PropTypes.bool,
	item: PropTypes.object.isRequired
};

export default FavItem;
