import s from "./ButtonNotFound.module.css";
import cn from "classnames";
import React from "react";
import { Link } from "react-router-dom";

function ButtonNotFound ({
  type = "primary",
  children,
  onClick,
  href,
  className,
  ...restProps
}) {
  if (href) {
    return (
      <Link
        to={href}
        className={cn(s.button, className, {
          [s.primary]: type === "primary",
          [s.secondary]: type === "secondary",
        })}
        {...restProps}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: type === "primary",
        [s.secondary]: type === "secondary",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonNotFound;
