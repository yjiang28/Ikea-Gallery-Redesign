import React, { Fragment } from "react";
import AppBar from "./AppBar";
import ItemPage from "./ItemPage";
import RoomsPage from "./RoomsPage";
import ItemsPage from "./ItemsPage";
import "../styles/_layout.scss";

const App = ({ cart, fav, slide, page, item, store }) => {
  return (
    <Fragment>
      <AppBar cart={cart} fav={fav} color={"white"} store={store} />
      {page === 0 ? (
        <RoomsPage store={store} slide={slide} />
      ) : page === 1 ? (
        <ItemsPage
          slide={slide}
          cart={cart}
          fav={fav}
          page={page}
          store={store}
        />
      ) : (
        <ItemPage
          slide={slide}
          id={Number(item)}
          cart={cart}
          fav={fav}
          store={store}
        />
      )}
    </Fragment>
  );
};

export default App;
