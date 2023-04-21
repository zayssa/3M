import React, { useContext, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Button,
  Chip,
  Grid,
  Modal,
  IconButton,
  Box,
  Stack,
  Container,
} from '@mui/material';
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

  const [open, setOpen] = useState(false);
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
        <Container>
          <Box pb={5} component="main" sx={{marginBottom: '20px'}}>
            <Box className={s.postHead}>
              <h2 className={s.title}>{post.title}</h2>
              <div className={s.headBox}>
                {post.author && <p>{`Автор: ${post.author.name}`}</p>}
                {post.created_at && (
                  <p>{`Создано ${dayjs(post.created_at).format("LLL")}`}</p>
                )}
              </div>
            </Box>
            <Box className={s.content}>
              <Box className={s.image}>
                <img src={post.image} alt="post illustration" />
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <Stack direction="column" spacing={1}>
                      {post.tags &&
                        post.tags
                          .filter((tag) => tag.length > 0)
                          .map((tag, idx) => (
                            <Stack>
                              <Chip
                                key={idx}
                                color="primary"
                                label={tag}
                                size="small"
                                sx={{ marginRight: 1 }}
                              />
                            </Stack>
                          ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
              <Box className={s.description}>
                <p>{post.text}</p>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="end"
                >
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
                      {liked ? "В избранном" : "В избранное"}
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
              </Box>
            </Box>

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
        </Container>
      )}
    </>
  );
};

export default PostContent;
