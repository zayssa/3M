import React from "react";
import s from "./UserInfo.module.css";
import { Typography, Box } from "@mui/material";

const UserInfo = ({ name, about, group, email }) => {
  return (
    <section className={s.userInfo}>
      <Typography
        sx={{
          fontFamily: "Pangolin",
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
            <b>ФИО:</b> {name}
          </Typography>
          <Typography lineHeight="2" className={s.about}>
            <b>Статус:</b> {about}
          </Typography>
          <Typography lineHeight="2" className={s.group}>
            <b>Группа:</b> {group}
          </Typography>
          <Typography lineHeight="2" className={s.contacts}>
            <b>Контакты:</b> {email}
          </Typography>
        </div>
      </Box>
    </section>
  );
};

export default UserInfo;
