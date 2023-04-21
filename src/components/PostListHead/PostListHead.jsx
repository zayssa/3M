import React, { useRef } from 'react';
import { Button as ButtonMui, Box, Typography, Modal, Container } from '@mui/material';

import CreatePostForm from '../Forms/CreatePostForm/CreatePostForm';
import s from './PostListHead.module.css'

const PostListHead = () => {
  const postEditForm = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    postEditForm.current.resetForm();
  };
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Box
      className={s.wrapper}
        sx={{
          height: 100,
          marginTop: 3,
          position: "relative",
          marginBottom: 6,
        }}
      >
        <Typography
        className={s.title}
          sx={{
            fontFamily: "Pangolin",
          }}
          textAlign="center"
          variant="h3"
        >
          Мысли, мечтай, меняйся...
        </Typography>
        <ButtonMui
          sx={{ position: "absolute", bottom: 10, right: 10 }}
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          Создать пост
        </ButtonMui>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <div>
            <CreatePostForm handleClose={handleClose} ref={postEditForm} />
          </div>
        </Modal>
      </Box>
    </Container>
  );
};

export default PostListHead;
