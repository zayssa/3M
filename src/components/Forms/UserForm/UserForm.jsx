import React from 'react';
import s from './UserForm.module.css';
import { useForm } from 'react-hook-form';

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const onSubmit = (data) => {};

  return (
    <form method="post" className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={s.title}>Профиль</h3>
      <label>
        Имя
        <input
          type="text"
          placeholder="Введите имя"
          {...register('name', {
            required: 'Обязательное поле',
          })}
        />
        {errors && errors.name ? (
          <div>
            <p className={s.errorMessage}>{errors.name.message}</p>
          </div>
        ) : null}
      </label>
      <label>
        О себе
        <textarea
          type="text"
          placeholder="Напишите пару слов о себе"
          {...register('about')}
        />
      </label>
      <input type="text" placeholder="Ссылка на фото" {...register('photo')} />
      <div className={s.photo}>
        <img
          src="https://ic.pics.livejournal.com/olegmakarenko.ru/12791732/2404737/2404737_original.jpg"
          alt="Фото профиля"
        />
      </div>
      <button className={s.btn}>Сохранить</button>
    </form>
  );
};

export default UserForm;
