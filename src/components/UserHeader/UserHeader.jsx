import React from "react";
import s from "./UserHeader.module.css";
import { Button, Typography, Box } from "@mui/material";

const UserHeader = ({ name, about, avatar, email, group }) => {
  return (
    <>
      <section className={s.userBox}>
        <Box className={s.user}>
          <img className={s.avatar} src={avatar} alt="Фото профиля" />
          <Box className={s.userInfo}>
            <Typography className={s.name}>{name}</Typography>
            <Typography className={s.about}>{about}</Typography>
          </Box>
        </Box>
        <Button className={s.edit} variant="contained" color="success" size="large">
          Редактировать
        </Button>
      </section>
    </>
  );
};

export default UserHeader;
