import React, { useContext } from 'react';
import { Typography, Box } from '@mui/material';

import s from './UserInfo.module.css';
import { UserContext } from '../../context/UserContext';

const UserInfo = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <section className={s.userInfo}>
      <Typography
        sx={{
          fontFamily: 'Pangolin',
        }}
        variant="h3"
        className={s.title}
      >
        Мой профиль
      </Typography>
      <Box className={s.info}>
        <div className={s.box}>
          <Typography className={s.infoTitle} variant="h5">
            Информация
          </Typography>
        </div>
        <div className={s.box}>
          <Typography lineHeight="2" className={s.name}>
            <b>ФИО:</b> {currentUser.name}
          </Typography>
          <Typography lineHeight="2" className={s.about}>
            <b>Статус:</b> {currentUser.about}
          </Typography>
          <Typography lineHeight="2" className={s.group}>
            <b>Группа:</b> {currentUser.group}
          </Typography>
          <Typography lineHeight="2" className={s.contacts}>
            <b>Контакты:</b> {currentUser.email}
          </Typography>
        </div>
      </Box>
    </section>
  );
};

export default UserInfo;
