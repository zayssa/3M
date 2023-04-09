import React from "react";
import s from "./EditPostForm.module.css";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

const EditPostForm = (title, text, image) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  console.log("errors", errors);
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log("text, title, image", image);

  return (
    <form method="post" className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={s.title}>Редактирование поста</h3>
      <input
        type="text"
        placeholder="Заголовок"
        value={title.title}
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
        value={text.text}
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
        value={image}
        {...register("picture")}
      />
      <button className={s.btn}>Сохранить</button>
    </form>
  );
};

export default EditPostForm;
