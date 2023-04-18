import React, { useContext } from "react";
import s from "./UserPage.module.css";
import { Sort } from "@mui/icons-material";
import UserHeader from "../../components/UserHeader/UserHeader";
import { UserContext } from "../../context/UserContext";
import UserInfo from "../../components/UserInfo/UserInfo";
import UserAbout from "../../components/UserAbout/UserAbout";
import Spinner from '../../components/Spinner/Spinner'

const UserPage = () => {

    const {currentUser, isLoading} = useContext(UserContext)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className={s.main}>
          <UserHeader currentUser={currentUser} {...currentUser} />

          <Sort />

          <UserInfo currentUser={currentUser} {...currentUser} />
          <UserAbout />
        </main>
      )}
    </>
  );
};

export default UserPage;
