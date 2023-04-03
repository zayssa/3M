import React, { useContext, useCallback } from "react";
import cn from "classnames";
import s from "./PostContent.module.css";
import { useNavigate } from "react-router";
import { Chip } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { isLiked } from "../../utils/post";
import { UserContext } from "../../context/UserContext";
import api from '../../utils/api';

const PostContent = ({ title, image, text, created_at, likes, _id, tags, onPostLike }) => {
  console.log("title", title);
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const liked = isLiked(likes, currentUser?._id);

  // const handleChangePost = useCallback(
  //   () => api.changePost(_id),
  //   [_id]
  // );

  return (
    <main className={cn(s.post, s.container)}>
      <a className={s.battonBack} href="#" onClick={() => navigate(-1)}>
        Назад
      </a>
      <h2 className={s.title}>{title}</h2>
      <img className={s.image} src={image} alt="photo" />
      <p>{text}</p>
      <p>{`Создано ${created_at}`}</p>
      {/* <p>{`Автор: ${author.name}`}</p> */}
      {tags &&
        tags.map((tag, idx) => (
          <Chip
            key={idx}
            color="primary"
            label={tag}
            size="small"
            sx={{ marginRight: 1 }}
          />
        ))}
      <div>
        <button
          className={cn(s.favorite, {
            [s.favoriteActive]: liked,
          })}
          onClick={onPostLike}
        >
          <Favorite />
          <span>{liked ? "В избранном" : "В избранное"}</span>
        </button>
      </div>
      {/* {author._id === currentUser._id && (
        <button onClick={handleChangePost}>Изменить</button>
      )} */}
    </main>
  );
};

export default PostContent;
