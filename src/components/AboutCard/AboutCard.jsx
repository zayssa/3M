import React from 'react';
import s from './AboutCard.module.css';

const AboutCard = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <h3>Маргарита Картмазова</h3>
        <img
          src="https://kartinkof.club/uploads/posts/2022-04/1649584203_5-kartinkof-club-p-ugarnie-kartinki-na-avatarku-dlya-devushek-5.jpg"
          alt="Фото"
          height={150}
        />
        <p>Начинающий разработчик</p>
      </div>

      <div>
        <h3>Марина Петрова</h3>
        <img
          src="https://mobimg.b-cdn.net/v3/fetch/43/43cd707ef1e6384257cea16f544ed822.jpeg"
          alt="Фото"
          height={150}
        />
        <p>Начинающий разработчик</p>
      </div>
    </div>
  );
};

export default AboutCard;
