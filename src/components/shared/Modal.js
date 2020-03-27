import React, { useRef, useState, useEffect, forwardRef } from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import { Button, Carousel, CarouselItem, Input } from "./";
import { getItem } from "../../scripts/data";
import { ADD_TO_CART, ADD_TO_FAV } from "../../reducers";

const useStyles = createUseStyles({
	modal: {
		width: 800,
		maxWidth: "100%",
		margin: "2rem auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",

		"& button": {
			padding: 8
		},

		"@media (max-width: 800px)": {
			flexDirection: "column",
			alignItems: "center"
		},
		"&, & *": {
			color: "white",
			fontSize: "1rem"
		}
	},
	modalAction: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "stretch",
		paddingRight: "2rem",
		marginLeft: "2rem",
		minWidth: 360,

		"& > *": {
			marginBottom: "1.7rem",
			"@media (max-width: 800px)": {
				marginTop: "1.7rem"
			}
		}
	},
	quantity: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		"& > input": {
			backgroundColor: "#222",
			padding: "0.5rem"
		}
	},
	cart: {
		color: "white",
		borderBottom: "solid 1px white"
	},
	fav: {
		color: "white",
		borderBottom: "solid 1px white",
		marginBottom: 0
	}
});

const Modal = forwardRef(({ id, store, fav }, ref) => {
	const classes = useStyles();
	const item = getItem(id);
	const { images, brand, name, description, price } = item;

	const submit = (e, action) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		store.dispatch({
			type: "ADD_TO_CART",
			item: {
				id,
				quantity: formData.get("quantity"),
				avatar: images[0],
				brand,
				name,
				price
			}
		});
	};

	const addToFav = e => {
		store.dispatch({
			type: "ADD_TO_FAV",
			item: {
				id,
				avatar: images[0],
				brand,
				name,
				price
			}
		});
	};

	return (
		<div className={classes.modal} ref={ref}>
			<Carousel width={360}>
				{images.map(link => (
					<CarouselItem
						src={link}
						key={link}
						name={name}
						alt={name}
					/>
				))}
			</Carousel>
			<form className={classes.modalAction} onSubmit={submit}>
				<div className={classes.brand}>
					<b>{brand}</b>
				</div>
				<div>{name}</div>
				<div>{description}</div>
				<div>
					<b>${price}</b>
				</div>
				<div className={classes.quantity}>
					<label htmlFor="quantity">Quantity: </label>
					<Input
						id="quantity"
						type="number"
						min="1"
						max="9"
						step="1"
						name="quantity"
						defaultValue="1"
					/>
				</div>
				<Button className={classes.cart} name="cart" type="submit">
					Add to Cart
				</Button>
				<Button
					className={classes.fav}
					name="fav"
					type="button"
					onClick={addToFav}
				>
					{`${fav[id] ? "You liked this item" : "Add to Favorites"}`}
				</Button>
			</form>
		</div>
	);
});

Modal.propTypes = {
	id: PropTypes.number.isRequired,
	store: PropTypes.object.isRequired,
	fav: PropTypes.object.isRequired
};

export default Modal;
