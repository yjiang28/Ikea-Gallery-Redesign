import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import Menu from "./Menu";

const useStyles = createUseStyles({
  menu: {
    position: "absolute",
    top: props => props.bottom,
    right: props => window.innerWidth - props.right
  }
});

const coord = elem => {
  let rect = elem.getBoundingClientRect();
  let left =
      rect.left + (window.pageXOffset || document.documentElement.scrollLeft),
    top = rect.top + (window.pageYOffset || document.documentElement.scrollTop),
    right = left + elem.clientWidth,
    bottom = top + elem.clientHeight;
  return { left, right, top, bottom };
};

const AnchorMenu = forwardRef(
  ({ anchorEl, children, className, ...props }, ref) => {
    if (anchorEl) {
      const { right, bottom } = coord(anchorEl);
      const classes = useStyles({ bottom, right });

      return (
        <Menu
          {...props}
          ref={ref}
          className={classes.menu + (className ? " " + className : "")}
        >
          {children}
        </Menu>
      );
    } else return null;
  }
);

AnchorMenu.propTypes = {
  anchorEl: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default AnchorMenu;
