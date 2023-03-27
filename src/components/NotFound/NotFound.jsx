import React from "react";
import s from "./NotFound.module.css";
import notFound from "./image/ic-notfound.svg";
import { Link } from "react-router-dom";
import ButtonNotFound from "../ButtonNotFound/ButtonNotFound";

const NotFound = ({
  title,
  children,
  buttonText = "На главную ",
  buttonAction,
  href,
}) => {
  return (
    <div className={s.notFound}>
      <img src={notFound} className={s.image} alt="ничего не найдено" />
      <h1 className={s.title}>{title}</h1>
      {children && children}
      <ButtonNotFound
        className={s.button}
        onClick={buttonAction}
        type="secondary"
        href={href}
      >
        {buttonText}
      </ButtonNotFound>
    </div>
  );
};

export default NotFound;
