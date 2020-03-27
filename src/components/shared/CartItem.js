import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { FavItem } from "./";

const CartItem = forwardRef(({ className, item, ...props }, ref) => {
	return <FavItem displayQty item={item} />;
});

CartItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default CartItem;
