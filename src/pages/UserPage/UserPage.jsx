import React, { useContext } from 'react';
import s from './UserPage.module.css';
import UserHeader from '../../components/UserHeader/UserHeader';
import { UserContext } from '../../context/UserContext';
import UserInfo from '../../components/UserInfo/UserInfo';
import Spinner from '../../components/Spinner/Spinner';

const UserPage = () => {
  const { currentUser, isLoading } = useContext(UserContext);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className={s.main}>
          <UserHeader currentUser={currentUser} {...currentUser} />

          <UserInfo currentUser={currentUser} {...currentUser} />
        </main>
      )}
    </>
  );
};

export default UserPage;
