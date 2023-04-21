import React, { useRef } from 'react';
import { Button, Box, Typography, Modal, Container } from '@mui/material';

import CreatePostForm from '../Forms/CreatePostForm/CreatePostForm';
import s from './PostListHead.module.css';

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
          marginTop: 3,
          position: 'relative',
          marginBottom: 6,
        }}
      >
        <Typography
          className={s.title}
          sx={{
            fontFamily: 'Pangolin',
          }}
          textAlign="center"
          variant="h3"
        >
          Мысли, мечтай, меняйся...
        </Typography>
        <Box
          mt={2}
          sx={{
            display: 'flex',
            justifyContent: { md: 'flex-end' },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            sx={{ flexGrow: { xs: 1, md: 0 } }}
          >
            Создать пост
          </Button>
        </Box>
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
