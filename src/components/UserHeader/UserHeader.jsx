import React from "react";
import s from "./UserHeader.module.css";

const UserHeader = ({ name, about, avatar, email, group }) => {
  return (
    <>
      <section className={s.userBox}>
        <div className={s.user}>
          <img className={s.avatar} src={avatar} alt="Фото профиля" />
          <div className={s.userInfo}>
            <p className={s.name}>{name}</p>
            <p className={s.about}>{about}</p>
          </div>
        </div>
        <button className={s.edit}>Редактировать</button>
      </section>
    </>
  );
};

export default UserHeader;
