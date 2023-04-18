import React from "react";
import s from "./UserInfo.module.css";
import { Typography, Box } from "@mui/material";

const UserInfo = ({ name, about, group, email }) => {
  return (
    <section className={s.userInfo}>
      <Typography variant="h3"  className={s.title}>
        Мой профиль
      </Typography>
      <Box className={s.info}>
        <Box className={s.infoTitle}>
          <Typography variant="h5">Информация</Typography>
        </Box>
        <Typography className={s.name}>{name}</Typography>
        <Typography className={s.about}>{about}</Typography>
        <Typography className={s.group}>Группа: {group}</Typography>
        <Typography className={s.contacts}>Контакты: {email}</Typography>
      </Box>
    </section>
  );
};

export default UserInfo;
