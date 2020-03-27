import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";

const render = () => {
	ReactDOM.render(
		<App {...store.getState()} store={store} />,
		document.getElementById("root")
	);
};

const store = createStore(reducers);
store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
