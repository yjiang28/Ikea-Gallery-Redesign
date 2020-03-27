const initialState = {
	page: 0,
	slide: 0,
	item: 0,
	cart: {},
	fav: {}
};

const ADD_TO_CART = "ADD_TO_CART";
const ADD_TO_FAV = "ADD_TO_FAV";
const SET_PAGE = "SET_PAGE";
const SET_SLIDE = "SET_SLIDE";
const SET_ITEM = "SET_ITEM";

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const updatedState = { ...state },
				{ id } = action.item,
				quantity = Number(action.item.quantity);
			if (updatedState.cart[id])
				updatedState.cart[id].quantity += quantity;
			else {
				updatedState.cart[id] = {
					...action.item,
					quantity
				};
			}

			return updatedState;
		}
		case ADD_TO_FAV: {
			const updatedState = { ...state },
				{ id } = action.item;
			if (updatedState.fav[id]) delete updatedState.fav[id];
			else {
				updatedState.fav[id] = {
					...action.item
				};
			}

			return updatedState;
		}
		case SET_PAGE:
			return { ...state, page: action.page };
		case SET_SLIDE:
			return { ...state, slide: action.slide };
		case SET_ITEM:
			return { ...state, item: action.item };
		default:
			return state;
	}
};

export default reducers;
export { ADD_TO_CART, ADD_TO_FAV, SET_PAGE, SET_ITEM };
