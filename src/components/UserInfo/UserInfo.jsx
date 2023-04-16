import React from "react";
import s from "./UserInfo.module.css";

const UserInfo = ({ name, about, group, email }) => {
  return (
    <section className={s.userInfo}>
      <h1 className={s.title}>Мой профиль</h1>
      <div className={s.info}>
        <div className={s.infoTitle}>
          <h3>Информация</h3>
        </div>
        <p className={s.name}>{name}</p>
        <p className={s.about}>{about}</p>
        <p className={s.group}>Группа: {group}</p>
        <p className={s.contacts}>Контакты: {email}</p>
      </div>
    </section>
  );
};

export default UserInfo;
