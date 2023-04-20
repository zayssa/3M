import { Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './ContentHeader.module.css';

const ContentHeader = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Link className={s.buttonBack} onClick={() => navigate(-1)}>
        Назад
      </Link>
      <h1 className={s.title}>{title}</h1>
      {children}
    </div>
  );
};

export default ContentHeader;
