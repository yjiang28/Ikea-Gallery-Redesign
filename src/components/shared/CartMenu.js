import React, { Fragment, forwardRef } from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import { AnchorMenu, CartItem, Divider, MenuItem } from "./";

const CartMenu = forwardRef(({ className, cart, anchorEl, ...props }, ref) => {
	return (
		<AnchorMenu anchorEl={anchorEl}>
			{Object.keys(cart) > 0 ? (
				Object.keys(cart).map(id => (
					<Fragment key={id}>
						<CartItem item={cart[id]} />
						<Divider />
					</Fragment>
				))
			) : (
				<MenuItem>
					<span style={{ margin: "auto" }}>
						Your shopping cart is empty.
					</span>
				</MenuItem>
			)}
		</AnchorMenu>
	);
});

CartMenu.propTypes = {
	anchorEl: PropTypes.object,
	cart: PropTypes.object.isRequired
};

export default CartMenu;
