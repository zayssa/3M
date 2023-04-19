import React, { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Chip, Grid, Modal, IconButton, Box } from '@mui/material';
import { Favorite, FavoriteOutlined, Delete } from '@mui/icons-material';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { isLiked } from '../../utils/post';
import { UserContext } from '../../context/UserContext';
import { PostContext } from '../../context/PostContext';
import CreatePostForm from '../Forms/CreatePostForm/CreatePostForm';
import api from '../../utils/api';
import s from './PostContent.module.css';
import Spinner from '../Spinner/Spinner';

dayjs.locale('ru');
dayjs.extend(localizedFormat);

const PostContent = ({ post, onPostDataChange }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { handlePostLike, isLoading } = useContext(PostContext);

  const liked = isLiked(post.likes, currentUser?._id);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLike = useCallback(() => {
    handlePostLike(post).then(() => {
      onPostDataChange();
    });
  }, [post, handlePostLike, onPostDataChange]);

  const handleDelete = useCallback(() => api.deletePost(post._id), [post._id]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box pb={5} component="main" className={s.container}>
          <Link className={s.buttonBack} href="/" onClick={() => navigate(-1)}>
            Назад
          </Link>
          <h2 className={s.title}>{post.title}</h2>
          <img className={s.image} src={post.image} alt="post illustration" />
          <p>{post.text}</p>
          {post.created_at && (
            <p>{`Создано ${dayjs(post.created_at).format('LLL')}`}</p>
          )}
          {post.author && <p>{`Автор: ${post.author.name}`}</p>}
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              {post.tags &&
                post.tags
                  .filter((tag) => tag.length > 0)
                  .map((tag, idx) => (
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
                <IconButton sx={{ marginLeft: 2 }} onClick={handleDelete}>
                  <Delete />
                </IconButton>
              )}
            </Grid>
            <Grid item>
              {post.author?._id === currentUser?._id && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpen}
                >
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
        </Box>
      )}
    </>
  );
};

export default PostContent;
