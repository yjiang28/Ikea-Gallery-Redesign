import React, { Fragment, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { gsap, Draggable } from "gsap/all";
import { Grid, GridItem, Container } from "./shared";
import { getItems } from "../scripts/data";
import { SET_ITEM, SET_PAGE } from "../reducers/";

gsap.registerPlugin(Draggable);

const useStyles = createUseStyles({
	grid: {
		clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)"
	},
	text: {
		opacity: 0,
		marginTop: "4rem",
		marginBottom: "1rem",
		width: "100%",
		color: "white",
		fontSize: "1.2rem",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	back: {
		cursor: "pointer",
		textDecoration: "underline"
	}
});

const animateItemsPageIn = (gridRef, textRef) => {
	const tl = gsap.timeline();
	tl.to(
		gridRef.current,
		{
			"clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
			duration: 0.32
		},
		"in"
	)
		.to(
			textRef.current,
			{
				opacity: 0,
				duration: 0.32
			},
			"in"
		)

		.set(
			textRef.current,
			{
				opacity: 1
			},
			"in+=0.32"
		)
		.to(
			gridRef.current,
			{
				"clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
				duration: 0.96
			},
			"in+=0.32"
		);
};

const animateItemsPageOut = (gridRef, textRef, callback) => {
	const tl = gsap.timeline();
	[gridRef, textRef].forEach(ref => {
		tl.to(
			ref.current,
			{
				"clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
				duration: 0.32
			},
			"out"
		);
	});
	tl.add(callback, 1);
};

const ItemsPage = ({ slide, cart, fav, store }) => {
	const classes = useStyles();
	const items = getItems(slide);
	const containerRef = useRef();
	const textRef = useRef();
	const gridRef = useRef();

	const openModal = e => {
		const { id } = e.target;
		animateItemsPageOut(gridRef, textRef, () => {
			store.dispatch({ type: SET_ITEM, item: id });
			store.dispatch({ type: SET_PAGE, page: 2 });
		});
	};

	const back = e => {
		animateItemsPageOut(gridRef, textRef, () => {
			store.dispatch({ type: SET_PAGE, page: 0 });
		});
	};

	useEffect(() => {
		animateItemsPageIn(gridRef, textRef);
		new Draggable(gridRef.current, {
			type: "x",
			bounds: containerRef.current,
			dragResistance: 0.35,
			inertia: true,
			throwResistance: 2000,
			onDrag: () => {
				gsap.set(".grid, .gridItem", { cursor: "grab" });
			},
			onDragEnd: () => {
				gsap.set(".grid, .gridItem", { cursor: "pointer" });
			}
		});
	}, []);

	return (
		<Fragment>
			<Container ref={containerRef}>
				<div className={classes.text} ref={textRef}>
					<div className={classes.instruction}>
						Drag or click to view items
					</div>
					<div className={classes.back} onClick={back}>
						Go back
					</div>
				</div>
				<Grid ref={gridRef} className={classes.grid}>
					{items.map((item, idx) => (
						<GridItem
							className={"gridItem"}
							image={item.preview}
							title={item.name}
							aria-label={item.name}
							key={item.id}
							id={item.id}
							onClick={openModal}
						/>
					))}
				</Grid>
			</Container>
		</Fragment>
	);
};

ItemsPage.propTypes = {
	slide: PropTypes.number.isRequired,
	cart: PropTypes.object.isRequired,
	fav: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired
};

export default ItemsPage;
