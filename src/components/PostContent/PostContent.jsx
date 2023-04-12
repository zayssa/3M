import React, { useContext, useCallback } from 'react';
import cn from 'classnames';
import s from './PostContent.module.css';
import { useNavigate } from 'react-router';
import { Button, Chip, Grid, Modal } from '@mui/material';
import { Favorite, FavoriteOutlined } from '@mui/icons-material';
import { isLiked } from '../../utils/post';
import { UserContext } from '../../context/UserContext';
import { PostContext } from '../../context/PostContext';
import CreatePostForm from '../Forms/CreatePostForm/CreatePostForm';

const PostContent = ({ post, onPostDataChange }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { handlePostLike } = useContext(PostContext);

  const liked = isLiked(post.likes, currentUser?._id);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLike = useCallback(() => {
    handlePostLike(post).then(() => {
      onPostDataChange();
    });
  }, [post, handlePostLike, onPostDataChange]);

  return (
    <main className={cn(s.post, s.container)}>
      <a className={s.buttonBack} href="/" onClick={() => navigate(-1)}>
        Назад
      </a>
      <h2 className={s.title}>{post.title}</h2>
      <img className={s.image} src={post.image} alt="post illustration" />
      <p>{post.text}</p>
      {post.created_at && <p>{`Создано ${post.created_at}`}</p>}
      {post.author && <p>{`Автор: ${post.author.name}`}</p>}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          {post.tags &&
            post.tags.map((tag, idx) => (
              <Chip
                key={idx}
                color="primary"
                label={tag}
                size="small"
                sx={{ marginRight: 1 }}
              />
            ))}
        </Grid>
        <Grid item>
          <Button
            onClick={handleLike}
            startIcon={
              liked ? (
                <Favorite color="error" />
              ) : (
                <FavoriteOutlined color="primary" />
              )
            }
          >
            {liked ? 'В избранном' : 'В избранное'}
          </Button>
        </Grid>
        <Grid item>
          {post.author?._id === currentUser?._id && (
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Изменить
            </Button>
          )}
        </Grid>
      </Grid>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <div>
          <CreatePostForm
            handleClose={handleClose}
            postData={post}
            onSave={onPostDataChange}
          />
        </div>
      </Modal>
    </main>
  );
};

export default PostContent;
