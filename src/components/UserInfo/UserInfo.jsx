import React, { useContext } from 'react';
import { Typography, Box } from '@mui/material';

import s from './UserInfo.module.css';
import { UserContext } from '../../context/UserContext';

const UserInfo = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <section className={s.userInfo}>
      <Typography variant="h3" className={s.title}>
        Мой профиль
      </Typography>
      <Box className={s.info}>
        <Box className={s.infoTitle}>
          <Typography variant="h5">Информация</Typography>
        </Box>
        <Typography className={s.name}>{currentUser.name}</Typography>
        <Typography className={s.about}>{currentUser.about}</Typography>
        <Typography className={s.group}>Группа: {currentUser.group}</Typography>
        <Typography className={s.contacts}>
          Контакты: {currentUser.email}
        </Typography>
      </Box>
    </section>
  );
};

export default UserInfo;
