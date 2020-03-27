import React, { Fragment, Component, cloneElement, Children } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import CarouselButton from "./CarouselButton";

const styles = {
  carouselContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center"
  },

  carousel: {
    overflow: "hidden"
  },

  carouselSlide: {
    display: "flex",
    justifyContent: "space-between"
  },

  carouselItem: {
    position: "relative",
    color: "white",
    fontSize: "2rem",
    width: 480,
    cursor: "pointer"
  },

  button: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1.5rem",
    background: "transparent"
  },

  btnLeft: {
    left: 0
  },

  btnRight: {
    right: 0
  }
};

class Carousel extends Component {
  state = {
    count: 1,
    translateX: -this.props.width,
    shiftEffect: true,
    startX: 0
  };

  numItem = Children.toArray(this.props.children).length + 2;
  initX = 0;

  shift = function(direction) {
    if (direction !== -1 && direction !== 1) return;

    const { count } = this.state;
    const { width } = this.props;

    if (
      (count >= this.numItem - 1 && direction === 1) ||
      (count <= 0 && direction === -1)
    )
      return;

    this.setState({
      count: count + direction,
      translateX: -(count + direction) * width,
      shiftEffect: true
    });
  };

  transitionEnd = function() {
    const { count } = this.state;
    const { width } = this.props;

    let updated_count =
      count <= 0 ? this.numItem - 2 : count >= this.numItem - 1 ? 1 : count;
    let updated_translateX = -updated_count * width;

    this.setState({
      count: updated_count,
      translateX: updated_translateX,
      shiftEffect: false
    });
  };

  dragStart = function(e) {
    e = e || window.event;
    e.preventDefault();

    this.initX = this.state.translateX;
    let startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;

    this.setState({ startX }, () => {
      document.onmousemove = this.dragAction.bind(this);
      document.onmouseup = this.dragEnd.bind(this);
    });
  };

  dragAction = function(e) {
    e = e || window.event;
    let endX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;

    const { startX, translateX } = this.state;
    this.setState({
      translateX: translateX + endX - startX,
      startX: endX
    });
  };

  dragEnd = function(e) {
    const { translateX } = this.state;
    const { width } = this.props;

    if (translateX - this.initX < -width / 3) this.shift(1);
    else if (translateX - this.initX > width / 3) this.shift(-1);
    else this.setState({ translateX: this.initX });
    document.onmousemove = null;
    document.onmouseup = null;
  };

  render = function() {
    const { translateX, shiftEffect } = this.state;
    const { classes, children, width } = this.props;
    const items = Children.toArray(children);

    return (
      <Fragment>
        <div
          {...this.props}
          className={
            classes.carouselContainer +
            (this.props.className ? " " + this.props.className : "")
          }
          style={{ width: width }}
        >
          <div className={classes.carousel} style={{ width: width }}>
            <div
              className={classes.carouselSlide}
              ref={this.slide}
              style={{
                width: this.numItem * width,
                transform: `translateX(${translateX}px)`,
                transition: shiftEffect ? "0.5s ease-out" : ""
              }}
              onTransitionEnd={this.transitionEnd.bind(this)}
              onMouseDown={this.dragStart.bind(this)}
              onTouchStart={this.dragStart.bind(this)}
              onTouchMove={this.dragAction.bind(this)}
              onTouchEnd={this.dragEnd.bind(this)}
            >
              {cloneElement(items[items.length - 1], {
                width: width
              })}
              {items.map((child, idx) => cloneElement(child, { width: width }))}
              {cloneElement(items[0], { width: width })}
            </div>
          </div>
          <CarouselButton
            className={classes.btnLeft + " " + classes.button}
            direction="left"
            onClick={() => {
              this.shift(-1);
            }}
          />
          <CarouselButton
            className={classes.btnRight + " " + classes.button}
            direction="right"
            onClick={() => {
              this.shift(1);
            }}
          />
        </div>
      </Fragment>
    );
  };
}

Carousel.propTypes = {
  width: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(styles)(Carousel);
