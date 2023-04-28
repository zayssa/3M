import React, { useContext, useEffect } from 'react';
import s from './UserPage.module.css';
import UserHeader from '../../components/UserHeader/UserHeader';
import { UserContext } from '../../context/UserContext';
import UserInfo from '../../components/UserInfo/UserInfo';
import Spinner from '../../components/Spinner/Spinner';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import { URLS } from '../../utils/constants';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';

import noRegistration from './img/noRegistration.jpeg';

const UserPage = () => {
  const { currentUser, isLoading } = useContext(UserContext);
  const { setBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    setBreadcrumbs([
      {
        label: 'Обо мне',
        url: `/${URLS.user}`,
      },
    ]);
  }, [setBreadcrumbs]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : currentUser ? (
        <main className={s.main}>
          <UserHeader />

          <UserInfo />
        </main>
      ) : (
        <Container>
          <Box pt={5}>
            <Typography variant="h5" align="center">
              Пожалуйста, авторизуйтесь!
            </Typography>
            <Box my={4}>
              <img
                src={noRegistration}
                alt="Пожалуйста, авторизуйтесь!"
                width="100%"
              />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default UserPage;
