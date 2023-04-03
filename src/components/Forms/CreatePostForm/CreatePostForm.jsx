import React from "react";
import s from "./CreateFormPost.module.css";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

const CreatePostForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({mode: 'onBlur'});

  console.log("errors", errors);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form method="post" className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={s.title}>Новый пост</h3>
      <input
        type="text"
        placeholder="Заголовок"
        {...register("title", {
          required: "Обязательное поле",
        })}
      />
      {errors && errors.title ? (
        <div>
          <p className={s.errorMessage}>{errors.title.message}</p>
        </div>
      ) : null}
      <textarea
        type="text"
        placeholder="Описание"
        {...register("description", {
          required: "Обязательное поле",
        })}
      />
      {errors && errors.description ? (
        <div>
          <p className={s.errorMessage}>{errors.description.message}</p>
        </div>
      ) : null}
      <input
        type="text"
        placeholder="Ссылка на картинку"
        {...register("picture")}
      />

      <button className={s.btn}>Создать пост</button>
    </form>
  );
};

export default CreatePostForm;
