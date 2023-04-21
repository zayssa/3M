import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import s from './NotFound.module.css';
import notFound from './image/ic-notfound.svg';

const NotFound = ({
  title,
  buttonText = 'На главную ',
  buttonAction,
  href,
}) => {
  return (
    <div className={s.notFound}>
      <img src={notFound} className={s.image} alt="ничего не найдено" />
      <h1 className={s.title}>{title}</h1>
      <Button
        component={Link}
        sx={{ mt: 4 }}
        onClick={buttonAction}
        color="primary"
        variant="contained"
        to={href}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default NotFound;
