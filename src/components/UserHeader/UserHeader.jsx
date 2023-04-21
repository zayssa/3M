import React, { useContext } from 'react';
import s from './UserHeader.module.css';
import { Typography, Box, Container } from '@mui/material';
import { UserContext } from '../../context/UserContext';

const UserHeader = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <Container>
        <section className={s.userBox}>
          <Box className={s.user}>
            <img
              className={s.avatar}
              src={currentUser.avatar}
              alt="Фото профиля"
            />
            <Box className={s.userInfo}>
              <Typography className={s.name}>{currentUser.name}</Typography>
              <Typography className={s.about}>{currentUser.about}</Typography>
            </Box>
          </Box>
        </section>
      </Container>
    </>
  );
};

export default UserHeader;
