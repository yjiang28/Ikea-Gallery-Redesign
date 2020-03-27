import React, { useRef, useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { gsap } from "gsap/all";
import {
  Button,
  Carousel,
  CarouselItem,
  Container,
  Input,
  Modal
} from "./shared";
import { getItem, getNextItemId, getPrevItemId } from "../scripts/data";

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
  },
  row: {
    marginTop: "4rem",
    marginBottom: "1rem",
    width: "100%",
    color: "white",
    fontSize: "1.2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0
  },
  button: {
    color: "white",
    textDecoration: "underline",
    fontSize: "1.2rem",

    "&:disabled": {
      color: "gray",
      cursor: " not-allowed"
    }
  }
});

const animateItemPageIn = (textRef, actionRef) => {
  const tl = gsap.timeline();

  [textRef, actionRef].forEach(ref => {
    tl.to(
      ref.current,
      {
        opacity: 0,
        duration: 0.32
      },
      "in"
    ).set(
      ref.current,
      {
        opacity: 1
      },
      "in+=0.32"
    );
  });
};

const animateItemPageOut = (textRef, actionRef, callback) => {
  const tl = gsap.timeline();
  [textRef, actionRef].forEach(ref => {
    tl.to(
      ref.current,
      {
        opacity: 0,
        duration: 0.32
      },
      "out"
    );
  });
  tl.add(callback, 1);
};

const animateModalIn = (modalRef, callback) => {
  const tl = gsap.timeline();
  tl.to(
    modalRef.current,
    {
      "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
      duration: 0.32
    },
    "in"
  )
    .to(
      modalRef.current,
      {
        "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        duration: 0.96
      },
      "in+=0.32"
    )
    .add(callback, 0.32);
};

const animateModalOut = (modalRef, callback) => {
  const tl = gsap.timeline();
  tl.to(
    modalRef.current,
    {
      "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
      duration: 0.32
    },
    "out"
  ).add(callback, 0.32);
};

const ItemPage = ({ store, cart, fav, slide, id, ...props }) => {
  const classes = useStyles();
  const item = getItem(id);
  const { images, brand, name, description, price } = item;

  const [nextItem, setNextItem] = useState();
  const [prevItem, setPrevItem] = useState();

  const textRef = useRef();
  const modalRef = useRef();
  const actionRef = useRef();

  useEffect(() => {
    animateItemPageIn(textRef, actionRef);
  }, []);

  useEffect(() => {
    setNextItem(getNextItemId(slide, id));
    setPrevItem(getPrevItemId(slide, id));
    animateModalIn(modalRef, textRef);
  }, [id, slide]);

  const back = e => {
    animateModalOut(modalRef);
    animateItemPageOut(textRef, actionRef, () => {
      store.dispatch({ type: "SET_PAGE", page: 1 });
    });
  };

  const nextModal = e => {
    animateModalOut(modalRef, () => {
      store.dispatch({ type: "SET_ITEM", item: nextItem });
    });
  };

  const prevModal = e => {
    animateModalOut(modalRef, () =>
      store.dispatch({ type: "SET_ITEM", item: prevItem })
    );
  };

  return (
    <Container>
      <div className={classes.row} ref={textRef}>
        <div className={classes.heading}>
          IKEA from the comfort of your home.
        </div>
        <Button className={classes.button} onClick={back}>
          Go back
        </Button>
      </div>
      <Modal id={id} fav={fav} store={store} ref={modalRef} />
      <div className={classes.row} ref={actionRef} style={{ marginTop: "0" }}>
        <Button
          className={classes.button}
          onClick={nextModal}
          disabled={!nextItem}
        >
          Prev item
        </Button>
        <Button
          className={classes.button}
          onClick={prevModal}
          disabled={!prevItem}
        >
          Next item
        </Button>
      </div>
    </Container>
  );
};

export default ItemPage;
