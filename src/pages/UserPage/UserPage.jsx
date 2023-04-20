import React, { useContext, useEffect } from 'react';
import s from './UserPage.module.css';
import UserHeader from '../../components/UserHeader/UserHeader';
import { UserContext } from '../../context/UserContext';
import UserInfo from '../../components/UserInfo/UserInfo';
import Spinner from '../../components/Spinner/Spinner';
import { BreadcrumbsContext } from '../../context/BreadcrumbsContext';
import { URLS } from '../../utils/constants';

const UserPage = () => {
  const { isLoading } = useContext(UserContext);
  const { addBreadcrumbsPoint } = useContext(BreadcrumbsContext);

  useEffect(() => {
    addBreadcrumbsPoint({
      label: 'Обо мне',
      url: `/${URLS.user}`,
    });
  }, [addBreadcrumbsPoint]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className={s.main}>
          <UserHeader />

          <UserInfo />
        </main>
      )}
    </>
  );
};

export default UserPage;
