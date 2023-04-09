import React, { useContext, useCallback } from "react";
import cn from "classnames";
import s from "./PostContent.module.css";
import { useNavigate } from "react-router";
import { Box, Button, Chip, Modal } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { isLiked } from "../../utils/post";
import { UserContext } from "../../context/UserContext";
import api from '../../utils/api';
import EditPostForm from "../Forms/EditPostForm/EditPostForm";

const PostContent = ({ title, image, text, created_at, likes, _id, tags, onPostLike }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const liked = isLiked(likes, currentUser?._id);

  const handleChangePost = useCallback(
    () => api.changePost(_id),
    [_id]
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };




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

      
      <Button onClick={handleOpen}>Редактировать</Button>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <EditPostForm title={title} text={text} image={image} />
        </Box>
      </Modal>
    </main>
  );
};

export default PostContent;
