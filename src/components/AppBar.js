import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  forwardRef
} from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { Button, Badge, FavMenu, CartMenu } from "./shared";
import { HeartIcon, CartIcon, MenuIcon } from "./shared/Icons";
import { SET_PAGE, SET_SLIDE } from "../reducers/";

const useStyles = createUseStyles({
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  brand: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white"
  },
  drawerBtn: {
    display: "none",
    marginRight: "0.85rem",
    "& svg": { width: "1.2rem" },

    "@media (max-width: 600px)": {
      display: "initial"
    }
  },
  tabs: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  tab: {
    background: "transparent",
    marginLeft: "0.85rem",
    marginRight: "0.85rem",
    color: "white",
    "& svg": {
      color: "white",
      width: "1.2rem",
      height: "1.2rem"
    }
  },
  drawer: {
    "@media (max-width: 600px)": {
      position: "fixed",
      top: 51.2,
      left: 0,
      height: "100vh",
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      alignItems: "flex-start",
      background: "white",
      zIndex: 900
    }
  },
  appbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    padding: "3rem 2rem",
    justifyContent: "space-between",
    zIndex: 1000,
    color: "white",

    "@media (max-width: 600px)": {
      padding: "0.5rem",
      background: "white",
      "& *": {
        color: "#222"
      }
    }
  }
});

const AppBar = forwardRef(({ cart, fav, store, ...props }, ref) => {
  const classes = useStyles();

  const [cartAnchorEl, setCartAnchorEl] = useState(null);
  const [favAnchorEl, setFavAnchorEl] = useState(null);
  const [drawer, setDrawer] = useState(window.innerWidth > 600);
  const drawerRef = useRef();

  const badgeContent = Object.keys(cart).reduce(
    (acc, key) => acc + cart[key].quantity,
    0
  );

  const onClickBrand = e => {
    store.dispatch({ type: SET_PAGE, page: 0 });
    store.dispatch({ type: SET_SLIDE, slide: 0 });
  };

  const toggleCartMenu = e => {
    setCartAnchorEl(cartAnchorEl ? null : e.currentTarget);
  };

  const toggleFavMenu = e => {
    setFavAnchorEl(favAnchorEl ? null : e.currentTarget);
  };

  const toggleDrawer = e => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    window.addEventListener("resize", e => {
      setDrawer(window.innerWidth > 600);
    });
  }, []);

  useEffect(() => {
    const onClick = e => {
      setCartAnchorEl(null);
      setFavAnchorEl(null);
    };
    if (cartAnchorEl || favAnchorEl)
      document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [cartAnchorEl, favAnchorEl]);

  return (
    <nav {...props} ref={ref} className={classes.appbar}>
      <div className={classes.row}>
        <Button className={classes.drawerBtn} onClick={toggleDrawer}>
          <MenuIcon />
        </Button>
        <Button className={classes.brand} role="banner" onClick={onClickBrand}>
          IKEA
        </Button>
      </div>
      <div className={classes.tabs} role="tabpanel" id="tabpanel">
        <div
          className={classes.drawer}
          ref={drawerRef}
          style={{ display: drawer ? "flex" : "none" }}
        >
          {["Products", "Rooms", "Inspirations", "On Sale"].map(tab => (
            <Button
              key={tab}
              className={classes.tab}
              role="tab"
              aria-controls="tabpanel"
            >
              {tab}
            </Button>
          ))}
        </div>
        <Button
          className={classes.tab}
          onClick={toggleFavMenu}
          role="tab"
          title="liked items"
          aria-controls="tabpanel"
          aria-label="liked items"
        >
          <HeartIcon />
        </Button>
        <Badge
          className={classes.tab}
          content={badgeContent}
          visible={badgeContent > 0}
          onClick={toggleCartMenu}
          role="tab"
          title="Your cart"
          aria-controls="tabpanel"
          aria-label="Your cart"
        >
          <Button>
            <CartIcon />
          </Button>
        </Badge>
      </div>
      <CartMenu anchorEl={cartAnchorEl} cart={cart} />
      <FavMenu anchorEl={favAnchorEl} fav={fav} />
    </nav>
  );
});

AppBar.propTypes = {
  cart: PropTypes.object.isRequired,
  fav: PropTypes.object.isRequired
};

export default AppBar;
