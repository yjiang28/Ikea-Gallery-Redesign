import React, { Children, useEffect, useRef, cloneElement } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import gsap from "gsap";
import SlideButton from "./SlideButton";
import { SET_PAGE, SET_SLIDE } from "../../reducers";

const useStyles = createUseStyles({
  slideContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  slideContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 300,
    marginLeft: 250,
    zIndex: 800,
    "@media (max-width: 960px)": {
      marginLeft: 150
    },
    "@media (max-width: 600px)": {
      marginLeft: 50
    }
  },
  slideNumber: {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    "@media (max-width: 600px)": {
      fontSize: "1rem"
    }
  },
  slideTitle: {
    color: "white",
    fontSize: "5rem",
    fontWeight: "bold",
    "@media (max-width: 600px)": {
      fontSize: "3rem"
    }
  },
  slideButton: {
    "& svg": {
      color: "white"
    },
    fontSize: "2rem"
  },
  rightButton: {
    marginLeft: 30
  },
  slideDescription: {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    "@media (max-width: 600px)": {
      fontSize: "1rem"
    }
  },
  slideAction: {
    color: "white",
    cursor: "pointer",
    textDecoration: "underline"
  }
});

const animateSlide = (
  slideRef,
  titleRef,
  numberRef,
  descriptionRef,
  actionRef
) => {
  const tl = gsap.timeline();
  tl.to(
    titleRef.current,
    {
      "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
      duration: 0.32
    },
    "in"
  )
    .to(
      descriptionRef.current,
      {
        "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
        duration: 0.32
      },
      "in"
    )

    .to(numberRef.current, { opacity: 0, duration: 0.32 }, "in")
    .set(numberRef.current, { opacity: 1 }, "in+=0.32")

    .to(actionRef.current, { opacity: 0, duration: 0.32 }, "in")
    .set(actionRef.current, { opacity: 1 }, "in+=0.32")

    .to(
      titleRef.current,
      {
        "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        duration: 0.64
      },
      "in+=0.32"
    )
    .to(
      descriptionRef.current,
      {
        "clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        duration: 0.64
      },
      "in+=0.32"
    );
};

const animateSlideOut = (
  slideRef,
  titleRef,
  numberRef,
  descriptionRef,
  actionRef,
  callback
) => {
  const tl = gsap.timeline();
  [titleRef, numberRef, descriptionRef, actionRef].forEach(ref => {
    tl.to(
      ref.current,
      {
        "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
        duration: 0.32
      },
      "out"
    );
  });
  tl.to(slideRef.current, { opacity: 0, duration: 0.32 }, "out+0.32").add(
    callback,
    1
  );
};

const Slide = ({ children, store, slide, ...props }) => {
  const classes = useStyles();
  const slides = Children.toArray(children);
  const slideQty = slides.length;

  const slideRef = useRef(),
    titleRef = useRef(),
    numberRef = useRef(),
    numberVariableRef = useRef(),
    descriptionRef = useRef(),
    actionRef = useRef();

  const shift = direction => {
    if (
      (slide === slideQty - 1 && direction === 1) ||
      (slide === 0 && direction === -1)
    )
      return;
    store.dispatch({ type: SET_SLIDE, slide: slide + direction });
  };

  const viewItems = () => {
    animateSlideOut(
      slideRef,
      titleRef,
      numberRef,
      descriptionRef,
      actionRef,
      () => {
        store.dispatch({ type: SET_SLIDE, slide });
        store.dispatch({ type: SET_PAGE, page: 1 });
      }
    );
  };

  useEffect(() => {
    animateSlide(
      slideRef,
      titleRef,
      numberVariableRef,
      descriptionRef,
      actionRef
    );
  }, [slide]);

  return (
    <div className={classes.slideContainer} ref={slideRef}>
      {slides.map((item, idx) => cloneElement(item, { hidden: idx !== slide }))}
      <div className={classes.slideContent}>
        <div className={classes.slideNumber} ref={numberRef}>
          <span className={classes.slideNumberVariable} ref={numberVariableRef}>
            {slide + 1}
          </span>
          <span> / {slideQty}</span>
        </div>
        <div className={classes.slideTitle} ref={titleRef}>
          {slides[slide].props.name}
        </div>
        <div className={classes.slideButton}>
          <SlideButton
            direction="left"
            className={classes.leftButton}
            onClick={() => {
              shift(-1);
            }}
          />
          <SlideButton
            direction="right"
            className={classes.rightButton}
            onClick={() => {
              shift(1);
            }}
          />
        </div>
        <div className={classes.slideDescription} ref={descriptionRef}>
          {slides[slide].props.description}
        </div>
        <div
          className={classes.slideAction}
          ref={actionRef}
          onClick={viewItems}
        >
          Shop This Room
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.object.isRequired
};

export default Slide;
